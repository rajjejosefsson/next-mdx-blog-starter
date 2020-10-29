// import Image from 'next/image'

export default function BigHero(props) {
  return (
    <div className="big-hero" {...props}>
      <div className="info">
        <h1 className="title">Next.js MDX starter application</h1>
        <h2 className="description">
          Hello, Hi! this is a MDX starter project
        </h2>
      </div>

      {/** can't style Image */}
      <div className="imgWrapper">
        <img
          // priority
          className="image"
          width={250}
          height={309}
          alt="logo"
          src="/images/me/large.png"
        />
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.8rem;
        }
        .big-hero {
          padding: 4rem 4rem 0rem 4rem;
          overflow: hidden;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(-213deg, #61dafb 0%, #5a9bcf 100%);
          color: white;
        }

        .info {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 645px;
        }

        h3 {
          max-width: 70rem;
        }

        .title {
          font-weight: 300;
          font-size: 7rem;
          max-width: 70rem;
          margin-bottom: 2rem;
          line-height: 1;
          letter-spacing: -0.07em;
        }

        .imgWrapper {
          margin-bottom: -2rem;
        }

        @media screen and (max-width: 780px) {
          .title {
            font-size: 8vw;
          }

          img {
            width: 35vw;
            height: auto;
          }

          .big-hero {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  )
}
