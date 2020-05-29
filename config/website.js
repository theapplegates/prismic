module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Gatsby Starter - Prismic.io', // Navigation and Site Title
  titleAlt: 'Gatsby Prismic.io', // Title for JSONLD
  description: 'A typography-heavy & light-themed Gatsby Starter which uses the Headless CMS Prismic.',
  headline: 'Writing and publishing content for LekoArts', // Headline for schema.org JSONLD
  url: 'https://prismic-applegate-9254.netlify.app', // Domain of your site. No trailing slash!
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
