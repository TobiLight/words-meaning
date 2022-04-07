var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// server.js
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\User\Desktop\words-meaning\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/appstyles.css
var appstyles_default = "/build/_assets/appstyles-E4DBFOGH.css";

// route:C:\Users\User\Desktop\words-meaning\app\root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: appstyles_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:C:\Users\User\Desktop\words-meaning\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-4xl font-semibold"
  }, "Hello earthlings"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "f31ae8a9", "entry": { "module": "/build/entry.client-QQIOJDD7.js", "imports": ["/build/_shared/chunk-7VM4FXGI.js", "/build/_shared/chunk-WE4I4FD6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-73DNKADC.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IPZ276PJ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-F31AE8A9.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vc2VydmVyLmpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9AcmVtaXgtcnVuL2Rldi9jb21waWxlci9zaGltcy9yZWFjdC50cyIsICJzZXJ2ZXItZW50cnktbW9kdWxlOkByZW1peC1ydW4vZGV2L3NlcnZlci1idWlsZCIsICIuLi8uLi8uLi9hcHAvZW50cnkuc2VydmVyLnRzeCIsICJyb3V0ZTpDOlxcVXNlcnNcXFVzZXJcXERlc2t0b3BcXHdvcmRzLW1lYW5pbmdcXGFwcFxccm9vdC50c3giLCAicm91dGU6QzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFx3b3Jkcy1tZWFuaW5nXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBjcmVhdGVSZXF1ZXN0SGFuZGxlciB9IGZyb20gXCJAcmVtaXgtcnVuL25ldGxpZnlcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuLypcbiAqIFJldHVybnMgYSBjb250ZXh0IG9iamVjdCB3aXRoIGF0IG1vc3QgMyBrZXlzOlxuICogIC0gYG5ldGxpZnlHcmFwaFRva2VuYDogcmF3IGF1dGhlbnRpY2F0aW9uIHRva2VuIHRvIHVzZSB3aXRoIE5ldGxpZnkgR3JhcGhcbiAqICAtIGBjbGllbnROZXRsaWZ5R3JhcGhBY2Nlc3NUb2tlbmA6IEZvciB1c2Ugd2l0aCBKV1RzIGdlbmVyYXRlZCBieVxuICogICAgYG5ldGxpZnktZ3JhcGgtYXV0aGAuXG4gKiAgLSBgbmV0bGlmeUdyYXBoU2lnbmF0dXJlYDogYSBzaWduYXR1cmUgZm9yIHN1YnNjcmlwdGlvbiBldmVudHMuIFdpbGwgYmVcbiAqICAgIHByZXNlbnQgaWYgYSBzZWNyZXQgaXMgc2V0LlxuICovXG5mdW5jdGlvbiBnZXRMb2FkQ29udGV4dChldmVudCwgY29udGV4dCkge1xuICBsZXQgcmF3QXV0aG9yaXphdGlvblN0cmluZztcbiAgbGV0IG5ldGxpZnlHcmFwaFRva2VuO1xuXG4gIGlmIChldmVudC5hdXRobGlmeVRva2VuICE9IG51bGwpIHtcbiAgICBuZXRsaWZ5R3JhcGhUb2tlbiA9IGV2ZW50LmF1dGhsaWZ5VG9rZW47XG4gIH1cblxuICBsZXQgYXV0aEhlYWRlciA9IGV2ZW50LmhlYWRlcnNbXCJhdXRob3JpemF0aW9uXCJdO1xuICBsZXQgZ3JhcGhTaWduYXR1cmVIZWFkZXIgPSBldmVudC5oZWFkZXJzW1wieC1uZXRsaWZ5LWdyYXBoLXNpZ25hdHVyZVwiXTtcblxuICBpZiAoYXV0aEhlYWRlciAhPSBudWxsICYmIC9CZWFyZXIgL2dpLnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICByYXdBdXRob3JpemF0aW9uU3RyaW5nID0gYXV0aEhlYWRlci5zcGxpdChcIiBcIilbMV07XG4gIH1cblxuICBsZXQgbG9hZENvbnRleHQgPSB7XG4gICAgY2xpZW50TmV0bGlmeUdyYXBoQWNjZXNzVG9rZW46IHJhd0F1dGhvcml6YXRpb25TdHJpbmcsXG4gICAgbmV0bGlmeUdyYXBoVG9rZW46IG5ldGxpZnlHcmFwaFRva2VuLFxuICAgIG5ldGxpZnlHcmFwaFNpZ25hdHVyZTogZ3JhcGhTaWduYXR1cmVIZWFkZXIsXG4gIH07XG5cbiAgLy8gUmVtb3ZlIGtleXMgd2l0aCB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5rZXlzKGxvYWRDb250ZXh0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAobG9hZENvbnRleHRba2V5XSA9PSBudWxsKSB7XG4gICAgICBkZWxldGUgbG9hZENvbnRleHRba2V5XTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsb2FkQ29udGV4dDtcbn1cblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBnZXRMb2FkQ29udGV4dCxcbiAgbW9kZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYsXG59KTtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHdvcmRzLW1lYW5pbmdcXFxcYXBwXFxcXGVudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXHdvcmRzLW1lYW5pbmdcXFxcYXBwXFxcXHJvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRGVza3RvcFxcXFx3b3Jkcy1tZWFuaW5nXFxcXGFwcFxcXFxyb3V0ZXNcXFxcaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9XG4gIH07IiwgImltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcIkByZW1peC1ydW4vbm9kZVwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGxldCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGVcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy9hcHBzdHlsZXMuY3NzJ1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgY2hhcnNldDogXCJ1dGYtOFwiLFxuICB0aXRsZTogXCJOZXcgUmVtaXggQXBwXCIsXG4gIHZpZXdwb3J0OiBcIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIixcbn0pO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICBocmVmOiBzdHlsZXNcbiAgICB9XG4gIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxodG1sIGxhbmc9XCJlblwiPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgZm9udEZhbWlseTogXCJzeXN0ZW0tdWksIHNhbnMtc2VyaWZcIiwgbGluZUhlaWdodDogXCIxLjRcIiB9fT5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkXCI+SGVsbG8gZWFydGhsaW5nczwvaDE+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZjMxYWU4YTknLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVFRSU9KREQ3LmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay03Vk00RlhHSS5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLVdFNEk0RkQ2LmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC03M0ROS0FEQy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LUlQWjI3NlBKLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUYzMUFFOEE5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDQUEsWUFBdUI7OztBREF2QixxQkFBcUM7OztBRUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsbUJBQTRCO0FBQzVCLG9CQUErQjtBQUVoQix1QkFDYixTQUNBLG9CQUNBLGlCQUNBLGNBQ0E7QUFDQSxNQUFJLFNBQVMsa0NBQ1gsb0NBQUMsMEJBQUQ7QUFBQSxJQUFhLFNBQVM7QUFBQSxJQUFjLEtBQUssUUFBUTtBQUFBO0FBR25ELGtCQUFnQixJQUFJLGdCQUFnQjtB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
