import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <h1>Gestionnaire de Tâches</h1>
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/taches/en-cours" element={<TaskList showPendingOnly={true} />} />
            <Route path="/taches/terminees" element={<TaskList showCompletedOnly={true} />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
