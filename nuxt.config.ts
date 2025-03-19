// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
  ],

  app: {
    head: {
      title: "Arhwerk", // default fallback title
      htmlAttrs: {
        lang: "ro",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

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
        visibleOnce: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 500,
            ease: "easeOutQuad",
          },
        },
      },
    },
  },
});
