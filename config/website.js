module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Living Life', // Navigation and Site Title
  titleAlt: 'Life', // Title for JSONLD
  description: 'Living life and writing some things down alone the way.',
  headline: 'I blog' // Headline for schema.org JSONLD
  url: 'https://distracted-hypatia-48b9a0.netlify.app', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Prismic', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Applegate', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@papplegate', // Twitter Username
  facebook: 'paul.applegate', // Facebook Site Name
  googleAnalyticsID: 'UA-147090349-8',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
