
// --------------------
// Request: C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry
// Parents: 
// - <entry> ($id_c757eb9e)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs ($id_01b7b628)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/paths.mjs ($id_56cd283c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/css.mjs ($id_e4592a4e)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/root-component.mjs ($id_d2591284)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/app-component.mjs ($id_17c27e52)
// --------------------
const $id_0229cf84 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/paths.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/css.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/root-component.mjs");

const __vite_ssr_import_7__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/app-component.mjs");

if (!globalThis.$fetch) {
  globalThis.$fetch = __vite_ssr_import_1__.$fetch.create({
    baseURL: __vite_ssr_import_2__.baseURL()
  });
}
let entry;
const plugins = __vite_ssr_import_3__.normalizePlugins(__vite_ssr_import_5__.default);
if (true) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp, ssrContext });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      ssrContext.error = ssrContext.error || err;
    }
    return vueApp;
  };
}
if (false) {
  if (true && __vite_ssr_import_meta__.webpackHot) {
    __vite_ssr_import_meta__.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? __vite_ssr_import_0__.createSSRApp(__vite_ssr_import_6__.default) : __vite_ssr_import_0__.createApp(__vite_ssr_import_6__.default);
    vueApp.component("App", __vite_ssr_import_7__.default);
    const nuxt = __vite_ssr_import_3__.createNuxtApp({ vueApp });
    nuxt.hooks.hookOnce("app:suspense:resolve", () => {
      nuxt.isHydrating = false;
    });
    try {
      await __vite_ssr_import_3__.applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#__nuxt");
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await __vite_ssr_import_0__.nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
__vite_ssr_exports__.default = (ctx) => entry(ctx);
;
}


// --------------------
// Request: /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/components.plugin.mjs ($id_ef841a6e)
// - /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs ($id_438a5406)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs ($id_7e11cc02)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// Dependencies: 

// --------------------
const $id_b79b7992 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 

// --------------------
const $id_01b7b628 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/paths.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// --------------------
const $id_56cd283c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const appConfig = {"baseURL":"/","buildAssetsDir":"/_nuxt/","assetsPath":{},"cdnURL":"","head":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}}
const baseURL = () => appConfig.baseURL
Object.defineProperty(__vite_ssr_exports__, "baseURL", { enumerable: true, configurable: true, get(){ return baseURL }});
const buildAssetsDir = () => appConfig.buildAssetsDir
Object.defineProperty(__vite_ssr_exports__, "buildAssetsDir", { enumerable: true, configurable: true, get(){ return buildAssetsDir }});
const buildAssetsURL = (...path) => __vite_ssr_import_0__.joinURL(publicAssetsURL(), buildAssetsDir(), ...path)
Object.defineProperty(__vite_ssr_exports__, "buildAssetsURL", { enumerable: true, configurable: true, get(){ return buildAssetsURL }});
const publicAssetsURL = (...path) => {
  const publicBase = appConfig.cdnURL || appConfig.baseURL
  return path.length ? __vite_ssr_import_0__.joinURL(publicBase, ...path) : publicBase
}
Object.defineProperty(__vite_ssr_exports__, "publicAssetsURL", { enumerable: true, configurable: true, get(){ return publicAssetsURL }});;
}


// --------------------
// Request: /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/paths.mjs ($id_56cd283c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// Dependencies: 

// --------------------
const $id_495ace14 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_c519006a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs ($id_efa9f6c9)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_48cedfc3)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs ($id_8456c3bf)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// --------------------
const $id_766abaf4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_1__);
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_2__);
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useMeta }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs ($id_1a92400c)
// - /node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs ($id_d6fb3d59)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// --------------------
const $id_10acdc10 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs");

const nuxtAppCtx = __vite_ssr_import_2__.getContext("nuxt-app");
const NuxtPluginIndicator = "__nuxt_plugin";
Object.defineProperty(__vite_ssr_exports__, "NuxtPluginIndicator", { enumerable: true, configurable: true, get(){ return NuxtPluginIndicator }});
function createNuxtApp(options) {
  const nuxtApp = {
    provide: void 0,
    globalName: "nuxt",
    payload: __vite_ssr_import_0__.reactive({
      data: {},
      state: {},
      _errors: {},
      ...false ? window.__NUXT__ : { serverRendered: true }
    }),
    isHydrating: false,
    _asyncDataPromises: {},
    ...options
  };
  nuxtApp.hooks = __vite_ssr_import_1__.createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  if (true) {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  if (true) {
    nuxtApp.payload.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = true ? options.ssrContext.runtimeConfig : __vite_ssr_import_0__.reactive(nuxtApp.payload.config);
  const compatibilityConfig = new Proxy(runtimeConfig, {
    get(target, prop) {
      if (prop === "public") {
        return target.public;
      }
      return target[prop] ?? target.public[prop];
    },
    set(target, prop, value) {
      if (true || prop === "public" || prop === "app") {
        return false;
      }
      target[prop] = value;
      target.public[prop] = value;
      return true;
    }
  });
  nuxtApp.provide("config", compatibilityConfig);
  return nuxtApp;
}
Object.defineProperty(__vite_ssr_exports__, "createNuxtApp", { enumerable: true, configurable: true, get(){ return createNuxtApp }});
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, plugin, [nuxtApp]) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugin", { enumerable: true, configurable: true, get(){ return applyPlugin }});
async function applyPlugins(nuxtApp, plugins) {
  for (const plugin of plugins) {
    await applyPlugin(nuxtApp, plugin);
  }
}
Object.defineProperty(__vite_ssr_exports__, "applyPlugins", { enumerable: true, configurable: true, get(){ return applyPlugins }});
function normalizePlugins(_plugins) {
  let needsLegacyContext = false;
  const plugins = _plugins.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins.unshift(__vite_ssr_import_3__.legacyPlugin);
  }
  return plugins;
}
Object.defineProperty(__vite_ssr_exports__, "normalizePlugins", { enumerable: true, configurable: true, get(){ return normalizePlugins }});
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return defineNuxtPlugin }});
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
Object.defineProperty(__vite_ssr_exports__, "isLegacyPlugin", { enumerable: true, configurable: true, get(){ return isLegacyPlugin }});
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  if (true) {
    return nuxtAppCtx.callAsync(nuxt, fn);
  } else {
    nuxtAppCtx.set(nuxt);
    return fn();
  }
}
Object.defineProperty(__vite_ssr_exports__, "callWithNuxt", { enumerable: true, configurable: true, get(){ return callWithNuxt }});
function useNuxtApp() {
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  if (!vm) {
    const nuxtAppInstance = nuxtAppCtx.use();
    if (!nuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return nuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return useNuxtApp }});
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return useRuntimeConfig }});
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
;
}


// --------------------
// Request: /node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 

// --------------------
const $id_1a92400c = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 

// --------------------
const $id_d6fb3d59 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// Dependencies: 
// - /node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs ($id_05d98782)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// --------------------
const $id_a8337ab8 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");

function mock(warning) {
  console.warn(warning);
  return __vite_ssr_import_0__.default;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const serverProperties = new Set([
  "req",
  "res",
  "ssrContext"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: true,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return __vite_ssr_import_1__.useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (false && serverProperties.has(p)) {
        return void 0;
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
  if (false) {
    nuxtApp.hook("app:created", () => {
      const legacyApp = new Proxy(nuxtApp.vueApp, {
        get(source, p) {
          if (["$root", "constructor"].includes(p)) {
            return legacyApp;
          }
          return source[p] || nuxtApp[p];
        }
      });
      window[`$${nuxtApp.globalName}`] = legacyApp;
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "legacyPlugin", { enumerable: true, configurable: true, get(){ return legacyPlugin }});
;
}


// --------------------
// Request: /node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs ($id_a8337ab8)
// Dependencies: 

// --------------------
const $id_05d98782 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs ($id_c519006a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs ($id_15536816)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs ($id_efa9f6c9)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// --------------------
const $id_ddfc5c1d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtComponent }});
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_1__.refreshNuxtData }});
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_2__.useHydration }});
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs");

Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_3__.useState }});
const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs");

Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_4__.useError }});
const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs");

Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useLazyFetch }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs");

Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.useCookie }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs");

Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs");

Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useRouter }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js ($id_f9e109a4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// --------------------
const $id_bb679022 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

const NuxtComponentIndicator = "__nuxt_component";
Object.defineProperty(__vite_ssr_exports__, "NuxtComponentIndicator", { enumerable: true, configurable: true, get(){ return NuxtComponentIndicator }});
async function runLegacyAsyncData(res, fn) {
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const route = __vite_ssr_import_1__.useRoute();
  const vm = __vite_ssr_import_0__.getCurrentInstance();
  const { fetchKey } = vm.proxy.$options;
  const key = typeof fetchKey === "function" ? fetchKey(() => "") : fetchKey || route.fullPath;
  const { data } = await __vite_ssr_import_3__.useAsyncData(`options:asyncdata:${key}`, () => fn(nuxt._legacyContext));
  if (data.value && typeof data.value === "object") {
    Object.assign(await res, __vite_ssr_import_0__.toRefs(__vite_ssr_import_0__.reactive(data.value)));
  } else if (true) {
    console.warn("[nuxt] asyncData should return an object", data);
  }
}
const defineNuxtComponent = function defineNuxtComponent2(options) {
  const { setup } = options;
  if (!setup && !options.asyncData) {
    return {
      [NuxtComponentIndicator]: true,
      ...options
    };
  }
  return {
    [NuxtComponentIndicator]: true,
    ...options,
    setup(props, ctx) {
      const res = setup?.(props, ctx) || {};
      let promises = [];
      promises = promises || [];
      if (options.asyncData) {
        promises.push(runLegacyAsyncData(res, options.asyncData));
      }
      return Promise.resolve(res).then(() => Promise.all(promises)).then(() => res).finally(() => {
        promises.length = 0;
        promises = null;
      });
    }
  };
};
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return defineNuxtComponent }});
;
}


// --------------------
// Request: /node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// Dependencies: 

// --------------------
const $id_f9e109a4 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs ($id_bb679022)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_55f07f6c = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const getDefault = () => null;
function useAsyncData(key, handler, options = {}) {
  if (typeof key !== "string") {
    throw new TypeError("asyncData key must be a string");
  }
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }
  options = { server: true, default: getDefault, ...options };
  if (options.defer) {
    console.warn("[useAsyncData] `defer` has been renamed to `lazy`. Support for `defer` will be removed in RC.");
  }
  options.lazy = options.lazy ?? options.defer ?? false;
  options.initialCache = options.initialCache ?? true;
  const nuxt = __vite_ssr_import_2__.useNuxtApp();
  const instance = __vite_ssr_import_0__.getCurrentInstance();
  if (instance && !instance._nuxtOnBeforeMountCbs) {
    const cbs = instance._nuxtOnBeforeMountCbs = [];
    if (instance && false) {
      __vite_ssr_import_0__.onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      __vite_ssr_import_0__.onUnmounted(() => cbs.splice(0, cbs.length));
    }
  }
  const useInitialCache = () => options.initialCache && nuxt.payload.data[key] !== void 0;
  const asyncData = {
    data: __vite_ssr_import_1__.wrapInRef(nuxt.payload.data[key] ?? options.default()),
    pending: __vite_ssr_import_0__.ref(!useInitialCache()),
    error: __vite_ssr_import_0__.ref(nuxt.payload._errors[key] ?? null)
  };
  asyncData.refresh = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      return nuxt._asyncDataPromises[key];
    }
    if (opts._initial && useInitialCache()) {
      return nuxt.payload.data[key];
    }
    asyncData.pending.value = true;
    nuxt._asyncDataPromises[key] = Promise.resolve(handler(nuxt)).then((result) => {
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      asyncData.error.value = error;
      asyncData.data.value = __vite_ssr_import_0__.unref(options.default());
    }).finally(() => {
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = true;
      }
      delete nuxt._asyncDataPromises[key];
    });
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (true && fetchOnServer) {
    const promise = initialFetch();
    __vite_ssr_import_0__.onServerPrefetch(() => promise);
  }
  if (false) {
    if (fetchOnServer && nuxt.isHydrating && key in nuxt.payload.data) {
      asyncData.pending.value = false;
    } else if (instance && nuxt.payload.serverRendered && (nuxt.isHydrating || options.lazy)) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else {
      initialFetch();
    }
    if (options.watch) {
      __vite_ssr_import_0__.watch(options.watch, () => asyncData.refresh());
    }
    const off = nuxt.hook("app:data:refresh", (keys) => {
      if (!keys || keys.includes(key)) {
        return asyncData.refresh();
      }
    });
    if (instance) {
      __vite_ssr_import_0__.onUnmounted(off);
    }
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return useAsyncData }});
function useLazyAsyncData(key, handler, options = {}) {
  return useAsyncData(key, handler, { ...options, lazy: true });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return useLazyAsyncData }});
function refreshNuxtData(keys) {
  if (true) {
    return Promise.resolve();
  }
  const _keys = keys ? Array.isArray(keys) ? keys : [keys] : void 0;
  return __vite_ssr_import_2__.useNuxtApp().callHook("app:data:refresh", _keys);
}
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return refreshNuxtData }});
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_5fb452ea = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const wrapInRef = (value) => __vite_ssr_import_0__.isRef(value) ? value : __vite_ssr_import_0__.ref(value);
Object.defineProperty(__vite_ssr_exports__, "wrapInRef", { enumerable: true, configurable: true, get(){ return wrapInRef }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_c519006a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useHydration = (key, get, set) => {
  const nuxt = __vite_ssr_import_0__.useNuxtApp();
  if (true) {
    nuxt.hooks.hook("app:rendered", () => {
      nuxt.payload[key] = get();
    });
  }
  if (false) {
    nuxt.hooks.hook("app:created", () => {
      set(nuxt.payload[key]);
    });
  }
};
Object.defineProperty(__vite_ssr_exports__, "useHydration", { enumerable: true, configurable: true, get(){ return useHydration }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_15536816 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useState = (key, init) => {
  const nuxt = __vite_ssr_import_1__.useNuxtApp();
  const state = __vite_ssr_import_0__.toRef(nuxt.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (__vite_ssr_import_0__.isRef(initialValue)) {
      nuxt.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
};
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return useState }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_efa9f6c9 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useError = () => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  return __vite_ssr_import_0__.useState("error", () => true ? nuxtApp.ssrContext.error : nuxtApp.payload.error);
};
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return useError }});
const throwError = (_err) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  const err = typeof _err === "string" ? new Error(_err) : _err;
  nuxtApp.callHook("app:error", err);
  if (true) {
    nuxtApp.ssrContext.error = nuxtApp.ssrContext.error || err;
  } else {
    error.value = error.value || err;
  }
  return err;
};
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return throwError }});
const clearError = async (options = {}) => {
  const nuxtApp = __vite_ssr_import_0__.useNuxtApp();
  const error = useError();
  nuxtApp.callHook("app:error:cleared", options);
  if (options.redirect) {
    await nuxtApp.$router.replace(options.redirect);
  }
  error.value = null;
};
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return clearError }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs ($id_138a9c06)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs ($id_55f07f6c)
// --------------------
const $id_e6e5acd2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs");

function useFetch(request, opts = {}) {
  if (true && opts.transform && !opts.key) {
    console.warn("[nuxt] You should provide a key for `useFetch` when using a custom transform function.");
  }
  const key = "$f_" + (opts.key || __vite_ssr_import_0__.hash([request, { ...opts, transform: null }]));
  const _request = __vite_ssr_import_1__.computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return __vite_ssr_import_1__.isRef(r) ? r.value : r;
  });
  const _fetchOptions = {
    ...opts,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  };
  const _asyncDataOptions = {
    ...opts,
    watch: [
      _request,
      ...opts.watch || []
    ]
  };
  const asyncData = __vite_ssr_import_2__.useAsyncData(key, () => {
    return $fetch(_request.value, _fetchOptions);
  }, _asyncDataOptions);
  return asyncData;
}
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return useFetch }});
function useLazyFetch(request, opts = {}) {
  return useFetch(request, {
    ...opts,
    lazy: true
  });
}
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return useLazyFetch }});
;
}


// --------------------
// Request: /node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs ($id_e6e5acd2)
// Dependencies: 

// --------------------
const $id_138a9c06 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs ($id_1c0537b7)
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs ($id_622c7ff8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs ($id_03dc0f08)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs ($id_5fb452ea)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_51244472 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs");

const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const CookieDefaults = {
  path: "/",
  decode: (val) => __vite_ssr_import_3__.default(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  const opts = { ...CookieDefaults, ..._opts };
  const cookies = readRawCookies(opts);
  const cookie = __vite_ssr_import_5__.wrapInRef(cookies[name] ?? opts.default?.());
  if (false) {
    __vite_ssr_import_0__.watch(cookie, () => {
      writeClientCookie(name, cookie.value, opts);
    });
  } else if (true) {
    const nuxtApp = __vite_ssr_import_6__.useNuxtApp();
    const writeFinalCookieValue = () => {
      if (cookie.value !== cookies[name]) {
        writeServerCookie(__vite_ssr_import_4__.useRequestEvent(nuxtApp), name, cookie.value, opts);
      }
    };
    nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:redirected", writeFinalCookieValue);
  }
  return cookie;
}
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return useCookie }});
function readRawCookies(opts = {}) {
  if (true) {
    return __vite_ssr_import_1__.parse(__vite_ssr_import_4__.useRequestEvent()?.req.headers.cookie || "", opts);
  } else if (false) {
    return __vite_ssr_import_1__.parse(document.cookie, opts);
  }
}
function serializeCookie(name, value, opts = {}) {
  if (value === null || value === void 0) {
    return __vite_ssr_import_1__.serialize(name, value, { ...opts, maxAge: -1 });
  }
  return __vite_ssr_import_1__.serialize(name, value, opts);
}
function writeClientCookie(name, value, opts = {}) {
  if (false) {
    document.cookie = serializeCookie(name, value, opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    __vite_ssr_import_2__.appendHeader(event, "Set-Cookie", serializeCookie(name, value, opts));
  }
}
;
}


// --------------------
// Request: /node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 

// --------------------
const $id_1c0537b7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs ($id_904700ca)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// Dependencies: 

// --------------------
const $id_0a9d87b7 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// Dependencies: 

// --------------------
const $id_622c7ff8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs ($id_51244472)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_03dc0f08 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

function useRequestHeaders(include) {
  if (false) {
    return {};
  }
  const headers = __vite_ssr_import_0__.useNuxtApp().ssrContext?.event.req.headers ?? {};
  if (!include) {
    return headers;
  }
  return Object.fromEntries(include.filter((key) => headers[key]).map((key) => [key, headers[key]]));
}
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return useRequestHeaders }});
function useRequestEvent(nuxtApp = __vite_ssr_import_0__.useNuxtApp()) {
  return nuxtApp.ssrContext?.event;
}
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return useRequestEvent }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs ($id_ddfc5c1d)
// Dependencies: 
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_904700ca = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const useRouter = () => {
  return __vite_ssr_import_2__.useNuxtApp()?.$router;
};
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return useRouter }});
const useRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._route;
};
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return useRoute }});
const useActiveRoute = () => {
  return __vite_ssr_import_2__.useNuxtApp()._activeRoute;
};
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return useActiveRoute }});
const defineNuxtRouteMiddleware = (middleware) => middleware;
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return defineNuxtRouteMiddleware }});
const addRouteMiddleware = (name, middleware, options = {}) => {
  const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
  if (options.global || typeof name === "function") {
    nuxtApp._middleware.global.push(typeof name === "function" ? name : middleware);
  } else {
    nuxtApp._middleware.named[name] = middleware;
  }
};
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return addRouteMiddleware }});
const isProcessingMiddleware = () => {
  try {
    if (__vite_ssr_import_2__.useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options = {}) => {
  if (!to) {
    to = "/";
  }
  if (false && isProcessingMiddleware()) {
    return to;
  }
  const router = useRouter();
  if (true) {
    const nuxtApp = __vite_ssr_import_2__.useNuxtApp();
    if (nuxtApp.ssrContext && nuxtApp.ssrContext.event) {
      const redirectLocation = __vite_ssr_import_1__.joinURL(__vite_ssr_import_2__.useRuntimeConfig().app.baseURL, router.resolve(to).fullPath || "/");
      return nuxtApp.callHook("app:redirected").then(() => __vite_ssr_import_0__.sendRedirect(nuxtApp.ssrContext.event, redirectLocation, options.redirectCode || 302));
    }
  }
  return options.replace ? router.replace(to) : router.push(to);
};
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return navigateTo }});
const abortNavigation = (err) => {
  if (true && !isProcessingMiddleware()) {
    throw new Error("abortNavigation() is only usable inside a route middleware handler.");
  }
  if (err) {
    throw err instanceof Error ? err : new Error(err);
  }
  return false;
};
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return abortNavigation }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// --------------------
const $id_8456c3bf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.defineNuxtLink }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs ($id_8456c3bf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_7351f7c2 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const checkPropConflicts = (props, main, sub) => {
    if (true && props[main] !== void 0 && props[sub] !== void 0) {
      console.warn(`[${componentName}] \`${main}\` and \`${sub}\` cannot be used together. \`${sub}\` will be ignored.`);
    }
  };
  return __vite_ssr_import_0__.defineComponent({
    name: componentName,
    props: {
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = __vite_ssr_import_2__.useRouter();
      const to = __vite_ssr_import_0__.computed(() => {
        checkPropConflicts(props, "to", "href");
        return props.to || props.href || "";
      });
      const isExternal = __vite_ssr_import_0__.computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || __vite_ssr_import_1__.hasProtocol(to.value, true);
      });
      return () => {
        if (!isExternal.value) {
          return __vite_ssr_import_0__.h(__vite_ssr_import_0__.resolveComponent("RouterLink"), {
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue
          }, slots.default);
        }
        const href = typeof to.value === "object" ? router.resolve(to.value)?.href ?? null : to.value || null;
        const target = props.target || null;
        checkPropConflicts(props, "noRel", "rel");
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        return __vite_ssr_import_0__.h("a", { href, rel, target }, slots.default?.());
      };
    }
  });
}
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return defineNuxtLink }});
__vite_ssr_exports__.default = defineNuxtLink({ componentName: "NuxtLink" });
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// --------------------
const $id_cfdcd588 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 
// - /node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js ($id_d7d09eda)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_5298d07a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

function useHead(meta) {
  const resolvedMeta = __vite_ssr_import_0__.isFunction(meta) ? __vite_ssr_import_1__.computed(meta) : meta;
  __vite_ssr_import_2__.useNuxtApp()._useHead(resolvedMeta);
}
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
function useMeta(meta) {
  return useHead(meta);
}
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return useMeta }});
;
}


// --------------------
// Request: /node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// Dependencies: 

// --------------------
const $id_d7d09eda = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js\".")
  })


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/css.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 

// --------------------
const $id_e4592a4e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
/* empty */;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs ($id_48cedfc3)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/components.plugin.mjs ($id_ef841a6e)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs ($id_c4251de4)
// --------------------
const $id_39f99006 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/components.plugin.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs");

__vite_ssr_exports__.default = [
  __vite_ssr_import_0__.default,
  __vite_ssr_import_1__.default,
  __vite_ssr_import_2__.default,
  __vite_ssr_import_3__.default,
  __vite_ssr_import_4__.default
];
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_48cedfc3 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_0__.defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/components.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_ef841a6e = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");


const components = {}

__vite_ssr_exports__.default = function (nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name])
    nuxtApp.vueApp.component('Lazy' + name, components[name])
  }
}
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// Dependencies: 
// - /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs ($id_438a5406)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs ($id_c379efc8)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// --------------------
const $id_dbc1312b = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const head = __vite_ssr_import_0__.createHead();
  nuxtApp.vueApp.use(head);
  let headReady = false;
  nuxtApp.hooks.hookOnce("app:mounted", () => {
    __vite_ssr_import_1__.watchEffect(() => {
      head.updateDOM();
    });
    headReady = true;
  });
  const titleTemplate = __vite_ssr_import_1__.ref();
  nuxtApp._useHead = (_meta) => {
    const meta = __vite_ssr_import_1__.ref(_meta);
    if ("titleTemplate" in meta.value) {
      titleTemplate.value = meta.value.titleTemplate;
    }
    const headObj = __vite_ssr_import_1__.computed(() => {
      const overrides = { meta: [] };
      if (titleTemplate.value && "title" in meta.value) {
        overrides.title = typeof titleTemplate.value === "function" ? titleTemplate.value(meta.value.title) : titleTemplate.value.replace(/%s/g, meta.value.title);
      }
      if (meta.value.charset) {
        overrides.meta.push({ key: "charset", charset: meta.value.charset });
      }
      if (meta.value.viewport) {
        overrides.meta.push({ name: "viewport", content: meta.value.viewport });
      }
      return __vite_ssr_import_2__.default(overrides, meta.value);
    });
    head.addHeadObjs(headObj);
    if (true) {
      return;
    }
    if (headReady) {
      __vite_ssr_import_1__.watchEffect(() => {
        head.updateDOM();
      });
    }
    const vm = __vite_ssr_import_1__.getCurrentInstance();
    if (!vm) {
      return;
    }
    __vite_ssr_import_1__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  };
  if (true) {
    nuxtApp.ssrContext.renderMeta = () => __vite_ssr_import_0__.renderHeadToString(head);
  }
});
;
}


// --------------------
// Request: /node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_438a5406 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/index.ts
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");


// src/constants.ts
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];

// src/create-element.ts
var createElement = (tag, attrs, document) => {
  const el = document.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};

// src/stringify-attrs.ts
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};

// src/utils.ts
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}

// src/index.ts
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.hasAttribute(n) ? props.getAttribute(n) : void 0 : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var injectHead = () => {
  const head = __vite_ssr_import_0__.inject(PROVIDE_KEY);
  if (!head) {
    throw new Error(`You may forget to apply app.use(head)`);
  }
  return head;
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document = window.document, type, tags) => {
  var _a;
  const head = document.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  let previousTags = /* @__PURE__ */ new Set();
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index = i;
                  break;
                }
              }
              if (index !== -1) {
                deduped.splice(index, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document.title = title;
      }
      setAttrs(document.documentElement, htmlAttrs);
      setAttrs(document.body, bodyAttrs);
      const tags = /* @__PURE__ */ new Set([...Object.keys(actualTags), ...previousTags]);
      for (const tag of tags) {
        updateElements(document, tag, actualTags[tag] || []);
      }
      previousTags.clear();
      Object.keys(actualTags).forEach((i) => previousTags.add(i));
    }
  };
  return head;
};
var IS_BROWSER = "undefined" !== "undefined";
var useHead = (obj) => {
  const headObj = __vite_ssr_import_0__.ref(obj);
  const head = injectHead();
  head.addHeadObjs(headObj);
  if (IS_BROWSER) {
    __vite_ssr_import_0__.watchEffect(() => {
      head.updateDOM();
    });
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      head.removeHeadObjs(headObj);
      head.updateDOM();
    });
  }
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps(__spreadValues({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
var vnodesToHeadObj = (nodes) => {
  const obj = {
    title: void 0,
    htmlAttrs: void 0,
    bodyAttrs: void 0,
    base: void 0,
    meta: [],
    link: [],
    style: [],
    script: []
  };
  for (const node of nodes) {
    const type = node.type === "html" ? "htmlAttrs" : node.type === "body" ? "bodyAttrs" : node.type;
    if (typeof type !== "string" || !(type in obj))
      continue;
    const props = __spreadProps(__spreadValues({}, node.props), {
      children: Array.isArray(node.children) ? node.children[0].children : node.children
    });
    if (Array.isArray(obj[type])) {
      ;
      obj[type].push(props);
    } else if (type === "title") {
      obj.title = props.children;
    } else {
      ;
      obj[type] = props;
    }
  }
  return obj;
};
var Head = /* @__PURE__ */ __vite_ssr_import_0__.defineComponent({
  name: "Head",
  setup(_, { slots }) {
    const head = injectHead();
    let obj;
    __vite_ssr_import_0__.onBeforeUnmount(() => {
      if (obj) {
        head.removeHeadObjs(obj);
        head.updateDOM();
      }
    });
    return () => {
      __vite_ssr_import_0__.watchEffect(() => {
        if (!slots.default)
          return;
        if (obj) {
          head.removeHeadObjs(obj);
        }
        obj = __vite_ssr_import_0__.ref(vnodesToHeadObj(slots.default()));
        head.addHeadObjs(obj);
        if (IS_BROWSER) {
          head.updateDOM();
        }
      });
      return null;
    };
  }
});

Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
Object.defineProperty(__vite_ssr_exports__, "createHead", { enumerable: true, configurable: true, get(){ return createHead }});
Object.defineProperty(__vite_ssr_exports__, "injectHead", { enumerable: true, configurable: true, get(){ return injectHead }});
Object.defineProperty(__vite_ssr_exports__, "renderHeadToString", { enumerable: true, configurable: true, get(){ return renderHeadToString }});
Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return useHead }});
;
}


// --------------------
// Request: /node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs ($id_dbc1312b)
// Dependencies: 

// --------------------
const $id_c379efc8 = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs ($id_788f106d)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/meta.config.mjs ($id_f642d9e0)
// --------------------
const $id_a9cfc40a = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/meta.config.mjs");

const metaMixin = {
  created() {
    const instance = __vite_ssr_import_0__.getCurrentInstance();
    if (!instance) {
      return;
    }
    const options = instance.type;
    if (!options || !("head" in options)) {
      return;
    }
    const nuxtApp = __vite_ssr_import_3__.useNuxtApp();
    const source = typeof options.head === "function" ? __vite_ssr_import_0__.computed(() => options.head(nuxtApp)) : options.head;
    __vite_ssr_import_2__.useHead(source);
  }
};
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  __vite_ssr_import_2__.useHead(__vite_ssr_import_0__.markRaw({ title: "", ...__vite_ssr_import_4__.default.globalMeta }));
  nuxtApp.vueApp.mixin(metaMixin);
  for (const name in __vite_ssr_import_1__) {
    nuxtApp.vueApp.component(name, __vite_ssr_import_1__[name]);
  }
});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs ($id_5298d07a)
// --------------------
const $id_788f106d = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs");

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  __vite_ssr_import_1__.useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => renderChild ? ctx.slots.default?.() : null;
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = __vite_ssr_import_0__.defineComponent({
  name: "Script",
  inheritAttrs: false,
  props: {
    ...globalProps,
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  },
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Script", { enumerable: true, configurable: true, get(){ return Script }});
const Link = __vite_ssr_import_0__.defineComponent({
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Link", { enumerable: true, configurable: true, get(){ return Link }});
const Base = __vite_ssr_import_0__.defineComponent({
  name: "Base",
  inheritAttrs: false,
  props: {
    ...globalProps,
    href: String,
    target: String
  },
  setup: setupForUseMeta((base) => ({
    base
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Base", { enumerable: true, configurable: true, get(){ return Base }});
const Title = __vite_ssr_import_0__.defineComponent({
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    const title = slots.default?.()?.[0]?.children || null;
    if (true && title && typeof title !== "string") {
      console.error("<Title> can only take a string in its default slot.");
    }
    return {
      title
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Title", { enumerable: true, configurable: true, get(){ return Title }});
const Meta = __vite_ssr_import_0__.defineComponent({
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String
  },
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
Object.defineProperty(__vite_ssr_exports__, "Meta", { enumerable: true, configurable: true, get(){ return Meta }});
const Style = __vite_ssr_import_0__.defineComponent({
  name: "Style",
  inheritAttrs: false,
  props: {
    ...globalProps,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  },
  setup: setupForUseMeta((props, { slots }) => {
    const style = { ...props };
    const textContent = slots.default?.()?.[0]?.children;
    if (textContent) {
      if (true && typeof textContent !== "string") {
        console.error("<Style> can only take a string in its default slot.");
      }
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
Object.defineProperty(__vite_ssr_exports__, "Style", { enumerable: true, configurable: true, get(){ return Style }});
const Head = __vite_ssr_import_0__.defineComponent({
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => ctx.slots.default?.()
});
Object.defineProperty(__vite_ssr_exports__, "Head", { enumerable: true, configurable: true, get(){ return Head }});
const Html = __vite_ssr_import_0__.defineComponent({
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Html", { enumerable: true, configurable: true, get(){ return Html }});
const Body = __vite_ssr_import_0__.defineComponent({
  name: "Body",
  inheritAttrs: false,
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
Object.defineProperty(__vite_ssr_exports__, "Body", { enumerable: true, configurable: true, get(){ return Body }});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/meta.config.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs ($id_a9cfc40a)
// Dependencies: 

// --------------------
const $id_f642d9e0 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = {"globalMeta":{"charset":"utf-8","viewport":"width=device-width, initial-scale=1","meta":[],"link":[],"style":[],"script":[]}};
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs ($id_39f99006)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs ($id_495ace14)
// - /node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs ($id_0a9d87b7)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs ($id_10acdc10)
// --------------------
const $id_c4251de4 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    throw new TypeError("[nuxt] Route location object cannot be resolved when vue-router is disabled (no pages).");
  }
  const url = __vite_ssr_import_1__.parseURL(fullPath.toString());
  return {
    path: url.pathname,
    fullPath,
    query: __vite_ssr_import_1__.parseQuery(url.search),
    hash: url.hash,
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
__vite_ssr_exports__.default = __vite_ssr_import_3__.defineNuxtPlugin((nuxtApp) => {
  const initialURL = false ? __vite_ssr_import_1__.withoutBase(window.location.pathname, __vite_ssr_import_5__.useRuntimeConfig().app.baseURL) + window.location.search + window.location.hash : nuxtApp.ssrContext.url;
  const routes = [];
  const hooks = {
    "navigate:before": [],
    "resolve:before": [],
    "navigate:after": [],
    error: []
  };
  const registerHook = (hook, guard) => {
    hooks[hook].push(guard);
    return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
  };
  const baseURL = __vite_ssr_import_5__.useRuntimeConfig().app.baseURL;
  const route = __vite_ssr_import_0__.reactive(getRouteFromPath(initialURL));
  async function handleNavigation(url, replace) {
    try {
      const to = getRouteFromPath(url);
      for (const middleware of hooks["navigate:before"]) {
        const result = await middleware(to, route);
        if (result === false || result instanceof Error) {
          return;
        }
        if (result) {
          return handleNavigation(result, true);
        }
      }
      for (const handler of hooks["resolve:before"]) {
        await handler(to, route);
      }
      Object.assign(route, to);
      if (false) {
        window.history[replace ? "replaceState" : "pushState"]({}, "", __vite_ssr_import_1__.joinURL(baseURL, url));
        if (!nuxtApp.isHydrating) {
          await __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.clearError);
        }
      }
      for (const middleware of hooks["navigate:after"]) {
        await middleware(to, route);
      }
    } catch (err) {
      if (true && !hooks.error.length) {
        console.warn("No error handlers registered to handle middleware errors. You can register an error handler with `router.onError()`", err);
      }
      for (const handler of hooks.error) {
        await handler(err);
      }
    }
  }
  const router = {
    currentRoute: route,
    isReady: () => Promise.resolve(),
    options: {},
    install: () => Promise.resolve(),
    push: (url) => handleNavigation(url, false),
    replace: (url) => handleNavigation(url, true),
    back: () => window.history.go(-1),
    go: (delta) => window.history.go(delta),
    forward: () => window.history.go(1),
    beforeResolve: (guard) => registerHook("resolve:before", guard),
    beforeEach: (guard) => registerHook("navigate:before", guard),
    afterEach: (guard) => registerHook("navigate:after", guard),
    onError: (handler) => registerHook("error", handler),
    resolve: getRouteFromPath,
    addRoute: (parentName, route2) => {
      routes.push(route2);
    },
    getRoutes: () => routes,
    hasRoute: (name) => routes.some((route2) => route2.name === name),
    removeRoute: (name) => {
      const index = routes.findIndex((route2) => route2.name === name);
      if (index !== -1) {
        routes.splice(index, 1);
      }
    }
  };
  nuxtApp.vueApp.component("RouterLink", {
    functional: true,
    props: { to: String },
    setup: (props, { slots }) => () => __vite_ssr_import_0__.h("a", { href: props.to, onClick: (e) => {
      e.preventDefault();
      router.push(props.to);
    } }, slots)
  });
  if (false) {
    window.addEventListener("popstate", (event) => {
      const location = event.target.location;
      router.replace(location.href.replace(location.origin, ""));
    });
  }
  nuxtApp._route = route;
  nuxtApp._middleware = nuxtApp._middleware || {
    global: [],
    named: {}
  };
  nuxtApp.hooks.hookOnce("app:created", async () => {
    router.beforeEach(async (to, from) => {
      to.meta = __vite_ssr_import_0__.reactive(to.meta || {});
      nuxtApp._processingMiddleware = true;
      const middlewareEntries = new Set(nuxtApp._middleware.global);
      for (const middleware of middlewareEntries) {
        const result = await __vite_ssr_import_4__.callWithNuxt(nuxtApp, middleware, [to, from]);
        if (true) {
          if (result === false || result instanceof Error) {
            const error = result || __vite_ssr_import_2__.createError({
              statusMessage: `Route navigation aborted: ${initialURL}`
            });
            return __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.throwError, [error]);
          }
        }
        if (result || result === false) {
          return result;
        }
      }
    });
    router.afterEach(() => {
      delete nuxtApp._processingMiddleware;
    });
    await router.replace(initialURL);
    if (!__vite_ssr_import_1__.isEqual(route.fullPath, initialURL)) {
      await __vite_ssr_import_4__.callWithNuxt(nuxtApp, __vite_ssr_import_5__.navigateTo, [route.fullPath]);
    }
  });
  return {
    provide: {
      route,
      router
    }
  };
});
;
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/root-component.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// --------------------
const $id_d2591284 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/root-component.mjs ($id_d2591284)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/error-component.mjs ($id_019bd2bd)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_f4b707cc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

// @ts-ignore
const __vite_ssr_import_2__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/error-component.mjs");



const _sfc_main = {
  __name: 'nuxt-root',
  setup(__props, { expose }) {
  expose();

const nuxtApp = __vite_ssr_import_1__.useNuxtApp()
const onResolve = () => nuxtApp.callHook('app:suspense:resolve')

// vue:setup hook
const results = nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup')
if (true && results && results.some(i => i && 'then' in i)) {
  console.error('[nuxt] Error in `vue:setup`. Callbacks must be synchronous.')
}

// error handling
const error = __vite_ssr_import_1__.useError()
__vite_ssr_import_0__.onErrorCaptured((err, target, info) => {
  nuxtApp.hooks.callHook('vue:error', err, target, info).catch(hookError => console.error('[nuxt] Error in `vue:error` hook', hookError))
  if (true) {
    __vite_ssr_import_1__.callWithNuxt(nuxtApp, __vite_ssr_import_1__.throwError, [err])
  }
})

const __returned__ = { nuxtApp, onResolve, results, error, onErrorCaptured: __vite_ssr_import_0__.onErrorCaptured, callWithNuxt: __vite_ssr_import_1__.callWithNuxt, throwError: __vite_ssr_import_1__.throwError, useError: __vite_ssr_import_1__.useError, useNuxtApp: __vite_ssr_import_1__.useNuxtApp, ErrorComponent: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = __vite_ssr_import_3__.resolveComponent("App")

  __vite_ssr_import_4__.ssrRenderSuspense(_push, {
    default: () => {
      if ($setup.error) {
        _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorComponent"], { error: $setup.error }, null, _parent))
      } else {
        _push(__vite_ssr_import_4__.ssrRenderComponent(_component_App, null, null, _parent))
      }
    },
    _: 1 /* STABLE */
  })
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/error-component.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// --------------------
const $id_019bd2bd = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/error-component.mjs ($id_019bd2bd)
// Dependencies: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_ba924238 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue");



const _sfc_main = {
  __name: 'nuxt-error-page',
  props: {
  error: Object
},
  setup(__props, { expose }) {
  expose();

const props = __props



const error = props.error

// TODO: extract to a separate utility
const stacktrace = (error.stack || '')
  .split('\n')
  .splice(1)
  .map((line) => {
    const text = line
      .replace('webpack:/', '')
      .replace('.vue', '.js') // TODO: Support sourcemap
      .trim()
    return {
      text,
      internal: (line.includes('node_modules') && !line.includes('.cache')) ||
          line.includes('internal') ||
          line.includes('new Promise')
    }
  }).map(i => `<span class="stack${i.internal ? ' internal' : ''}">${i.text}</span>`).join('\n')

// Error page props
const statusCode = String(error.statusCode || 500)
const is404 = statusCode === '404'

const statusMessage = error.statusMessage ?? (is404 ? 'Page Not Found' : 'Internal Server Error')
const description = error.message || error.toString()
const stack = true && !is404 ? error.description || `<pre>${stacktrace}</pre>` : undefined

const ErrorTemplate = is404 ? __vite_ssr_import_0__.default : true ? __vite_ssr_import_2__.default : __vite_ssr_import_1__.default

const __returned__ = { props, error, stacktrace, statusCode, is404, statusMessage, description, stack, ErrorTemplate, Error404: __vite_ssr_import_0__.default, Error500: __vite_ssr_import_1__.default, ErrorDev: __vite_ssr_import_2__.default }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(__vite_ssr_import_4__.ssrRenderComponent($setup["ErrorTemplate"], __vite_ssr_import_3__.mergeProps({ statusCode: $setup.statusCode, statusMessage: $setup.statusMessage, description: $setup.description, stack: $setup.stack }, _attrs), null, _parent))
}


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs ($id_7351f7c2)
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css ($id_0277a538)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_6b0e98cf = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-404',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "404"
  },
  statusMessage: {
    type: String,
    default: "Not Found"
  },
  description: {
    type: String,
    default: "Sorry, the page you are looking for could not be found."
  },
  backHome: {
    type: String,
    default: "Go back home"
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_1__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_1__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __vite_ssr_import_0__.default

  _push(`<div${
    __vite_ssr_import_3__.ssrRenderAttrs(__vite_ssr_import_2__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-11469db4><div class="fixed left-0 right-0 spotlight z-10" data-v-11469db4></div><div class="max-w-520px text-center z-20" data-v-11469db4><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-11469db4>${
    __vite_ssr_import_3__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-11469db4>${
    __vite_ssr_import_3__.ssrInterpolate($props.description)
  }</p><div class="w-full flex items-center justify-center" data-v-11469db4>`)
  _push(__vite_ssr_import_3__.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
  }, {
    default: __vite_ssr_import_2__.withCtx((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`${__vite_ssr_import_3__.ssrInterpolate($props.backHome)}`)
      } else {
        return [
          __vite_ssr_import_2__.createTextVNode(__vite_ssr_import_2__.toDisplayString($props.backHome), 1 /* TEXT */)
        ]
      }
    }),
    _: 1 /* STABLE */
  }, _parent))
  _push(`</div></div></div>`)
}

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_5__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_6__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_6__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-11469db4"],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs ($id_cfdcd588)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_31b64ebc)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs ($id_766abaf4)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs ($id_f549584d)
// --------------------
const $id_3715c9af = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs");

const __vite_ssr_import_5__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useHead", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useHead }});
Object.defineProperty(__vite_ssr_exports__, "useMeta", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_5__.useMeta }});
const __vite_ssr_import_6__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs");

Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue2 }});
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_6__.isVue3 }});
const __vite_ssr_import_7__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "useAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "useLazyAsyncData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyAsyncData }});
Object.defineProperty(__vite_ssr_exports__, "refreshNuxtData", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.refreshNuxtData }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtComponent }});
Object.defineProperty(__vite_ssr_exports__, "useNuxtApp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useNuxtApp }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtPlugin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtPlugin }});
Object.defineProperty(__vite_ssr_exports__, "useRuntimeConfig", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRuntimeConfig }});
Object.defineProperty(__vite_ssr_exports__, "useState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useState }});
Object.defineProperty(__vite_ssr_exports__, "useFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useFetch }});
Object.defineProperty(__vite_ssr_exports__, "useLazyFetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useLazyFetch }});
Object.defineProperty(__vite_ssr_exports__, "useCookie", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useCookie }});
Object.defineProperty(__vite_ssr_exports__, "useRequestHeaders", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestHeaders }});
Object.defineProperty(__vite_ssr_exports__, "useRequestEvent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRequestEvent }});
Object.defineProperty(__vite_ssr_exports__, "useRouter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRouter }});
Object.defineProperty(__vite_ssr_exports__, "useRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useRoute }});
Object.defineProperty(__vite_ssr_exports__, "useActiveRoute", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useActiveRoute }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "navigateTo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.navigateTo }});
Object.defineProperty(__vite_ssr_exports__, "abortNavigation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.abortNavigation }});
Object.defineProperty(__vite_ssr_exports__, "addRouteMiddleware", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.addRouteMiddleware }});
Object.defineProperty(__vite_ssr_exports__, "throwError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.throwError }});
Object.defineProperty(__vite_ssr_exports__, "clearError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.clearError }});
Object.defineProperty(__vite_ssr_exports__, "useError", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.useError }});
Object.defineProperty(__vite_ssr_exports__, "defineNuxtLink", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_7__.defineNuxtLink }});
const __vite_ssr_import_8__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

Object.defineProperty(__vite_ssr_exports__, "withCtx", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withCtx }});
Object.defineProperty(__vite_ssr_exports__, "withDirectives", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withDirectives }});
Object.defineProperty(__vite_ssr_exports__, "withKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withKeys }});
Object.defineProperty(__vite_ssr_exports__, "withMemo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withMemo }});
Object.defineProperty(__vite_ssr_exports__, "withModifiers", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withModifiers }});
Object.defineProperty(__vite_ssr_exports__, "withScopeId", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.withScopeId }});
Object.defineProperty(__vite_ssr_exports__, "onActivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onActivated }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "onBeforeUpdate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onBeforeUpdate }});
Object.defineProperty(__vite_ssr_exports__, "onDeactivated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onDeactivated }});
Object.defineProperty(__vite_ssr_exports__, "onErrorCaptured", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onErrorCaptured }});
Object.defineProperty(__vite_ssr_exports__, "onMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onMounted }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTracked", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTracked }});
Object.defineProperty(__vite_ssr_exports__, "onRenderTriggered", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onRenderTriggered }});
Object.defineProperty(__vite_ssr_exports__, "onServerPrefetch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onServerPrefetch }});
Object.defineProperty(__vite_ssr_exports__, "onUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "onUpdated", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onUpdated }});
Object.defineProperty(__vite_ssr_exports__, "computed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.computed }});
Object.defineProperty(__vite_ssr_exports__, "customRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.customRef }});
Object.defineProperty(__vite_ssr_exports__, "isProxy", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isProxy }});
Object.defineProperty(__vite_ssr_exports__, "isReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReactive }});
Object.defineProperty(__vite_ssr_exports__, "isReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isReadonly }});
Object.defineProperty(__vite_ssr_exports__, "isRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isRef }});
Object.defineProperty(__vite_ssr_exports__, "markRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.markRaw }});
Object.defineProperty(__vite_ssr_exports__, "proxyRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.proxyRefs }});
Object.defineProperty(__vite_ssr_exports__, "reactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.reactive }});
Object.defineProperty(__vite_ssr_exports__, "readonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.readonly }});
Object.defineProperty(__vite_ssr_exports__, "ref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.ref }});
Object.defineProperty(__vite_ssr_exports__, "shallowReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReactive }});
Object.defineProperty(__vite_ssr_exports__, "shallowReadonly", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowReadonly }});
Object.defineProperty(__vite_ssr_exports__, "shallowRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.shallowRef }});
Object.defineProperty(__vite_ssr_exports__, "toRaw", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRaw }});
Object.defineProperty(__vite_ssr_exports__, "toRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRef }});
Object.defineProperty(__vite_ssr_exports__, "toRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.toRefs }});
Object.defineProperty(__vite_ssr_exports__, "triggerRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.triggerRef }});
Object.defineProperty(__vite_ssr_exports__, "unref", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.unref }});
Object.defineProperty(__vite_ssr_exports__, "watch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watch }});
Object.defineProperty(__vite_ssr_exports__, "watchEffect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.watchEffect }});
Object.defineProperty(__vite_ssr_exports__, "isShallow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.isShallow }});
Object.defineProperty(__vite_ssr_exports__, "effect", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effect }});
Object.defineProperty(__vite_ssr_exports__, "effectScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.effectScope }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentScope", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentScope }});
Object.defineProperty(__vite_ssr_exports__, "onScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.onScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "defineComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineComponent }});
Object.defineProperty(__vite_ssr_exports__, "defineAsyncComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.defineAsyncComponent }});
Object.defineProperty(__vite_ssr_exports__, "resolveComponent", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.resolveComponent }});
Object.defineProperty(__vite_ssr_exports__, "getCurrentInstance", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.getCurrentInstance }});
Object.defineProperty(__vite_ssr_exports__, "h", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.h }});
Object.defineProperty(__vite_ssr_exports__, "inject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.inject }});
Object.defineProperty(__vite_ssr_exports__, "nextTick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.nextTick }});
Object.defineProperty(__vite_ssr_exports__, "provide", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.provide }});
Object.defineProperty(__vite_ssr_exports__, "useAttrs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useAttrs }});
Object.defineProperty(__vite_ssr_exports__, "useCssModule", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssModule }});
Object.defineProperty(__vite_ssr_exports__, "useCssVars", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useCssVars }});
Object.defineProperty(__vite_ssr_exports__, "useSlots", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useSlots }});
Object.defineProperty(__vite_ssr_exports__, "useTransitionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_8__.useTransitionState }});
const __vite_ssr_import_9__ = await __vite_ssr_import__("/node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs");

Object.defineProperty(__vite_ssr_exports__, "computedAsync", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.computedAsync }});
Object.defineProperty(__vite_ssr_exports__, "asyncComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.asyncComputed }});
Object.defineProperty(__vite_ssr_exports__, "computedEager", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.computedEager }});
Object.defineProperty(__vite_ssr_exports__, "eagerComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.eagerComputed }});
Object.defineProperty(__vite_ssr_exports__, "computedInject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.computedInject }});
Object.defineProperty(__vite_ssr_exports__, "computedWithControl", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.computedWithControl }});
Object.defineProperty(__vite_ssr_exports__, "controlledComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.controlledComputed }});
Object.defineProperty(__vite_ssr_exports__, "createEventHook", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createEventHook }});
Object.defineProperty(__vite_ssr_exports__, "createGlobalState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createGlobalState }});
Object.defineProperty(__vite_ssr_exports__, "createInjectionState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createInjectionState }});
Object.defineProperty(__vite_ssr_exports__, "createSharedComposable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createSharedComposable }});
Object.defineProperty(__vite_ssr_exports__, "createUnrefFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createUnrefFn }});
Object.defineProperty(__vite_ssr_exports__, "extendRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.extendRef }});
Object.defineProperty(__vite_ssr_exports__, "isDefined", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.isDefined }});
Object.defineProperty(__vite_ssr_exports__, "logicAnd", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.logicAnd }});
Object.defineProperty(__vite_ssr_exports__, "logicNot", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.logicNot }});
Object.defineProperty(__vite_ssr_exports__, "logicOr", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.logicOr }});
Object.defineProperty(__vite_ssr_exports__, "makeDestructurable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.makeDestructurable }});
Object.defineProperty(__vite_ssr_exports__, "onClickOutside", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onClickOutside }});
Object.defineProperty(__vite_ssr_exports__, "onKeyStroke", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onKeyStroke }});
Object.defineProperty(__vite_ssr_exports__, "onLongPress", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onLongPress }});
Object.defineProperty(__vite_ssr_exports__, "onStartTyping", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.onStartTyping }});
Object.defineProperty(__vite_ssr_exports__, "reactify", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactify }});
Object.defineProperty(__vite_ssr_exports__, "createReactiveFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.createReactiveFn }});
Object.defineProperty(__vite_ssr_exports__, "reactifyObject", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactifyObject }});
Object.defineProperty(__vite_ssr_exports__, "reactiveComputed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactiveComputed }});
Object.defineProperty(__vite_ssr_exports__, "reactiveOmit", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactiveOmit }});
Object.defineProperty(__vite_ssr_exports__, "reactivePick", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.reactivePick }});
Object.defineProperty(__vite_ssr_exports__, "refAutoReset", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.refAutoReset }});
Object.defineProperty(__vite_ssr_exports__, "autoResetRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.autoResetRef }});
Object.defineProperty(__vite_ssr_exports__, "refDebounced", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.refDebounced }});
Object.defineProperty(__vite_ssr_exports__, "useDebounce", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDebounce }});
Object.defineProperty(__vite_ssr_exports__, "debouncedRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.debouncedRef }});
Object.defineProperty(__vite_ssr_exports__, "refDefault", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.refDefault }});
Object.defineProperty(__vite_ssr_exports__, "refThrottled", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.refThrottled }});
Object.defineProperty(__vite_ssr_exports__, "useThrottle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useThrottle }});
Object.defineProperty(__vite_ssr_exports__, "throttledRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.throttledRef }});
Object.defineProperty(__vite_ssr_exports__, "refWithControl", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.refWithControl }});
Object.defineProperty(__vite_ssr_exports__, "controlledRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.controlledRef }});
Object.defineProperty(__vite_ssr_exports__, "syncRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.syncRef }});
Object.defineProperty(__vite_ssr_exports__, "syncRefs", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.syncRefs }});
Object.defineProperty(__vite_ssr_exports__, "templateRef", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.templateRef }});
Object.defineProperty(__vite_ssr_exports__, "toReactive", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.toReactive }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeMount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.tryOnBeforeMount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnBeforeUnmount", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.tryOnBeforeUnmount }});
Object.defineProperty(__vite_ssr_exports__, "tryOnMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.tryOnMounted }});
Object.defineProperty(__vite_ssr_exports__, "tryOnScopeDispose", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.tryOnScopeDispose }});
Object.defineProperty(__vite_ssr_exports__, "tryOnUnmounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.tryOnUnmounted }});
Object.defineProperty(__vite_ssr_exports__, "unrefElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.unrefElement }});
Object.defineProperty(__vite_ssr_exports__, "until", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.until }});
Object.defineProperty(__vite_ssr_exports__, "useActiveElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useActiveElement }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncQueue", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useAsyncQueue }});
Object.defineProperty(__vite_ssr_exports__, "useAsyncState", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useAsyncState }});
Object.defineProperty(__vite_ssr_exports__, "useBase64", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBase64 }});
Object.defineProperty(__vite_ssr_exports__, "useBattery", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBattery }});
Object.defineProperty(__vite_ssr_exports__, "useBluetooth", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBluetooth }});
Object.defineProperty(__vite_ssr_exports__, "useBreakpoints", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBreakpoints }});
Object.defineProperty(__vite_ssr_exports__, "useBroadcastChannel", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBroadcastChannel }});
Object.defineProperty(__vite_ssr_exports__, "useBrowserLocation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useBrowserLocation }});
Object.defineProperty(__vite_ssr_exports__, "useCached", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCached }});
Object.defineProperty(__vite_ssr_exports__, "useClamp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useClamp }});
Object.defineProperty(__vite_ssr_exports__, "useClipboard", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useClipboard }});
Object.defineProperty(__vite_ssr_exports__, "useColorMode", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useColorMode }});
Object.defineProperty(__vite_ssr_exports__, "useConfirmDialog", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useConfirmDialog }});
Object.defineProperty(__vite_ssr_exports__, "useCounter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCounter }});
Object.defineProperty(__vite_ssr_exports__, "useCssVar", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCssVar }});
Object.defineProperty(__vite_ssr_exports__, "useCurrentElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCurrentElement }});
Object.defineProperty(__vite_ssr_exports__, "useCycleList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useCycleList }});
Object.defineProperty(__vite_ssr_exports__, "useDark", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDark }});
Object.defineProperty(__vite_ssr_exports__, "useDateFormat", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDateFormat }});
Object.defineProperty(__vite_ssr_exports__, "useDebouncedRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDebouncedRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useDebounceFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDebounceFn }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceMotion", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDeviceMotion }});
Object.defineProperty(__vite_ssr_exports__, "useDeviceOrientation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDeviceOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useDevicePixelRatio", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDevicePixelRatio }});
Object.defineProperty(__vite_ssr_exports__, "useDevicesList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDevicesList }});
Object.defineProperty(__vite_ssr_exports__, "useDisplayMedia", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDisplayMedia }});
Object.defineProperty(__vite_ssr_exports__, "useDocumentVisibility", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDocumentVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useDraggable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDraggable }});
Object.defineProperty(__vite_ssr_exports__, "useDropZone", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useDropZone }});
Object.defineProperty(__vite_ssr_exports__, "useElementBounding", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useElementBounding }});
Object.defineProperty(__vite_ssr_exports__, "useElementByPoint", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useElementByPoint }});
Object.defineProperty(__vite_ssr_exports__, "useElementHover", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useElementHover }});
Object.defineProperty(__vite_ssr_exports__, "useElementSize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useElementSize }});
Object.defineProperty(__vite_ssr_exports__, "useElementVisibility", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useElementVisibility }});
Object.defineProperty(__vite_ssr_exports__, "useEventBus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useEventBus }});
Object.defineProperty(__vite_ssr_exports__, "useEventListener", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useEventListener }});
Object.defineProperty(__vite_ssr_exports__, "useEventSource", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useEventSource }});
Object.defineProperty(__vite_ssr_exports__, "useEyeDropper", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useEyeDropper }});
Object.defineProperty(__vite_ssr_exports__, "useFavicon", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFavicon }});
Object.defineProperty(__vite_ssr_exports__, "useFileSystemAccess", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFileSystemAccess }});
Object.defineProperty(__vite_ssr_exports__, "useFocus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFocus }});
Object.defineProperty(__vite_ssr_exports__, "useFocusWithin", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFocusWithin }});
Object.defineProperty(__vite_ssr_exports__, "useFps", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFps }});
Object.defineProperty(__vite_ssr_exports__, "useFullscreen", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useFullscreen }});
Object.defineProperty(__vite_ssr_exports__, "useGamepad", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useGamepad }});
Object.defineProperty(__vite_ssr_exports__, "useGeolocation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useGeolocation }});
Object.defineProperty(__vite_ssr_exports__, "useIdle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useIdle }});
Object.defineProperty(__vite_ssr_exports__, "useImage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useImage }});
Object.defineProperty(__vite_ssr_exports__, "useInfiniteScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useInfiniteScroll }});
Object.defineProperty(__vite_ssr_exports__, "useIntersectionObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useIntersectionObserver }});
Object.defineProperty(__vite_ssr_exports__, "useInterval", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useInterval }});
Object.defineProperty(__vite_ssr_exports__, "useIntervalFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useIntervalFn }});
Object.defineProperty(__vite_ssr_exports__, "useKeyModifier", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useKeyModifier }});
Object.defineProperty(__vite_ssr_exports__, "useLastChanged", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useLastChanged }});
Object.defineProperty(__vite_ssr_exports__, "useLocalStorage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useLocalStorage }});
Object.defineProperty(__vite_ssr_exports__, "useMagicKeys", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMagicKeys }});
Object.defineProperty(__vite_ssr_exports__, "useManualRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useManualRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useMediaControls", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMediaControls }});
Object.defineProperty(__vite_ssr_exports__, "useMediaQuery", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMediaQuery }});
Object.defineProperty(__vite_ssr_exports__, "useMemoize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMemoize }});
Object.defineProperty(__vite_ssr_exports__, "useMemory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMemory }});
Object.defineProperty(__vite_ssr_exports__, "useMounted", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMounted }});
Object.defineProperty(__vite_ssr_exports__, "useMouse", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMouse }});
Object.defineProperty(__vite_ssr_exports__, "useMouseInElement", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMouseInElement }});
Object.defineProperty(__vite_ssr_exports__, "useMousePressed", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMousePressed }});
Object.defineProperty(__vite_ssr_exports__, "useMutationObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useMutationObserver }});
Object.defineProperty(__vite_ssr_exports__, "useNavigatorLanguage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useNavigatorLanguage }});
Object.defineProperty(__vite_ssr_exports__, "useNetwork", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useNetwork }});
Object.defineProperty(__vite_ssr_exports__, "useNow", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useNow }});
Object.defineProperty(__vite_ssr_exports__, "useOffsetPagination", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useOffsetPagination }});
Object.defineProperty(__vite_ssr_exports__, "useOnline", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useOnline }});
Object.defineProperty(__vite_ssr_exports__, "usePageLeave", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePageLeave }});
Object.defineProperty(__vite_ssr_exports__, "useParallax", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useParallax }});
Object.defineProperty(__vite_ssr_exports__, "usePermission", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePermission }});
Object.defineProperty(__vite_ssr_exports__, "usePointer", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePointer }});
Object.defineProperty(__vite_ssr_exports__, "usePointerSwipe", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePointerSwipe }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredColorScheme", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePreferredColorScheme }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredDark", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePreferredDark }});
Object.defineProperty(__vite_ssr_exports__, "usePreferredLanguages", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.usePreferredLanguages }});
Object.defineProperty(__vite_ssr_exports__, "useRafFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useRafFn }});
Object.defineProperty(__vite_ssr_exports__, "useRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useResizeObserver", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useResizeObserver }});
Object.defineProperty(__vite_ssr_exports__, "useScreenOrientation", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useScreenOrientation }});
Object.defineProperty(__vite_ssr_exports__, "useScreenSafeArea", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useScreenSafeArea }});
Object.defineProperty(__vite_ssr_exports__, "useScriptTag", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useScriptTag }});
Object.defineProperty(__vite_ssr_exports__, "useScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useScroll }});
Object.defineProperty(__vite_ssr_exports__, "useScrollLock", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useScrollLock }});
Object.defineProperty(__vite_ssr_exports__, "useSessionStorage", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useSessionStorage }});
Object.defineProperty(__vite_ssr_exports__, "useShare", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useShare }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechRecognition", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useSpeechRecognition }});
Object.defineProperty(__vite_ssr_exports__, "useSpeechSynthesis", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useSpeechSynthesis }});
Object.defineProperty(__vite_ssr_exports__, "useStorageAsync", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useStorageAsync }});
Object.defineProperty(__vite_ssr_exports__, "useStyleTag", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useStyleTag }});
Object.defineProperty(__vite_ssr_exports__, "useSwipe", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useSwipe }});
Object.defineProperty(__vite_ssr_exports__, "useTemplateRefsList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTemplateRefsList }});
Object.defineProperty(__vite_ssr_exports__, "useTextSelection", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTextSelection }});
Object.defineProperty(__vite_ssr_exports__, "useThrottledRefHistory", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useThrottledRefHistory }});
Object.defineProperty(__vite_ssr_exports__, "useThrottleFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useThrottleFn }});
Object.defineProperty(__vite_ssr_exports__, "useTimeAgo", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTimeAgo }});
Object.defineProperty(__vite_ssr_exports__, "useTimeout", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTimeout }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTimeoutFn }});
Object.defineProperty(__vite_ssr_exports__, "useTimeoutPoll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTimeoutPoll }});
Object.defineProperty(__vite_ssr_exports__, "useTimestamp", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTimestamp }});
Object.defineProperty(__vite_ssr_exports__, "useToggle", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useToggle }});
Object.defineProperty(__vite_ssr_exports__, "useTransition", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useTransition }});
Object.defineProperty(__vite_ssr_exports__, "useUrlSearchParams", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useUrlSearchParams }});
Object.defineProperty(__vite_ssr_exports__, "useUserMedia", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useUserMedia }});
Object.defineProperty(__vite_ssr_exports__, "useVibrate", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useVibrate }});
Object.defineProperty(__vite_ssr_exports__, "useVirtualList", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useVirtualList }});
Object.defineProperty(__vite_ssr_exports__, "useVModel", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useVModel }});
Object.defineProperty(__vite_ssr_exports__, "useVModels", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useVModels }});
Object.defineProperty(__vite_ssr_exports__, "useWakeLock", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWakeLock }});
Object.defineProperty(__vite_ssr_exports__, "useWebNotification", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWebNotification }});
Object.defineProperty(__vite_ssr_exports__, "useWebSocket", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWebSocket }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorker", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWebWorker }});
Object.defineProperty(__vite_ssr_exports__, "useWebWorkerFn", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWebWorkerFn }});
Object.defineProperty(__vite_ssr_exports__, "useWindowFocus", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWindowFocus }});
Object.defineProperty(__vite_ssr_exports__, "useWindowScroll", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWindowScroll }});
Object.defineProperty(__vite_ssr_exports__, "useWindowSize", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.useWindowSize }});
Object.defineProperty(__vite_ssr_exports__, "watchAtMost", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchAtMost }});
Object.defineProperty(__vite_ssr_exports__, "watchDebounced", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchDebounced }});
Object.defineProperty(__vite_ssr_exports__, "debouncedWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.debouncedWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchIgnorable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchIgnorable }});
Object.defineProperty(__vite_ssr_exports__, "ignorableWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.ignorableWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchOnce", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchOnce }});
Object.defineProperty(__vite_ssr_exports__, "watchPausable", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchPausable }});
Object.defineProperty(__vite_ssr_exports__, "pausableWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.pausableWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchThrottled", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchThrottled }});
Object.defineProperty(__vite_ssr_exports__, "throttledWatch", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.throttledWatch }});
Object.defineProperty(__vite_ssr_exports__, "watchWithFilter", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.watchWithFilter }});
Object.defineProperty(__vite_ssr_exports__, "whenever", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_9__.whenever }});;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// Dependencies: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs ($id_7e11cc02)
// --------------------
const $id_31b64ebc = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const Vue2 = void 0;
Object.defineProperty(__vite_ssr_exports__, "Vue2", { enumerable: true, configurable: true, get(){ return Vue2 }});
const isVue2 = false;
Object.defineProperty(__vite_ssr_exports__, "isVue2", { enumerable: true, configurable: true, get(){ return isVue2 }});
const isVue3 = true;
Object.defineProperty(__vite_ssr_exports__, "isVue3", { enumerable: true, configurable: true, get(){ return isVue3 }});
;
}


// --------------------
// Request: /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs ($id_31b64ebc)
// Dependencies: 
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// --------------------
const $id_7e11cc02 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");
__vite_ssr_exportAll__(__vite_ssr_import_0__);
const install = () => {
};
Object.defineProperty(__vite_ssr_exports__, "install", { enumerable: true, configurable: true, get(){ return install }});
function set(target, key, val) {
  if (Array.isArray(target)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }
  target[key] = val;
  return val;
}
Object.defineProperty(__vite_ssr_exports__, "set", { enumerable: true, configurable: true, get(){ return set }});
function del(target, key) {
  if (Array.isArray(target)) {
    target.splice(key, 1);
    return;
  }
  delete target[key];
}
Object.defineProperty(__vite_ssr_exports__, "del", { enumerable: true, configurable: true, get(){ return del }});
;
}


// --------------------
// Request: /node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// Dependencies: 

// --------------------
const $id_f549584d = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs\".")
  })


// --------------------
// Request: /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// Dependencies: 

// --------------------
const $id_86c2af1b = (global, module, _, exports, importMeta, ssrImport, ssrDynamicImport, ssrExportAll) =>
import("file:///C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js")
  .then(r => {
    if (r.default && r.default.__esModule)
      r = r.default
    exports.default = r.default
    ssrExportAll(r)
  })
  .catch(e => {
    console.error(e)
    throw new Error("[vite dev] Error loading external \"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js\".")
  })


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// Dependencies: 

// --------------------
const $id_0277a538 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-11469db4]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.cursor-pointer[data-v-11469db4]{cursor:pointer}.flex[data-v-11469db4]{display:flex}.grid[data-v-11469db4]{display:grid}.place-content-center[data-v-11469db4]{place-content:center}.items-center[data-v-11469db4]{align-items:center}.justify-center[data-v-11469db4]{justify-content:center}.font-sans[data-v-11469db4]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-11469db4]{font-weight:500}.font-light[data-v-11469db4]{font-weight:300}.text-8xl[data-v-11469db4]{font-size:6rem;line-height:1}.text-xl[data-v-11469db4]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-11469db4]{line-height:1.25}.mb-8[data-v-11469db4]{margin-bottom:2rem}.mb-16[data-v-11469db4]{margin-bottom:4rem}.max-w-520px[data-v-11469db4]{max-width:520px}.min-h-screen[data-v-11469db4]{min-height:100vh}.overflow-hidden[data-v-11469db4]{overflow:hidden}.px-8[data-v-11469db4]{padding-left:2rem;padding-right:2rem}.py-2[data-v-11469db4]{padding-bottom:.5rem;padding-top:.5rem}.px-4[data-v-11469db4]{padding-left:1rem;padding-right:1rem}.fixed[data-v-11469db4]{position:fixed}.left-0[data-v-11469db4]{left:0}.right-0[data-v-11469db4]{right:0}.text-center[data-v-11469db4]{text-align:center}.text-black[data-v-11469db4]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-11469db4]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-11469db4]{width:100%}.z-10[data-v-11469db4]{z-index:10}.z-20[data-v-11469db4]{z-index:20}@media (min-width:640px){.sm\\:text-4xl[data-v-11469db4]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-xl[data-v-11469db4]{font-size:1.25rem;line-height:1.75rem}.sm\\:text-10xl[data-v-11469db4]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-11469db4]{padding-left:0;padding-right:0}.sm\\:py-3[data-v-11469db4]{padding-bottom:.75rem;padding-top:.75rem}.sm\\:px-6[data-v-11469db4]{padding-left:1.5rem;padding-right:1.5rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-11469db4]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-11469db4]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-11469db4]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-30vh;filter:blur(20vh);height:40vh}.gradient-border[data-v-11469db4]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative}@media (prefers-color-scheme:light){.gradient-border[data-v-11469db4]{background-color:#ffffff4d}.gradient-border[data-v-11469db4]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-11469db4]{background-color:#1414144d}.gradient-border[data-v-11469db4]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-11469db4]:before{background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-11469db4]:hover:before{background-position:-50% 0;opacity:1}";
}


// --------------------
// Request: /@id/plugin-vue:export-helper
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue ($id_6b0e98cf)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue ($id_f4b707cc)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// Dependencies: 

// --------------------
const $id_bbb863c1 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {

__vite_ssr_exports__.default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
}
;
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css ($id_f91ec644)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_aaca7844 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-500',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "This page is temporarily unavailable."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))
  } data-v-2c0a8e63><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-2c0a8e63></div><div class="max-w-520px text-center" data-v-2c0a8e63><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-2c0a8e63>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-2c0a8e63>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-2c0a8e63"],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue ($id_aaca7844)
// Dependencies: 

// --------------------
const $id_f91ec644 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-2c0a8e63]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.grid[data-v-2c0a8e63]{display:grid}.place-content-center[data-v-2c0a8e63]{place-content:center}.font-sans[data-v-2c0a8e63]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-2c0a8e63]{font-weight:500}.font-light[data-v-2c0a8e63]{font-weight:300}.h-1\\/2[data-v-2c0a8e63]{height:50%}.text-8xl[data-v-2c0a8e63]{font-size:6rem;line-height:1}.text-xl[data-v-2c0a8e63]{font-size:1.25rem;line-height:1.75rem}.leading-tight[data-v-2c0a8e63]{line-height:1.25}.mb-8[data-v-2c0a8e63]{margin-bottom:2rem}.mb-16[data-v-2c0a8e63]{margin-bottom:4rem}.max-w-520px[data-v-2c0a8e63]{max-width:520px}.min-h-screen[data-v-2c0a8e63]{min-height:100vh}.overflow-hidden[data-v-2c0a8e63]{overflow:hidden}.px-8[data-v-2c0a8e63]{padding-left:2rem;padding-right:2rem}.fixed[data-v-2c0a8e63]{position:fixed}.left-0[data-v-2c0a8e63]{left:0}.right-0[data-v-2c0a8e63]{right:0}.-bottom-1\\/2[data-v-2c0a8e63]{bottom:-50%}.text-center[data-v-2c0a8e63]{text-align:center}.text-black[data-v-2c0a8e63]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-2c0a8e63]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}@media (min-width:640px){.sm\\:text-4xl[data-v-2c0a8e63]{font-size:2.25rem;line-height:2.5rem}.sm\\:text-10xl[data-v-2c0a8e63]{font-size:10rem;line-height:1}.sm\\:px-0[data-v-2c0a8e63]{padding-left:0;padding-right:0}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-2c0a8e63]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:text-white[data-v-2c0a8e63]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-2c0a8e63]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);filter:blur(20vh)}";
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue
// Parents: 
// - /node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue ($id_ba924238)
// Dependencies: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css ($id_e225fa28)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_74fc6fbe = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'error-dev',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  statusCode: {
    type: String,
    default: "500"
  },
  statusMessage: {
    type: String,
    default: "Server error"
  },
  description: {
    type: String,
    default: "An error occurred in the application and the page could not be served. If you are the application owner, check your server logs for details."
  },
  stack: {
    type: String,
    default: ""
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.statusCode } - ${ props.statusMessage } | ${ props.appName }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,pre{margin:0}h1{font-size:inherit;font-weight:inherit}pre{font-size:1em;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white px-10 pt-14 dark:bg-black text-black dark:text-white min-h-screen flex flex-col" }, _attrs))
  } data-v-409ab583><div class="fixed left-0 right-0 spotlight" data-v-409ab583></div><h1 class="text-6xl sm:text-8xl font-medium mb-6" data-v-409ab583>${
    __vite_ssr_import_2__.ssrInterpolate($props.statusCode)
  }</h1><p class="text-xl sm:text-2xl font-light mb-8 leading-tight" data-v-409ab583>${
    __vite_ssr_import_2__.ssrInterpolate($props.description)
  }</p><div class="bg-white rounded-t-md bg-black/5 dark:bg-white/10 flex-1 overflow-y-auto h-auto" data-v-409ab583><pre class="text-xl font-light leading-tight z-10 p-8" data-v-409ab583>${
    $props.stack
  }</pre></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-409ab583"],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue ($id_74fc6fbe)
// Dependencies: 

// --------------------
const $id_e225fa28 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-409ab583]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-black\\/5[data-v-409ab583]{--tw-bg-opacity:.05;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.rounded-t-md[data-v-409ab583]{border-top-left-radius:.375rem;border-top-right-radius:.375rem}.flex[data-v-409ab583]{display:flex}.flex-col[data-v-409ab583]{flex-direction:column}.flex-1[data-v-409ab583]{flex:1 1 0%}.font-sans[data-v-409ab583]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-medium[data-v-409ab583]{font-weight:500}.font-light[data-v-409ab583]{font-weight:300}.h-auto[data-v-409ab583]{height:auto}.text-xl[data-v-409ab583]{font-size:1.25rem;line-height:1.75rem}.text-6xl[data-v-409ab583]{font-size:3.75rem;line-height:1}.leading-tight[data-v-409ab583]{line-height:1.25}.mb-8[data-v-409ab583]{margin-bottom:2rem}.mb-6[data-v-409ab583]{margin-bottom:1.5rem}.min-h-screen[data-v-409ab583]{min-height:100vh}.overflow-y-auto[data-v-409ab583]{overflow-y:auto}.p-8[data-v-409ab583]{padding:2rem}.px-10[data-v-409ab583]{padding-left:2.5rem;padding-right:2.5rem}.pt-14[data-v-409ab583]{padding-top:3.5rem}.fixed[data-v-409ab583]{position:fixed}.left-0[data-v-409ab583]{left:0}.right-0[data-v-409ab583]{right:0}.text-black[data-v-409ab583]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-409ab583]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.z-10[data-v-409ab583]{z-index:10}@media (min-width:640px){.sm\\:text-8xl[data-v-409ab583]{font-size:6rem;line-height:1}.sm\\:text-2xl[data-v-409ab583]{font-size:1.5rem;line-height:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-409ab583]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-409ab583]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-409ab583]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-409ab583]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(30vh);height:60vh;opacity:.8}";
}


// --------------------
// Request: /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/app-component.mjs
// Parents: 
// - C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry ($id_0229cf84)
// Dependencies: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// --------------------
const $id_17c27e52 = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue");

Object.defineProperty(__vite_ssr_exports__, "default", { enumerable: true, configurable: true, get(){ return __vite_ssr_import_0__.default }});;
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue
// Parents: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/app-component.mjs ($id_17c27e52)
// Dependencies: 
// - /@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs ($id_3715c9af)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js ($id_b79b7992)
// - /node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js ($id_86c2af1b)
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue?vue&type=style&index=0&scoped=true&lang.css ($id_35a441df)
// - /@id/plugin-vue:export-helper ($id_bbb863c1)
// --------------------
const $id_75531f6f = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
const __vite_ssr_import_0__ = await __vite_ssr_import__("/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs");


const _sfc_main = {
  __name: 'welcome',
  props: {
  appName: {
    type: String,
    default: "Nuxt"
  },
  version: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: "Welcome to Nuxt 3!"
  },
  readDocs: {
    type: String,
    default: "We highly recommend you take a look at the Nuxt documentation, whether you are new or have previous experience with the framework."
  },
  followTwitter: {
    type: String,
    default: "Follow the Nuxt Twitter account to get latest news about releases, new modules, tutorials and tips."
  },
  starGitHub: {
    type: String,
    default: "Nuxt is open source and the code is available on GitHub, feel free to star it, participate in discussions or dive into the source."
  }
},
  setup(__props, { expose }) {
  expose();

const props = __props


__vite_ssr_import_0__.useHead({
  title: `${ props.title }`,
  script: [],
  style: [
    {
      children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}p,h4,h5{margin:0}h4,h5{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
    }
  ]
})

const __returned__ = { props, useHead: __vite_ssr_import_0__.useHead }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
const __vite_ssr_import_1__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const __vite_ssr_import_2__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js");


function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${
    __vite_ssr_import_2__.ssrRenderAttrs(__vite_ssr_import_1__.mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base" }, _attrs))
  } data-v-4b977bd5><div class="grid grid-cols-3 gap-4 md:gap-8 max-w-5xl w-full z-20" data-v-4b977bd5><div class="flex justify-between items-end col-span-3" data-v-4b977bd5><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="nuxt-logo" data-v-4b977bd5><svg viewBox="0 0 221 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-40 text-black dark:text-white" data-v-4b977bd5><g clip-path="url(#a)" data-v-4b977bd5><path fill="currentColor" d="M82.5623 18.5705h7.3017l15.474 24.7415V18.5705h6.741v35.0576h-7.252L89.3025 28.938v24.6901h-6.7402V18.5705ZM142.207 53.628h-6.282v-3.916c-1.429 2.7559-4.339 4.3076-8.015 4.3076-5.822 0-9.603-4.1069-9.603-10.0175V28.3847h6.282v14.3251c0 3.4558 2.146 5.8592 5.362 5.8592 3.524 0 5.974-2.7044 5.974-6.4099V28.3847h6.282V53.628ZM164.064 53.2289l-6.026-8.4144-6.027 8.4144h-6.69l9.296-13.1723-8.58-12.0709h6.843l5.158 7.2641 5.106-7.2641h6.895l-8.632 12.0709 9.295 13.1723h-6.638ZM183.469 20.7726v7.6116h7.149v5.1593h-7.149v12.5311c0 .4208.17.8245.473 1.1223.303.2978.715.4654 1.144.4661h5.532v5.9547h-4.137c-5.617 0-9.293-3.2062-9.293-8.8109V33.5484h-5.056v-5.1642h3.172c1.479 0 2.34-.8639 2.34-2.2932v-5.3184h5.825Z" data-v-4b977bd5></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.1185 11.5456c-1.8853-3.24168-6.5987-3.24169-8.484 0L1.08737 46.8747c-1.885324 3.2417.47133 7.2938 4.24199 7.2938H21.3695c-1.6112-1.4081-2.2079-3.8441-.9886-5.9341l15.5615-26.675-5.8239-10.0138Z" fill="#80EEC0" data-v-4b977bd5></path><path d="M43.1374 19.2952c1.5603-2.6523 5.461-2.6523 7.0212 0l17.0045 28.9057c1.5603 2.6522-.39 5.9676-3.5106 5.9676h-34.009c-3.1206 0-5.0709-3.3154-3.5106-5.9676l17.0045-28.9057ZM209.174 53.8005H198.483c0-1.8514.067-3.4526 0-6.0213h10.641c1.868 0 3.353.1001 4.354-.934 1-1.0341 1.501-2.3351 1.501-3.9029 0-1.8347-.667-3.2191-2.002-4.1532-1.301-.9674-2.985-1.4511-5.054-1.4511h-2.601v-5.2539h2.652c1.701 0 3.119-.4003 4.253-1.2009 1.134-.8006 1.701-1.9849 1.701-3.5527 0-1.301-.434-2.3351-1.301-3.1023-.834-.8007-2.001-1.201-3.503-1.201-1.634 0-2.918.4837-3.853 1.4511-.9.9674-1.401 2.1517-1.501 3.5527h-6.254c.133-3.2358 1.251-5.7877 3.352-7.6558 2.135-1.868 4.887-2.8021 8.256-2.8021 2.402 0 4.42.4337 6.055 1.301 1.668.834 2.919 1.9515 3.753 3.3525.867 1.4011 1.301 2.9523 1.301 4.6536 0 1.9681-.551 3.636-1.651 5.0037-1.068 1.3344-2.402 2.235-4.004 2.7021 1.969.4003 3.57 1.3677 4.804 2.9022 1.234 1.5011 1.852 3.4025 1.852 5.7043 0 1.9347-.468 3.7028-1.402 5.304-.934 1.6012-2.301 2.8855-4.103 3.8529-1.768.9674-3.953 1.4511-6.555 1.4511Z" fill="#00DC82" data-v-4b977bd5></path></g><defs data-v-4b977bd5><clipPath id="a" data-v-4b977bd5><path fill="#fff" d="M0 0h221v65H0z" data-v-4b977bd5></path></clipPath></defs></svg></a><a href="https://github.com/nuxt/framework/releases/tag/{{ version }}" target="_blank" rel="noopener" class="flex justify-end pb-1 sm:pb-2" data-v-4b977bd5>${
    __vite_ssr_import_2__.ssrInterpolate($props.version)
  }</a><div class="spotlight-wrapper" data-v-4b977bd5><div class="fixed z-10 left-0 right-0 spotlight" data-v-4b977bd5></div></div></div><div class="col-span-3 rounded p-4 flex flex-col gradient-border" data-v-4b977bd5><div class="flex justify-between items-center mb-4" data-v-4b977bd5><h4 class="font-medium text-2xl" data-v-4b977bd5>Get Started</h4><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4b977bd5><path d="M29.4284 31.095C26.9278 33.5955 23.5364 35.0003 20.0001 35.0003C16.4637 35.0003 13.0723 33.5955 10.5717 31.095C8.07118 28.5944 6.66638 25.203 6.66638 21.6667C6.66638 18.1304 8.07118 14.7389 10.5717 12.2383C10.5717 12.2383 11.6667 15 15.0001 16.6667C15.0001 13.3333 15.8334 8.33333 19.9767 5C23.3334 8.33333 26.8167 9.62833 29.4267 12.2383C30.667 13.475 31.6506 14.9446 32.321 16.5626C32.9915 18.1806 33.3355 19.9152 33.3334 21.6667C33.3357 23.418 32.9919 25.1525 32.3218 26.7705C31.6516 28.3886 30.6683 29.8582 29.4284 31.095V31.095Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b977bd5></path><path d="M16.465 26.8683C17.0456 27.4491 17.7604 27.878 18.5462 28.1169C19.3319 28.3559 20.1644 28.3976 20.9701 28.2385C21.7758 28.0793 22.5299 27.7241 23.1657 27.2043C23.8015 26.6845 24.2995 26.016 24.6157 25.2581C24.9318 24.5001 25.0564 23.6759 24.9784 22.8584C24.9004 22.0408 24.6222 21.2551 24.1684 20.5705C23.7146 19.886 23.0992 19.3238 22.3766 18.9336C21.6539 18.5434 20.8463 18.3373 20.025 18.3333L18.3333 23.3333H15C15 24.6133 15.4883 25.8933 16.465 26.8683Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b977bd5></path></svg></div><p class="mb-2" data-v-4b977bd5>Remove this welcome page by removing <a class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-4b977bd5>&lt;NuxtWelcome /&gt;</a> tag or creating an <a href="https://v3.nuxtjs.org/docs/directory-structure/app" target="_blank" rel="noopener" class="bg-gray-100 dark:bg-white/10 rounded font-mono p-1 font-bold" data-v-4b977bd5>app.vue</a> file.</p></div><a href="https://v3.nuxtjs.org" target="_blank" rel="noopener" class="gradient-border cursor-pointer col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-4b977bd5><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4b977bd5><path d="M20 10.4217C21.9467 9.12833 24.59 8.33333 27.5 8.33333C30.4117 8.33333 33.0533 9.12833 35 10.4217V32.0883C33.0533 30.795 30.4117 30 27.5 30C24.59 30 21.9467 30.795 20 32.0883M20 10.4217V32.0883V10.4217ZM20 10.4217C18.0533 9.12833 15.41 8.33333 12.5 8.33333C9.59 8.33333 6.94667 9.12833 5 10.4217V32.0883C6.94667 30.795 9.59 30 12.5 30C15.41 30 18.0533 30.795 20 32.0883V10.4217Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-4b977bd5></path><rect x="23.3334" y="13.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-4b977bd5></rect><rect x="8.33337" y="13.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-4b977bd5></rect><rect x="8.33337" y="18.3333" width="8.33333" height="1.66667" rx="0.833333" fill="currentColor" data-v-4b977bd5></rect><rect x="8.33337" y="23.3333" width="8.33333" height="1.66667" rx="0.833334" fill="currentColor" data-v-4b977bd5></rect><rect x="23.3334" y="18.3333" width="8.33334" height="1.66667" rx="0.833333" fill="currentColor" data-v-4b977bd5></rect><rect x="23.3334" y="23.3333" width="8.33334" height="1.66667" rx="0.833334" fill="currentColor" data-v-4b977bd5></rect></svg><h5 class="font-semibold text-xl mt-4" data-v-4b977bd5>Documentation</h5><p class="mt-2" data-v-4b977bd5>${
    __vite_ssr_import_2__.ssrInterpolate($props.readDocs)
  }</p></a><a href="https://github.com/nuxt/framework" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col" data-v-4b977bd5><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4b977bd5><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.33333C10.795 3.33333 3.33337 10.8067 3.33337 20.0283C3.33337 27.4033 8.10837 33.6617 14.7317 35.8683C15.565 36.0217 15.8684 35.5067 15.8684 35.0633C15.8684 34.6683 15.855 33.6167 15.8467 32.225C11.21 33.2333 10.2317 29.9867 10.2317 29.9867C9.47504 28.0567 8.38171 27.5433 8.38171 27.5433C6.86837 26.51 8.49671 26.53 8.49671 26.53C10.1684 26.6467 11.0484 28.25 11.0484 28.25C12.535 30.8 14.95 30.0633 15.8984 29.6367C16.0517 28.5583 16.4817 27.8233 16.9584 27.4067C13.2584 26.985 9.36671 25.5517 9.36671 19.155C9.36671 17.3333 10.0167 15.8417 11.0817 14.675C10.91 14.2533 10.3384 12.555 11.245 10.2583C11.245 10.2583 12.645 9.80833 15.8284 11.9683C17.188 11.5975 18.5908 11.4087 20 11.4067C21.4167 11.4133 22.8417 11.5983 24.1734 11.9683C27.355 9.80833 28.7517 10.2567 28.7517 10.2567C29.6617 12.555 29.0884 14.2533 28.9184 14.675C29.985 15.8417 30.6317 17.3333 30.6317 19.155C30.6317 25.5683 26.7334 26.98 23.0217 27.3933C23.62 27.9083 24.1517 28.9267 24.1517 30.485C24.1517 32.715 24.1317 34.5167 24.1317 35.0633C24.1317 35.51 24.4317 36.03 25.2784 35.8667C28.5972 34.7535 31.4823 32.6255 33.5258 29.7834C35.5694 26.9413 36.6681 23.5289 36.6667 20.0283C36.6667 10.8067 29.2034 3.33333 20 3.33333Z" fill="currentColor" data-v-4b977bd5></path></svg><h5 class="font-semibold text-xl mt-4" data-v-4b977bd5>GitHub</h5><p class="mt-2" data-v-4b977bd5>${
    __vite_ssr_import_2__.ssrInterpolate($props.starGitHub)
  }</p></a><a href="https://twitter.com/nuxt_js" target="_blank" rel="noopener" class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col gap-y-4" data-v-4b977bd5><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-4b977bd5><path d="M13.8167 33.7557C26.395 33.7557 33.275 23.334 33.275 14.2973C33.275 14.0007 33.275 13.7057 33.255 13.414C34.5937 12.4449 35.7489 11.245 36.6667 9.87066C35.4185 10.424 34.0943 10.7869 32.7384 10.9473C34.1661 10.0924 35.2346 8.74791 35.745 7.164C34.4029 7.96048 32.9345 8.52188 31.4034 8.824C30.3724 7.72694 29.0084 7.00039 27.5228 6.75684C26.0371 6.51329 24.5126 6.76633 23.1852 7.47678C21.8579 8.18723 20.8018 9.31545 20.1805 10.6868C19.5592 12.0581 19.4073 13.596 19.7484 15.0623C17.0294 14.9261 14.3694 14.2195 11.9411 12.9886C9.51285 11.7577 7.37059 10.0299 5.65337 7.91733C4.7789 9.42267 4.51102 11.2047 4.90427 12.9006C5.29751 14.5965 6.32232 16.0788 7.77004 17.0457C6.68214 17.0142 5.61776 16.7215 4.66671 16.1923V16.279C4.66736 17.8578 5.21403 19.3878 6.21404 20.6096C7.21404 21.8313 8.60582 22.6696 10.1534 22.9823C9.14639 23.2569 8.08986 23.2968 7.06504 23.099C7.50198 24.4581 8.35284 25.6467 9.49859 26.4984C10.6443 27.35 12.0277 27.8223 13.455 27.849C12.0369 28.9633 10.413 29.7871 8.67625 30.2732C6.93948 30.7594 5.12391 30.8984 3.33337 30.6823C6.46105 32.6896 10.1004 33.7542 13.8167 33.749" fill="currentColor" data-v-4b977bd5></path></svg><h5 class="font-semibold text-xl" data-v-4b977bd5>Twitter</h5><p data-v-4b977bd5>${
    __vite_ssr_import_2__.ssrInterpolate($props.followTwitter)
  }</p></a></div></div>`)
}

const __vite_ssr_import_3__ = await __vite_ssr_import__("/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue?vue&type=style&index=0&scoped=true&lang.css");


const __vite_ssr_import_4__ = await __vite_ssr_import__("/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js");

const _sfc_setup = _sfc_main.setup
_sfc_main.setup = (props, ctx) => {
  const ssrContext = __vite_ssr_import_4__.useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue")
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
}
const __vite_ssr_import_5__ = await __vite_ssr_import__("/@id/plugin-vue:export-helper");

__vite_ssr_exports__.default = /*#__PURE__*/__vite_ssr_import_5__.default(_sfc_main, [['ssrRender',_sfc_ssrRender],['__scopeId',"data-v-4b977bd5"],['__file',"C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue"]]);
}


// --------------------
// Request: /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue?vue&type=style&index=0&scoped=true&lang.css
// Parents: 
// - /node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue ($id_75531f6f)
// Dependencies: 

// --------------------
const $id_35a441df = async function (global, module, exports, __vite_ssr_exports__, __vite_ssr_import_meta__, __vite_ssr_import__, __vite_ssr_dynamic_import__, __vite_ssr_exportAll__) {
__vite_ssr_exports__.default = ".bg-white[data-v-4b977bd5]{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.bg-gray-100[data-v-4b977bd5]{--tw-bg-opacity:1;background-color:rgba(243,244,246,var(--tw-bg-opacity))}.rounded[data-v-4b977bd5]{border-radius:.25rem}.cursor-pointer[data-v-4b977bd5]{cursor:pointer}.flex[data-v-4b977bd5]{display:flex}.grid[data-v-4b977bd5]{display:grid}.flex-col[data-v-4b977bd5]{flex-direction:column}.place-content-center[data-v-4b977bd5]{place-content:center}.items-end[data-v-4b977bd5]{align-items:flex-end}.items-center[data-v-4b977bd5]{align-items:center}.justify-end[data-v-4b977bd5]{justify-content:flex-end}.justify-center[data-v-4b977bd5]{justify-content:center}.justify-between[data-v-4b977bd5]{justify-content:space-between}.font-sans[data-v-4b977bd5]{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol,\"Noto Color Emoji\"}.font-mono[data-v-4b977bd5]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-medium[data-v-4b977bd5]{font-weight:500}.font-bold[data-v-4b977bd5]{font-weight:700}.font-semibold[data-v-4b977bd5]{font-weight:600}.text-xl[data-v-4b977bd5]{font-size:1.25rem;line-height:1.75rem}.text-sm[data-v-4b977bd5]{font-size:.875rem;line-height:1.25rem}.text-2xl[data-v-4b977bd5]{font-size:1.5rem;line-height:2rem}.mb-2[data-v-4b977bd5]{margin-bottom:.5rem}.mb-4[data-v-4b977bd5]{margin-bottom:1rem}.mt-4[data-v-4b977bd5]{margin-top:1rem}.mt-2[data-v-4b977bd5]{margin-top:.5rem}.max-w-5xl[data-v-4b977bd5]{max-width:64rem}.min-h-screen[data-v-4b977bd5]{min-height:100vh}.p-4[data-v-4b977bd5]{padding:1rem}.p-8[data-v-4b977bd5]{padding:2rem}.p-1[data-v-4b977bd5]{padding:.25rem}.pb-1[data-v-4b977bd5]{padding-bottom:.25rem}.fixed[data-v-4b977bd5]{position:fixed}.left-0[data-v-4b977bd5]{left:0}.right-0[data-v-4b977bd5]{right:0}.text-black[data-v-4b977bd5]{--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity))}.antialiased[data-v-4b977bd5]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.w-full[data-v-4b977bd5]{width:100%}.w-40[data-v-4b977bd5]{width:10rem}.z-10[data-v-4b977bd5]{z-index:10}.z-20[data-v-4b977bd5]{z-index:20}.gap-4[data-v-4b977bd5]{grid-gap:1rem;gap:1rem}.gap-y-4[data-v-4b977bd5]{grid-row-gap:1rem;-webkit-row-gap:1rem;-moz-row-gap:1rem;row-gap:1rem}.grid-cols-3[data-v-4b977bd5]{grid-template-columns:repeat(3,minmax(0,1fr))}.col-span-3[data-v-4b977bd5]{-ms-grid-column-span:span 3/span 3;grid-column:span 3/span 3}@media (min-width:640px){.sm\\:text-base[data-v-4b977bd5]{font-size:1rem;line-height:1.5rem}.sm\\:pb-2[data-v-4b977bd5]{padding-bottom:.5rem}.sm\\:col-span-1[data-v-4b977bd5]{-ms-grid-column-span:span 1/span 1;grid-column:span 1/span 1}}@media (min-width:768px){.md\\:gap-8[data-v-4b977bd5]{grid-gap:2rem;gap:2rem}}@media (prefers-color-scheme:dark){.dark\\:bg-black[data-v-4b977bd5]{--tw-bg-opacity:1;background-color:rgba(0,0,0,var(--tw-bg-opacity))}.dark\\:bg-white\\/10[data-v-4b977bd5]{--tw-bg-opacity:.1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.dark\\:text-white[data-v-4b977bd5]{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}}.spotlight[data-v-4b977bd5]{background:linear-gradient(45deg,#00dc82,#36e4da 50%,#0047e1);bottom:-40vh;filter:blur(20vh);height:50vh}.spotlight-wrapper[data-v-4b977bd5]{opacity:.5;transition:opacity .4s ease-in}.nuxt-logo:hover~.spotlight-wrapper[data-v-4b977bd5]{opacity:.95}.gradient-border[data-v-4b977bd5]{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:.5rem;position:relative;width:100%}@media (prefers-color-scheme:light){.gradient-border[data-v-4b977bd5]{background-color:#ffffff4d}.gradient-border[data-v-4b977bd5]:before{background:linear-gradient(90deg,#e2e2e2,#e2e2e2 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}@media (prefers-color-scheme:dark){.gradient-border[data-v-4b977bd5]{background-color:#1414144d}.gradient-border[data-v-4b977bd5]:before{background:linear-gradient(90deg,#303030,#303030 25%,#00dc82 50%,#36e4da 75%,#0047e1)}}.gradient-border[data-v-4b977bd5]:before{background-position:0 0;background-size:400% auto;border-radius:.5rem;bottom:0;content:\"\";left:0;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;opacity:.5;padding:2px;position:absolute;right:0;top:0;transition:background-position .3s ease-in-out,opacity .2s ease-in-out;width:100%}.gradient-border[data-v-4b977bd5]:hover:before{background-position:-50% 0;opacity:1}";
}


const __modules__ = {
  "C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry": $id_0229cf84,
  "/node_modules/.pnpm/vue@3.2.37/node_modules/vue/dist/vue.cjs.js": $id_b79b7992,
  "/node_modules/.pnpm/ohmyfetch@0.4.18/node_modules/ohmyfetch/dist/index.mjs": $id_01b7b628,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/paths.mjs": $id_56cd283c,
  "/node_modules/.pnpm/ufo@0.8.4/node_modules/ufo/dist/index.mjs": $id_495ace14,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/index.mjs": $id_766abaf4,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/nuxt.mjs": $id_10acdc10,
  "/node_modules/.pnpm/hookable@5.1.1/node_modules/hookable/dist/index.mjs": $id_1a92400c,
  "/node_modules/.pnpm/unctx@1.1.4/node_modules/unctx/dist/index.mjs": $id_d6fb3d59,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/legacy-app.mjs": $id_a8337ab8,
  "/node_modules/.pnpm/unenv@0.5.2/node_modules/unenv/runtime/mock/proxy.mjs": $id_05d98782,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/index.mjs": $id_ddfc5c1d,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/component.mjs": $id_bb679022,
  "/node_modules/.pnpm/vue-router@4.0.16_vue@3.2.37/node_modules/vue-router/dist/vue-router.cjs.js": $id_f9e109a4,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/asyncData.mjs": $id_55f07f6c,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/utils.mjs": $id_5fb452ea,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/hydrate.mjs": $id_c519006a,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/state.mjs": $id_15536816,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/error.mjs": $id_efa9f6c9,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/fetch.mjs": $id_e6e5acd2,
  "/node_modules/.pnpm/ohash@0.1.0/node_modules/ohash/dist/index.mjs": $id_138a9c06,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/cookie.mjs": $id_51244472,
  "/node_modules/.pnpm/cookie-es@0.5.0/node_modules/cookie-es/dist/index.mjs": $id_1c0537b7,
  "/node_modules/.pnpm/h3@0.7.10/node_modules/h3/dist/index.mjs": $id_0a9d87b7,
  "/node_modules/.pnpm/destr@1.1.1/node_modules/destr/dist/index.mjs": $id_622c7ff8,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/ssr.mjs": $id_03dc0f08,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/composables/router.mjs": $id_904700ca,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/index.mjs": $id_8456c3bf,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-link.mjs": $id_7351f7c2,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/index.mjs": $id_cfdcd588,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/composables.mjs": $id_5298d07a,
  "/node_modules/.pnpm/@vue+shared@3.2.37/node_modules/@vue/shared/dist/shared.cjs.js": $id_d7d09eda,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/css.mjs": $id_e4592a4e,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/plugins/server.mjs": $id_39f99006,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/preload.server.mjs": $id_48cedfc3,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/components.plugin.mjs": $id_ef841a6e,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/lib/vueuse-head.plugin.mjs": $id_dbc1312b,
  "/node_modules/.pnpm/@vueuse+head@0.7.6_vue@3.2.37/node_modules/@vueuse/head/dist/index.mjs": $id_438a5406,
  "/node_modules/.pnpm/defu@6.0.0/node_modules/defu/dist/defu.mjs": $id_c379efc8,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/plugin.mjs": $id_a9cfc40a,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/head/runtime/components.mjs": $id_788f106d,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/meta.config.mjs": $id_f642d9e0,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/plugins/router.mjs": $id_c4251de4,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/root-component.mjs": $id_d2591284,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-root.vue": $id_f4b707cc,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/error-component.mjs": $id_019bd2bd,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/components/nuxt-error-page.vue": $id_ba924238,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue": $id_6b0e98cf,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/imports.mjs": $id_3715c9af,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/vue-demi.mjs": $id_31b64ebc,
  "/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/compat/capi.mjs": $id_7e11cc02,
  "/node_modules/.pnpm/@vueuse+core@8.7.5/node_modules/@vueuse/core/index.mjs": $id_f549584d,
  "/node_modules/.pnpm/vue@3.2.37/node_modules/vue/server-renderer/index.js": $id_86c2af1b,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue?vue&type=style&index=0&scoped=true&lang.css": $id_0277a538,
  "/@id/plugin-vue:export-helper": $id_bbb863c1,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue": $id_aaca7844,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue?vue&type=style&index=0&scoped=true&lang.css": $id_f91ec644,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue": $id_74fc6fbe,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/error-dev.vue?vue&type=style&index=0&scoped=true&lang.css": $id_e225fa28,
  "/@id/virtual:nuxt:C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/.nuxt/app-component.mjs": $id_17c27e52,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue": $id_75531f6f,
  "/node_modules/.pnpm/@nuxt+ui-templates@0.1.1/node_modules/@nuxt/ui-templates/dist/templates/welcome.vue?vue&type=style&index=0&scoped=true&lang.css": $id_35a441df
}


const __pendingModules__ = new Map()
const __pendingImports__ = new Map()
const __ssrContext__ = { global: globalThis }

function __ssrLoadModule__(url, urlStack = []) {
  const pendingModule = __pendingModules__.get(url)
  if (pendingModule) { return pendingModule }
  const modulePromise = __instantiateModule__(url, urlStack)
  __pendingModules__.set(url, modulePromise)
  modulePromise.catch(() => { __pendingModules__.delete(url) })
         .finally(() => { __pendingModules__.delete(url) })
  return modulePromise
}

async function __instantiateModule__(url, urlStack) {
  const mod = __modules__[url]
  if (mod.stubModule) { return mod.stubModule }
  const stubModule = { [Symbol.toStringTag]: 'Module' }
  Object.defineProperty(stubModule, '__esModule', { value: true })
  mod.stubModule = stubModule
  // https://vitejs.dev/guide/api-hmr.html
  const importMeta = { url, hot: { accept() {}, prune() {}, dispose() {}, invalidate() {}, decline() {}, on() {} } }
  urlStack = urlStack.concat(url)
  const isCircular = url => urlStack.includes(url)
  const pendingDeps = []
  const ssrImport = async (dep) => {
    // TODO: Handle externals if dep[0] !== '.' | '/'
    if (!isCircular(dep) && !__pendingImports__.get(dep)?.some(isCircular)) {
      pendingDeps.push(dep)
      if (pendingDeps.length === 1) {
        __pendingImports__.set(url, pendingDeps)
      }
      await __ssrLoadModule__(dep, urlStack)
      if (pendingDeps.length === 1) {
        __pendingImports__.delete(url)
      } else {
        pendingDeps.splice(pendingDeps.indexOf(dep), 1)
      }
    }
    return __modules__[dep].stubModule
  }
  function ssrDynamicImport (dep) {
    // TODO: Handle dynamic import starting with . relative to url
    return ssrImport(dep)
  }

  function ssrExportAll(sourceModule) {
    for (const key in sourceModule) {
      if (key !== 'default') {
        try {
          Object.defineProperty(stubModule, key, {
            enumerable: true,
            configurable: true,
            get() { return sourceModule[key] }
          })
        } catch (_err) { }
      }
    }
  }

  const cjsModule = {
    get exports () {
      return stubModule.default
    },
    set exports (v) {
      stubModule.default = v
    },
  }

  await mod(
    __ssrContext__.global,
    cjsModule,
    stubModule.default,
    stubModule,
    importMeta,
    ssrImport,
    ssrDynamicImport,
    ssrExportAll
  )

  return stubModule
}


export default await __ssrLoadModule__("C:/Users/Admam/Documents/myPortfolioN3/myPortfolioN3/node_modules/.pnpm/nuxt@3.0.0-rc.4/node_modules/nuxt/dist/app/entry")