import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import TaskList from './components/TaskList'
import './App.css'
import Settings from './components/Settings'

const Navigation = () => {
  const location = useLocation()
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link'
  }

  return (
    <nav className="nav-links">
      <Link to="/" className={isActive('/')}>
        Toutes les tâches
      </Link>
      <Link to="/taches/en-cours" className={isActive('/taches/en-cours')}>
        Tâches en cours
      </Link>
      <Link to="/taches/terminees" className={isActive('/taches/terminees')}>
        Tâches terminées
      </Link>
      <Link to="/parametres" className={isActive('/parametres')}>
        Paramètres
      </Link>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Gestionnaire de Tâches</h1>
          <Navigation />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/taches/en-cours" element={<TaskList showPendingOnly={true} />} />
            <Route path="/taches/terminees" element={<TaskList showCompletedOnly={true} />} />
            <Route path="/parametres" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
