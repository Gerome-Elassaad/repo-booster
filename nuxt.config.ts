export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxthq/studio',
    '@vueuse/nuxt',
    'nuxt-og-image'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },

  routeRules: {
    '/api/search.json': { prerender: true },
    '/docs': { redirect: '/docs/getting-started', prerender: false }
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    preset: 'node-server',
    prerender: {
      routes: ['/', '/docs'],
      crawlLinks: true
    }
  },

  typescript: {
    strict: false
  },

  hooks: {
    // Extend `@nuxt/ui` components as global to use them in `.md` files
    'components:extend': (components) => {
      components
        .filter(component => ['UButton'].includes(component.pascalName))
        .forEach((component) => {
          component.global = true
        })
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
