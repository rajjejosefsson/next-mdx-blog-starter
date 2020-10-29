import config from '../../config/website'
import GithubIcon from '../icons/GithubIcon'

export default function GitHubLink() {
  return (
    <>
      <a
        href={config.github}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my GitHub"
      >
        <GithubIcon />
      </a>
      <style jsx>
        {`
          display: flex;
          align-items: center;
          color: rgba(255, 255, 255, 0.7);
          margin-left: 20px;
          :hover {
            color: rgba(255, 255, 255, 1);
          }
        `}
      </style>
    </>
  )
}
