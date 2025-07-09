import type { Config } from "@react-router/dev/config";

export default {
  // Keep SSR enabled for initial load, but serve static assets from Cloudflare
  ssr: true,
  // Enable static prerendering for better performance
  prerender: ["/"]
} satisfies Config;