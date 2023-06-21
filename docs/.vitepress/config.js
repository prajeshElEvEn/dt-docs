import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DTDocs",
  description: "Documentation for DeepThought websites' custom CSS built over Bootstrap v5",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/guide/get-started' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Get Started', link: '/guide/get-started' },
          { text: 'Template', link: '/guide/template' }
        ]
      },
      {
        text: 'Root Styles',
        items: [
          { text: 'Typefaces', link: '/guide/root/typeface' },
          { text: 'Colors', link: '/guide/root/colors' },
          { text: 'Accents', link: '/guide/root/accents' },
          { text: 'Grey Scale', link: '/guide/root/grey-scale' },
          { text: 'Dimensions', link: '/guide/root/dimensions' },
          { text: 'All Root Styles', link: '/guide/root/all' },
        ]
      },
      {
        text: 'Utility Classes',
        items: [
          { text: 'Body', link: '/guide/classes/body' },
          { text: 'Headings', link: '/guide/classes/headings' },
          { text: 'Text Ellipse', link: '/guide/classes/text-ellipse' },
          { text: 'Background Accents', link: '/guide/classes/bg-accents' },
          { text: 'Cursor', link: '/guide/classes/cursor' },
        ]
      }, {
        text: 'Components',
        items: [
          { text: 'Header', link: '/guide/components/header' },
          { text: 'Button', link: '/guide/components/button' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/prajeshElEvEn/dt-docs' }
    ]
  }
})
