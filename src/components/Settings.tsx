import { useState } from 'react'
import '../styles/components/Settings.css'

const Settings = () => {
  const [darkMode, setDarkMode] = useState(true)

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
      </div>
    </div>
  )
}

export default Settings 