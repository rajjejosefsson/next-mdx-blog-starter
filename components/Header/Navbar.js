import '@reach/dialog/styles.css'
import {Dialog} from '@reach/dialog'
import {SkipNavLink} from '@reach/skip-nav'
import React from 'react'

import Link from 'next/link'
// import Image from 'next/image'
import ActiveLink from './ActiveLink'
import ThemeButton from './ThemeButton'
import config from '../../config/website'
import {maxSM} from '../../styles/breakpoints'
import HamburgerButton from './HamburgerButton'

export default function Navbar() {
  return (
    <>
      <SkipNavLink />
      <nav>
        <HomeLink />

        <DefaultNav />

        <div className="endButtons">
          <ThemeButton />
          <MobileNav />
        </div>
      </nav>
      <style jsx>{`
        .endButtons {
          display: flex;
          align-items: center;
          margin-left: auto;
          min-width: 0;
        }

        nav {
          position: absolute;
          width: 100%;
          height: 8rem;
          display: flex;
          align-items: center;
          background: linear-gradient(-213deg, #21232b 0%, #21232b 100%);
          padding: 0 2rem;
        }
      `}</style>
    </>
  )
}

function HomeLink() {
  return (
    <>
      <Link href="/">
        <a className="home-nav-link">
          <div className="avatar">
            <img
              // priority
              width={36}
              height={44}
              alt="logo"
              src="/images/me/small.png"
            />
          </div>
          {config.siteTitle}
        </a>
      </Link>

      <style jsx>{`
        .avatar {
          margin: 0.8rem;
          border-radius: 50%;
          overflow: hidden;
          background: #1da7cd;
          height: 5rem;
          width: 5rem;
          min-width: 5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .home-nav-link {
          color: white;
          margin-right: 6rem;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}

function DefaultNav() {
  return (
    <>
      <div className="nav-links">
        <ActiveLink activeClassName="active" href="/blog">
          <a className="nav-link">Blog</a>
        </ActiveLink>

        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </div>
      <style jsx>{`
        .active {
          background: #1da7cd;
        }

        .nav-link:not(.active):hover {
          color: #1da7cd;
        }

        .nav-links {
          max-width: 80rem;
          display: block;
          visibility: visible;
        }

        .nav-link {
          text-decoration: none;
          margin: 0 1rem;
          color: white;
          padding: 1rem;
          border-radius: 0.3rem;
        }

        @media (max-width: ${maxSM}px) {
          .nav-links {
            display: none;
            visibility: hidden;
          }
        }
      `}</style>
    </>
  )
}

function MobileNav() {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false)
  const toggle = () => setIsMobileNavOpen(!isMobileNavOpen)
  return (
    <div className="mobile-nav">
      <HamburgerButton isOpen={isMobileNavOpen} onClick={toggle} />
      {isMobileNavOpen && <MobileNavDialog toggle={toggle} />}
      <style jsx>{`
        .mobile-nav {
          display: none;
          visibility: hidden;
        }
        @media (max-width: ${maxSM}px) {
          .mobile-nav {
            display: block;
            visibility: visible;
          }
        }
      `}</style>
    </div>
  )
}

function MobileNavDialog({toggle}) {
  return (
    <>
      <Dialog
        aria-label="site navigation"
        style={{
          height: '100vh',
          width: '100vw',
          margin: 0,
          background: 'linear-gradient(-213deg,#21232b 0%,#21232b 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
        }}
      >
        <button className="hidden-close-button" onClick={toggle} />
        <ActiveLink activeClassName="active" href="/blog">
          <a className="mobile-nav-link">Blog</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/about">
          <a className="mobile-nav-link">About</a>
        </ActiveLink>
      </Dialog>
      <style jsx>{`
        .toggleButton {
          margin: 0 8px;
        }

        .hidden-close-button {
          position: absolute;
          top: 27px;
          right: 25px;
          width: 24px;
          height: 24px;
          background: transparent;
        }

        .mobile-nav-link {
          color: white;
          font-size: 40px;
          text-align: center;
          width: 100%;
        }

        .active {
          background: #1da7cd;
        }
      `}</style>
    </>
  )
}
