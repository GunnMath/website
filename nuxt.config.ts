import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/main.css"],
    build: {
        postcss: {
            postcssOptions: require("./postcss.config.js"),
        },
    },
    app : {
        head: {
            title: "Gunn Math Circle",
            link: [
                {
                    rel:"icon",
                    type:"img/png",
                    href:"/gmc_logo.png"
                }
            ]
        }
    },
    modules: [
        '@nuxt/content'
      ],
    content: {
    // https://content.nuxtjs.org/api/configuration
    }
})
