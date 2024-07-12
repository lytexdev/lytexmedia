export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: '/api',
    },
    private: {
      emailHost: process.env.EMAIL_HOST,
      emailPort: process.env.EMAIL_PORT,
      emailUser: process.env.EMAIL_USER,
      emailPass: process.env.EMAIL_PASS,
    },
  },
  css: [
    '/assets/scss/app.scss'
  ],
  app: {
    head: {
      title: 'LYTEX MEDIA',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: 'lytexmedia, lytex, media, lytexnet, lytex.net, _lytex_, linkleap, webseiten erstellen, webseiten, lytex media, coffee, kaffee' },
        { property: 'og:image', content: 'lytexmedia.svg' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '256' },
        { property: 'og:image:height', content: '256' },
        { name: 'description', content: 'LYTEX MEDIA konvertiert Kaffee mit seinem Koffein in hochwertigen Code & Software!' },
        { name: 'theme-color', content: '#7c43d7' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'lytexmedia.svg' },
        { property: 'og:title', content: 'LYTEX MEDIA' },
        { property: 'og:description', content: 'LYTEX MEDIA konvertiert Kaffee mit seinem Koffein in hochwertigen Code & Software!' },
        { property: 'og:url', content: 'https://lytexmedia.com' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '128x128', href: 'lytexmedia.svg' },
        { rel: 'canonical', href: 'https://lytexmedia.com' }
      ]
    }
  }
})
