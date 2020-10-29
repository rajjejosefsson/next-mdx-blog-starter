import Link from 'next/link'

import GitHubLink from './SocialLinks/GithubLink'
import LinkedInLink from './SocialLinks/LinkedInLink'
import TwitterLink from './SocialLinks/TwitterLink'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="site-nav">
          <HomeLink />
        </div>
        <div className="external-link-group">
          <GitHubLink />
          <LinkedInLink />
          <TwitterLink />
        </div>
      </footer>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          padding: 4rem;
          background-color: #21232b;
          color: white;
          margin-top: 3rem;
          min-height: 16rem;
        }

        .site-nav {
          margin-bottom: 2rem;
        }

        .external-link-group {
          display: flex;
        }
      `}</style>
    </>
  )
}

function HomeLink() {
  return (
    <>
      <Link href="/">
        <a className="home-nav-link">Home</a>
      </Link>

      <style jsx>{`
        .home-nav-link {
          color: white;
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}
