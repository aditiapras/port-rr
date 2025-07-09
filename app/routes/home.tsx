import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "React Router - Port RR" },
    { name: "description", content: "A modern, production-ready template for building full-stack React applications using React Router." },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to React Router!
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern, production-ready template for building full-stack React applications using React Router.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-blue-500 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">Server-side rendering</h3>
              <p className="text-gray-600">Built-in SSR support for better performance and SEO.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-yellow-500 text-3xl mb-4">⚡️</div>
              <h3 className="text-xl font-semibold mb-2">Hot Module Replacement</h3>
              <p className="text-gray-600">Fast development with HMR for instant updates.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-green-500 text-3xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-2">Asset bundling</h3>
              <p className="text-gray-600">Optimized bundling and asset management.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-purple-500 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">Data loading</h3>
              <p className="text-gray-600">Efficient data loading and mutations.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-blue-600 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">TypeScript</h3>
              <p className="text-gray-600">Type-safe development with TypeScript by default.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-cyan-500 text-3xl mb-4">🎉</div>
              <h3 className="text-xl font-semibold mb-2">TailwindCSS</h3>
              <p className="text-gray-600">Utility-first CSS framework for styling.</p>
            </div>
          </div>
          
          <div className="mt-16">
            <a
              href="https://reactrouter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              📖 Read the docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}