import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, useRouteError, isRouteErrorResponse, Link, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const appCss = "/assets/app-C6G_3qQV.css";
const links = () => [{
  rel: "stylesheet",
  href: appCss
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ jsx("div", {
      className: "min-h-screen flex items-center justify-center bg-gray-100",
      children: /* @__PURE__ */ jsxs("div", {
        className: "text-center",
        children: [/* @__PURE__ */ jsxs("h1", {
          className: "text-4xl font-bold text-gray-800 mb-4",
          children: [error.status, " ", error.statusText]
        }), /* @__PURE__ */ jsx("p", {
          className: "text-gray-600 mb-8",
          children: error.data
        }), /* @__PURE__ */ jsx(Link, {
          to: "/",
          className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
          children: "Go Home"
        })]
      })
    });
  }
  return /* @__PURE__ */ jsx("div", {
    className: "min-h-screen flex items-center justify-center bg-gray-100",
    children: /* @__PURE__ */ jsxs("div", {
      className: "text-center",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-bold text-red-600 mb-4",
        children: "Oops!"
      }), /* @__PURE__ */ jsx("p", {
        className: "text-gray-600 mb-8",
        children: "Something went wrong."
      }), /* @__PURE__ */ jsx(Link, {
        to: "/",
        className: "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded",
        children: "Go Home"
      })]
    })
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "React Router - Port RR"
  }, {
    name: "description",
    content: "A modern, production-ready template for building full-stack React applications using React Router."
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100",
    children: /* @__PURE__ */ jsx("div", {
      className: "container mx-auto px-4 py-16",
      children: /* @__PURE__ */ jsxs("div", {
        className: "text-center",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-5xl font-bold text-gray-800 mb-6",
          children: "Welcome to React Router!"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
          children: "A modern, production-ready template for building full-stack React applications using React Router."
        }), /* @__PURE__ */ jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-blue-500 text-3xl mb-4",
              children: "🚀"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "Server-side rendering"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Built-in SSR support for better performance and SEO."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-yellow-500 text-3xl mb-4",
              children: "⚡️"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "Hot Module Replacement"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Fast development with HMR for instant updates."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-green-500 text-3xl mb-4",
              children: "📦"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "Asset bundling"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Optimized bundling and asset management."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-purple-500 text-3xl mb-4",
              children: "🔄"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "Data loading"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Efficient data loading and mutations."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-blue-600 text-3xl mb-4",
              children: "🔒"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "TypeScript"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Type-safe development with TypeScript by default."
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "bg-white rounded-lg shadow-lg p-6",
            children: [/* @__PURE__ */ jsx("div", {
              className: "text-cyan-500 text-3xl mb-4",
              children: "🎉"
            }), /* @__PURE__ */ jsx("h3", {
              className: "text-xl font-semibold mb-2",
              children: "TailwindCSS"
            }), /* @__PURE__ */ jsx("p", {
              className: "text-gray-600",
              children: "Utility-first CSS framework for styling."
            })]
          })]
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-16",
          children: /* @__PURE__ */ jsx("a", {
            href: "https://reactrouter.com/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200",
            children: "📖 Read the docs"
          })
        })]
      })
    })
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DzVcQqnB.js", "imports": ["/assets/chunk-QMGIS6GS-gPyaO7H2.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-OpMjZxSN.js", "imports": ["/assets/chunk-QMGIS6GS-gPyaO7H2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-RZwhVDt1.js", "imports": ["/assets/chunk-QMGIS6GS-gPyaO7H2.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-160ff3f6.js", "version": "160ff3f6", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
