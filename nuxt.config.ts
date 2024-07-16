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
      title: 'lytexmedia',
      htmlAttrs: {
        lang: 'de'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: 'lytexmedia, lytex, media, lytexnet, lytex.net, _lytex_, linkleap, coconut, linkspot, webseiten erstellen, webseiten, lytex media, coffee, kaffee' },
        { property: 'og:image', content: 'https://lytexmedia.com/lytexmedia.svg' },
        { property: 'og:image:type', content: 'image/svg+xml' },
        { property: 'og:image:width', content: '256' },
        { property: 'og:image:height', content: '256' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'lytexmedia' },
        { name: 'description', content: 'lytexmedia konvertiert Kaffee mit seinem Koffein in hochwertigen Code & Software! Wir sind das Team hinter LinkLeap und Coconut.' },
        { name: 'theme-color', content: '#7c43d7' },
        { name: 'robots', content: 'index, follow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'lytexmedia.svg' },
        { name: 'twitter:title', content: 'lytexmedia' },
        { name: 'twitter:description', content: 'lytexmedia konvertiert Kaffee mit seinem Koffein in hochwertigen Code & Software! Wir sind das Team hinter LinkLeap und Coconut.' },
        { property: 'og:title', content: 'lytexmedia' },
        { property: 'og:description', content: 'lytexmedia konvertiert Kaffee mit seinem Koffein in hochwertigen Code & Software! Wir sind das Team hinter LinkLeap und Coconut.' },
        { property: 'og:url', content: 'https://lytexmedia.com' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', sizes: '128x128', href: 'https://lytexmedia.com/lytexmedia.svg' },
        { rel: 'canonical', href: 'https://lytexmedia.com' },
        { rel: 'alternate', href: 'https://lytexmedia.com', hreflang: 'de' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "lytexmedia",
            "url": "https://lytexmedia.com",
            "logo": "https://lytexmedia.com/lytexmedia.svg",
            "sameAs": [
              "https://www.instagram.com/lytexmedia/",
            ]
          })
        }
      ],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
  sitemap : {
    hostname: 'https://lytexmedia.com',
    gzip: true,
    routes: [
      '/linkleap',
      '/coconut',
      '/kontakt',
      '/impressum',
    ]
  },
})
