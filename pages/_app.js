import {DefaultSeo} from 'next-seo'

import config from '../config/seo'

export default function App({Component, pageProps}) {
  return (
    <>
      <DefaultSeo {...config} />
      <Component {...pageProps} />
    </>
  )
}
