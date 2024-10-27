export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  routeRules: {
    "/api/menu": { cache: { maxAge: 60 } },
  },
  components: [
    {
      path: "./components",
      pathPrefix: false,
    },
  ],
  modules: [
    "@nuxt/eslint",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@hebilicious/vue-query-nuxt",
  ],
  colorMode: {
    preference: "light",
  },
});
