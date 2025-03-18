// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/image"],
  css: ["~/assets/css/app.css"],
  tailwindcss: {
    editorSupport: true,
  },
  fonts: {},
  image: {
    quality: 80,
  },
});
