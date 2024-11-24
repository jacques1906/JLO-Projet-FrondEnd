import { useTheme } from '../contexts/ThemeContext'
import { useEffect } from 'react'

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const { themeColor, colors } = useTheme()

  useEffect(() => {
    const root = document.documentElement
    const theme = colors[themeColor]
    
    root.style.setProperty('--background-color', theme.background)
    root.style.setProperty('--text-color', theme.text)
    root.style.setProperty('--accent-color', theme.accent)
    root.style.setProperty('--secondary-background', theme.secondaryBackground)
    root.style.setProperty('--tertiary-background', theme.tertiaryBackground)
  }, [themeColor, colors])

  return <>{children}</>
}

export default ThemeWrapper 