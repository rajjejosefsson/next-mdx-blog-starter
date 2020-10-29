import Navbar from './Header/Navbar'
import {SkipNavContent} from '@reach/skip-nav'
import React from 'react'
import Footer from './Footer'
import config from '../config/website'
import Head from 'next/head'
import GlobalStyles from './GlobalStyles'

function Layout({children}) {
  return (
    <>
      <main className="page-layout">{children}</main>
      <style jsx>{`
        .page-layout {
          width: 100%;
          height: 100%;
          margin: 0px auto;
          max-width: 80rem;
          padding: 2rem 4rem 4rem;
        }
      `}</style>
    </>
  )
}

export default function PageLayout({
  children,
  hero,
  title,
  description,
  disableIndexing = false,
}) {
  return (
    <>
      <Head>
        <title>{title || config.siteTitle}</title>
        {description !== false && (
          <meta
            name="description"
            content={description || config.siteDescription}
          />
        )}
        {disableIndexing && <meta name="robots" content="noindex" />}
      </Head>

      <header>
        <Navbar />
        {hero ? (
          React.cloneElement(hero, {
            style: {
              paddingTop: '100px',
            },
          })
        ) : (
          <div style={{paddingTop: '100px'}} />
        )}
      </header>

      <Layout>
        <SkipNavContent />
        {children}
      </Layout>

      <Footer />

      <GlobalStyles />
    </>
  )
}
