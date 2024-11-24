import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { ThemeColor } from '../types/theme'

interface ThemeContextType {
    
  themeColor: ThemeColor
  setThemeColor: (color: ThemeColor) => void
  colors: { 
    [key in ThemeColor]: {
      background: string
      text: string
      accent: string
      secondaryBackground: string
      tertiaryBackground: string
    }
  }
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('theme')
    return (saved as ThemeColor) || 'sombre'
  })

  const colors = {
    sombre: {
      background: '#000000',
      text: '#AF8D86',
      accent: '#EDBFC6',
      secondaryBackground: '#1a1a1a',
      tertiaryBackground: '#2a2a2a'
    },
    gris: {
      background: '#4a4a4a',
      text: '#ffffff',
      accent: '#747bff',
      secondaryBackground: '#3a3a3a',
      tertiaryBackground: '#2a2a2a'
    },
    beige: {
      background: '#f5f5dc',
      text: '#333333',
      accent: '#646cff',
      secondaryBackground: '#ffffff',
      tertiaryBackground: '#e5e5c5'
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', themeColor)
  }, [themeColor])

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor, colors }}>
      {children}
    </ThemeContext.Provider>
  )
} 