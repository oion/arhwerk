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
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxt/eslint",
    "@nuxt/icon",
    // "nuxt-graphql-client",
    "nuxt-graphql-request",
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
    domains: ["localhost:8000"],
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

  build: {
    transpile: ["nuxt-graphql-request"],
  },

  graphql: {
    /**
     * An Object of your GraphQL clients
     */
    clients: {
      default: {
        /**
         * The client endpoint url
         */
        endpoint: "http://127.0.0.1:8000/graphql",
        /**
         * Per-client options overrides
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {},
      },
    },

    /**
     * Options
     * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
     */
    options: {
      method: "get", // Default to `POST`
    },

    /**
     * Optional
     * default: false (this includes graphql-tag for node_modules folder)
     */
    includeNodeModules: true,
  },

  vite: {
    server: {
      proxy: {
        "/api": {
          target: "http://127.0.0.1:8000/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  },
});
