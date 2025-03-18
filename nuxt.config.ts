// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
  ],
  css: ["~/assets/css/app.css"],
  tailwindcss: {
    editorSupport: true,
  },
  fonts: {},
  image: {
    quality: 80,
  },
  motion: {
    directives: {
      appear: {
        initial: {
          opacity: 0,
          y: 50,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            ease: "easeInOut",
          },
        },
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 800,
            ease: "easeInOut",
          },
        },
      },
    },
  },
});
