import config from '../../config/website'
import LinkedInIcon from '../icons/LikedInIcon'

export default function LinkedInLink() {
  return (
    <>
      <a
        href={config.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my LinkedIn"
      >
        <LinkedInIcon />
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
