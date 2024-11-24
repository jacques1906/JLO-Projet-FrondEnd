import { useState } from 'react'    
import './App.css'
import TaskList from './components/TaskList'

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Gestionnaire de Tâches</h1>
      </header>
      <main className="main-content">
        <TaskList />
      </main>
    </div>
  )
}

export default App
