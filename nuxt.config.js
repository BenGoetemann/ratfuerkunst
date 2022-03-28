import dotenv from "dotenv";
import {
  createClient
} from "./plugins/contentful";
const contentfulClient = createClient();

dotenv.config();
let development = process.env.NODE_ENV !== 'production'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TEMPLATE',
    htmlAttrs: {
      lang: 'de'
    },
    script: [{
        src: '/heyflow.js',
        body: true
      },
      {
        src: "https://storage.googleapis.com/heyflow-eu-static/widget/v1-6-3/index.min.js"
      },
    ],
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/youtube",
    "~/plugins/contentful",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '~/components',
      '~/components/navigation',
      '~/components/figures',
      '~/components/sections',
      '~/components/sections/utils',
      '~/components/container',
      '~/components/elements',
      '~/components/selections',
      '~/components/contentful'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-gsap-module'
  ],

  gsap: {
    /* Module Options */
    extraPlugins: {
      scrollTrigger: true
    }
  },

  axios: {
    baseURL: development ? 'http://localhost:8888' : 'https://bg-template.netlify.app', // Used as fallback if no runtime config is provided
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/dotenv', 'nuxt-cookie-control'], //, 'nuxt-facebook-pixel-module'],

  // facebook: {
  //   track: 'PageView',
  //   pixelId: 'FACEBOOK_PIXEL_ID',
  //   autoPageView: true,
  //   disabled: false
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-url': {},
        'postcss-nested': {},
        'postcss-responsive-type': {},
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  },

  generate: {
    routes: function () {
      return Promise.all([
          contentfulClient.getEntries({
            content_type: "blogPost",
            include: 10,
          }),
          contentfulClient.getEntries({
            content_type: "event",
            include: 10,
          })
        ])
        .then(([blogEntries, eventEntries]) => {
          return [
            ...blogEntries.items.map(entry => `/post/${entry.fields.slug}`),
            ...eventEntries.items.map(entry => `/event/${entry.fields.slug}`),
          ]
        })
    }
  }
}
