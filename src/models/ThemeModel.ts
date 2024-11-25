import { ThemeColor } from '../types/theme'

export class ThemeModel {
  private themeColor: ThemeColor

  constructor() {
    const saved = localStorage.getItem('theme')
    this.themeColor = (saved as ThemeColor) || 'sombre'
  }

  getTheme(): ThemeColor {
    return this.themeColor
  }

  setTheme(color: ThemeColor): void {
    this.themeColor = color
    localStorage.setItem('theme', color)
  }

  getColors() {
    return {
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
  }
} 