module.exports = {
  siteTitle: 'My Name', // Navigation and Site Title
  siteTitleAlt: 'The personal website of My Name', // Alternative Site title for SEO
  siteTitleShort: 'username', // short_name for manifest
  siteUrl: process.env.ROOT_URL || 'https://username.com/', // Domain of your site. No trailing slash!
  lang: 'en', // Language Tag on <html> element
  pathPrefix: '/',
  siteLogo: 'images/logo.png', // Used for SEO and manifest, path to your image you placed in the 'static' folder
  siteDescription:
    'Come check out how username can help you develop your skills',
  minibio: `
    <strong>My Name</strong> is a JavaScript software engineer. Is from Sweden and he currently lives in Prague, Czech Republic.
  `,
  author: 'My Name', // Author for schemaORGJSONLD
  organization: 'My Name Tech',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  twitterUsername: '@username', // Twitter Username
  ogSiteName: 'My Name', // Facebook Site Name
  ogLanguage: 'en_US',

  // Manifest and Progress color
  themeColor: '#4147DC',
  backgroundColor: '#231C42',

  // Social component
  twitter: 'https://twitter.com/username/',
  twitterHandle: '@username',
  github: 'https://github.com/rajjejosefsson/next-mdx-blog',
  linkedin: 'https://www.linkedin.com/in/username/',
  youtube: '',
  rss: 'https://yourdomain/blog/rss.xml',
}
