import config from '../../config/website'
import TwitterIcon from '../icons/TwitterIcon'

export default function TwitterLink() {
  return (
    <>
      <a
        href={config.twitter}
        target="_blank"
        rel="noreferrer"
        aria-label="Visit my Twitter"
      >
        <TwitterIcon />
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
