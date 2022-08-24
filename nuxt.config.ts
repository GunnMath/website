import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/main.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    modules: [
        '@nuxt/content'
      ],
    content: {
    // https://content.nuxtjs.org/api/configuration
    }
})
