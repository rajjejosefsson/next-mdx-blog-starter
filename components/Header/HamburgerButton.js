import VisuallyHidden from '@reach/visually-hidden'
import {maxSM} from '../../styles/breakpoints'

export default function HamburgerButton({onClick, isOpen}) {
  const label = `${isOpen ? 'Close Menu' : 'Open menu'}`
  return (
    <>
      <button
        title={label}
        aria-label={label}
        onClick={onClick}
        className={`hamburger-button ${isOpen ? 'hamburger-button--open' : ''}`}
        id="menu-toggle"
        aria-expanded={isOpen}
      >
        <VisuallyHidden>Menu</VisuallyHidden>
        <svg
          className="hamburger-button--icon"
          aria-hidden="true"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
        >
          <g className="hamburger-button--lineWrapper">
            <path
              className="hamburger-button--line hamburger-button--line-1"
              d="M5 13h90v14H5z"
            />
            <path
              className="hamburger-button--line hamburger-button--line-2"
              d="M5 43h90v14H5z"
            />
            <path
              className="hamburger-button--line hamburger-button--line-3"
              d="M5 73h90v14H5z"
            />
          </g>
        </svg>
      </button>

      <style jsx>{`
        .hamburger-button {
          z-index: 999;
          position: relative;
          border: none;
          border-radius: 0;
          fill: white;
          background-color: transparent;
          cursor: pointer;
          transition: all 0.25s ease-in-out;
          font-size: 0.875em;
        }

        .hamburger-button:active {
          fill: white;
        }

        @media (max-width: ${maxSM}px) {
          .hamburger-button {
            display: block;
          }
        }

        @media (min-width: ${maxSM}px) {
          .hamburger-button {
            display: none;
          }
        }

        .hamburger-button--icon {
          fill: inherit;
          width: 2.4rem;
          height: 2.4rem;
        }

        .hamburger-button--line {
          opacity: 1;
          transform: rotate(0) translateY(0) translateX(0);
          transform-origin: 1em 1em;
          transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
        }

        .hamburger-button--line-1 {
          transform-origin: 1em 2.5em;
        }

        .hamburger-button--line-3 {
          transform-origin: 1em 4.5em;
        }

        .hamburger-button--open .hamburger-button--line-1 {
          transform: rotate(45deg) translateY(0) translateX(0);
        }

        .hamburger-button--open .hamburger-button--line-2 {
          opacity: 0;
        }

        .hamburger-button--open .hamburger-button--line-3 {
          transform: rotate(-45deg) translateY(0em) translateX(0em);
        }
      `}</style>
    </>
  )
}
