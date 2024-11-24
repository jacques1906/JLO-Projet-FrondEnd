import { useState } from 'react'
import '../styles/components/TaskList.css'

interface Task {
  id: number
  text: string
  completed: boolean
  createdAt: Date
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
          text: newTask.trim(),
          completed: false
        }
      ])
      setNewTask('')
    }
  }

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
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
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
              className="task-checkbox"
            />
            <span className="task-text">{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList