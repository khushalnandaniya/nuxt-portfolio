import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    app: {
    head: {
      title: 'Khushal Nandaniya | Shopify Developer in India',
      meta: [
        { name: 'description', content: 'Shopify & frontend developer portfolio. I help brands build fast and scalable eCommerce stores.' },
        { name: 'keywords', content: 'Shopify Developer India, Nuxt Developer, Freelance Frontend Developer, Jamnagar, Portfolio, Khushal Nandaniya' },
        { name: 'robots', content: 'index, follow' },

        // Open Graph
        { property: 'og:title', content: 'Khushal Nandaniya | Shopify Developer in India' },
        { property: 'og:description', content: 'Helping brands grow with high-performance eCommerce websites.' },
        { property: 'og:url', content: 'https://khushal-nandaniya.netlify.app' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://khushal-nandaniya.netlify.app/images/profilepic.png' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Khushal Nandaniya | Shopify Developer India' },
        { name: 'twitter:description', content: 'Freelance Shopify Developer building fast eCommerce stores.' },
        { name: 'twitter:image', content: 'https://khushal-nandaniya.netlify.app/images/profilepic.png' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
