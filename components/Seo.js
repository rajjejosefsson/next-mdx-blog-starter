import Head from 'next/head'
const config = require('../config/website')

export default function SEO({keywords = undefined}) {
  return (
    <Head>
      {config.twitterUsername && (
        <meta name="twitter:site" content={config.twitterUsername} />
      )}
      {config.siteLogo && (
        <meta
          name="twitter:card"
          content={config.siteLogo ? 'summary_large_image' : 'summary'}
        />
      )}
      {config.siteTitle && (
        <meta property="og:title" content={config.siteTitle} />
      )}
      {config.siteUrl && <meta property="og:url" content={config.siteUrl} />}
      {config.siteDescription && (
        <meta name="description" content={config.siteDescription} />
      )}
      {config.siteDescription && (
        <meta property="og:description" content={config.siteDescription} />
      )}
      {config.siteLogo && config.siteUrl && (
        <meta
          property="og:image"
          content={
            config.siteLogo.startsWith('https://')
              ? config.siteLogo
              : `${config.siteUrl}${config.siteLogo}`
          }
        />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
    </Head>
  )
}
