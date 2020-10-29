export default function BaseStyles() {
  return (
    <style jsx global>
      {`
        :root {
          --bg-color: white;
          --primary-color: #121212;
          --border-color: rgba(0, 0, 0, 0.12);
          /* responsive fonts */
          --font-size-small: 16px;
          --font-size-medium: 22px;
        }

        @media (min-width: 1024px) {
          :root {
            --font-size-small: 21px;
            --font-size-medium: 24px;
          }
        }

        [data-theme='dark'] {
          --bg-color: #121212;
          --primary-color: #f4f4f6;
          --border-color: rgba(255, 255, 255, 0.12);
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
        }

        html,
        body {
          height: 100%;
          padding: 0;
          margin: 0;
          font-family: 'Raleway', -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          line-height: 1.6;
          /* 1rem = 10px */
          font-size: 62.5%;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          scroll-behavior: smooth;
          background: var(--bg-color);
          color: var(--primary-color);
          transition: background 0.5s;
        }

        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-weight: 100 1000;
          font-stretch: 25% 151%;
          font-display: block;
          src: url('/fonts/Raleway-VariableFont_wght.ttf')
              format('truetype-variations'),
            url('/fonts/Raleway-Regular.ttf') format('truetype');
        }

        #__next {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
          font-size: 1.6rem;
        }

        h1,
        h2,
        h3,
        h4,
        p {
          margin: 0;
        }

        ul {
          padding: 0;
        }

        a,
        as {
          color: #0070f3;
          text-decoration: none;
          cursor: pointer;
        }
        button {
          border: none;
          cursor: pointer;
        }

        ul {
          list-style: none;
        }

        blockquote {
          background-color: var(--bg-color);
          color: var(--primary-color);
          padding: 20px 45px 20px 26px;
          border-left: 0.5rem solid #1ba7cd;
          font-style: italic;
          margin-bottom: 2.3rem;
        }
      `}
    </style>
  )
}
