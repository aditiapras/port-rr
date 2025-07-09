// Cloudflare Workers entry point for React Router application
export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;
      
      // Let static assets be served by the assets configuration
      // For HTML routes, we'll need to handle them appropriately
      
      // For now, let's pass through all requests to the assets
      // The assets configuration will handle static files, and for routes
      // that don't match static files, we can serve the prerendered index.html
      
      return new Response(null, { status: 404 });
      
    } catch (error) {
      console.error("Worker error:", error);
      return new Response("Internal Server Error", {
        status: 500,
        statusText: "Internal Server Error"
      });
    }
  }
};