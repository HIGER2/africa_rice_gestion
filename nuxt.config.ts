// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr:false,
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/_colors.scss" as *;'
        }
      }
    },
   
  },
  router: {
    options: {
      //  hashMode: true,
      scrollBehaviorType: 'smooth'

    }
  },
  app: {
    head: {
      meta: [
      { charset: 'UTF-8' }, // Encodage des caractères
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }, // Pour la responsivité
    ],
       link: [
        { rel: 'stylesheet', href: 'https://unicons.iconscout.com/release/v4.0.8/css/line.css' },
        { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/2.0.0/uicons-regular-rounded/css/uicons-regular-rounded.css' },
        { rel: 'stylesheet', href: 'https://cdn-uicons.flaticon.com/2.0.0/uicons-solid-rounded/css/uicons-solid-rounded.css' },
      ]
    }
  },

  
  //  postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
   
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt'],
  ui: {
    fonts: false,
    colorMode: false
  },
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
 
})