import { useTheme } from '../contexts/ThemeContext'
import '../styles/components/Settings.css'
import { ThemeColor } from '../types/theme'

const Settings = () => {
  const { themeColor, setThemeColor, colors } = useTheme()
  
  const themeNames = {
    sombre: 'Sombre',
    gris: 'Gris',
    beige: 'Beige'
  }

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-2xl font-bold text-accent mb-6">Paramètres</h2>
      <div className="bg-tertiary p-6 rounded-lg">
        <div className="mt-8">
          <h4 className="text-text mb-4">Thème</h4>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(colors).map(([name, color]) => (
              <button
                key={name}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105
                  ${themeColor === name ? 'border-2 border-accent shadow-lg' : 'border-2 border-transparent'}
                  ${name === 'sombre' ? 'bg-black text-[#AF8D86]' : ''}
                  ${name === 'gris' ? 'bg-[#4a4a4a] text-white' : ''}
                  ${name === 'beige' ? 'bg-[#f5f5dc] text-[#333333]' : ''}`}
                onClick={() => setThemeColor(name as ThemeColor)}
                aria-label={`Thème ${themeNames[name as ThemeColor]}`}
              >
                {themeNames[name as ThemeColor]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings 