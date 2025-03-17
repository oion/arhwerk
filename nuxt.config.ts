// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@nuxt/image"],
  tailwindcss: {},
  fonts: {
    families: [{ name: "Sen", provider: "google" }],
  },
  image: {
    quality: 80,
  },
});
