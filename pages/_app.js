import {DefaultSeo} from 'next-seo'

export default function App({Component, pageProps}) {
  return (
    <>
      <DefaultSeo
        title="site title"
        description="site description"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
