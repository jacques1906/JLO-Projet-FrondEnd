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
          completed: false,
          createdAt: new Date()
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

  const pendingTasks = tasks
    .filter(task => !task.completed)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  const completedTasks = tasks
    .filter(task => task.completed)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  const renderTaskList = (tasks: Task[], title: string) => (
    <div className="task-block">
      <h2>{title}</h2>
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
            <span className="task-date">
              {task.createdAt.toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )

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

      {renderTaskList(pendingTasks, "Tâches en cours")}
      {renderTaskList(completedTasks, "Tâches terminées")}
    </div>
  )
}

export default TaskList