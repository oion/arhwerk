// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxt/eslint",
  ],

  app: {
    head: {
      title: "Arhwerk", // default fallback title
      htmlAttrs: {
        lang: "ro",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href:
            (import.meta.env.NUXT_APP_BASE_URL
              ? import.meta.env.NUXT_APP_BASE_URL
              : "/") + "favicon.ico",
        },
      ],
    },
  },

  css: ["~/assets/css/app.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  tailwindcss: {
    editorSupport: true,
  },

  fonts: {},

  image: {
    quality: 75,
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

  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        // Enable/Disable heading anchor links. { h1: true, h2: false }
      },
    },
    highlight: false,
  },
});
