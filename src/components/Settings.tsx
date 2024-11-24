import { useTheme } from '../contexts/ThemeContext'
import '../styles/components/Settings.css'

const Settings = () => {
  const { themeColor, setThemeColor, colors } = useTheme()

  return (
    <div className="settings-container">
      <h2>Paramètres</h2>
      
      <div className="settings-section">
        <div className="theme-colors">
          <h4>Thème</h4>
          <div className="color-options">
            {Object.entries(colors).map(([name, color]) => (
              <button
                key={name}
                className={`color-option ${themeColor === name ? 'active' : ''}`}
                style={{ backgroundColor: color.background }}
                onClick={() => setThemeColor(name as ThemeColor)}
                aria-label={`Thème ${name}`}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings 