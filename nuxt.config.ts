import { defineNuxtConfig } from 'nuxt'
import TypedRouter from 'nuxt-typed-router'
import eslintPlugin from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@nuxtjs/tailwindcss', TypedRouter],
  modules: [
    '@vueuse/nuxt'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
