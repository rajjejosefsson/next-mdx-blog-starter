import LightIcon from '../icons/LightIcon'
import MoonIcon from '../icons/MoonIcon'
import React from 'react'

export default function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    setIsDarkMode(document.documentElement.dataset.theme === 'dark')
  }, [])

  const switchTheme = () => {
    const currentTheme = document.documentElement.dataset.theme
    if (currentTheme === 'dark') {
      document.documentElement.dataset.theme = 'light'
      setIsDarkMode(false)
    } else {
      document.documentElement.dataset.theme = 'dark'
      setIsDarkMode(true)
    }
  }

  const label = `Activate ${isDarkMode ? 'light mode' : 'dark mode'}`

  return (
    <>
      <button aria-label={label} title={label} onClick={switchTheme}>
        {isDarkMode ? <LightIcon /> : <MoonIcon />}
      </button>
      <style jsx>{`
        button {
          color: white;
          background: transparent;
          margin: 0 12px;
        }
      `}</style>
    </>
  )
}
