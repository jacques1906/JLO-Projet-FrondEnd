import { useState } from 'react'
import '../styles/components/TaskList.css'

interface Task {
  id: number
  text: string
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask.trim()
        }
      ])
      setNewTask('')
    }
  }

  return (
    <div className="task-list-container">
      <form onSubmit={addTask} className="task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche..."
          className="task-input"
        />
        <button type="submit" className="add-button">Ajouter</button>
      </form>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <span className="task-text">{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList