import { useState } from 'react'
import '../styles/components/Settings.css'

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue')

  const themeColors: { [key in ThemeColor]: string } = {
    blue: '#646cff',
    purple: '#9333ea',
    green: '#22c55e',
    orange: '#f97316'
  }

  return (
    <div className="settings-container">
      <h2>Paramètres</h2>
      
      <div className="settings-section">
        <h3>Apparence</h3>
        <div className="setting-item">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={(e) => setDarkMode(e.target.checked)}
            />
            Mode sombre
          </label>
        </div>

        <div className="theme-colors">
          <h4>Couleur du thème</h4>
          <div className="color-options">
            {Object.entries(themeColors).map(([name, color]) => (
              <button
                key={name}
                className={`color-option ${themeColor === name ? 'active' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setThemeColor(name as ThemeColor)}
                aria-label={`Thème ${name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings 