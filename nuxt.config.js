import tailwindConfig from './tailwind.config'

export default {
  ssr: false,
  target: 'static',
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    bodyAttrs: {
      class: 'bg-white overflow-y-scroll min-h-screen font-serif',
    },
    title: "A comment on the Devil's Love",
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width, height=device-height, user-scalable=no, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: 'These poems are respectfully dedicated to The Cheshire-Cat.',
      },

      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "A comment on the Devil's Love",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'These poems are respectfully dedicated to The Cheshire-Cat.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://acommentonthedevilslove.setetres.st/share.png',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://acommentonthedevilslove.setetres.st',
      },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "A comment on the Devil's Love",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'These poems are respectfully dedicated to The Cheshire-Cat.',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://acommentonthedevilslove.setetres.st/share.png',
      },
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans&family=IBM+Plex+Serif&display=swap',
      },
    ],
  },
  loading: {
    color: '#000000',
    failedColor: '#ef4444',
    throttle: 0,
  },
  css: ['@/assets/css/application.css'],
  plugins: [
    {
      src: '~/plugins/ga.js',
      mode: 'client',
    },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  build: {},
}
