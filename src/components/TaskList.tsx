import { useState } from 'react'
import '../styles/components/TaskList.css'
import Notification from './Notification'

interface Task {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [notification, setNotification] = useState<string | null>(null)

  const showNotification = (message: string) => {
    setNotification(message)
  }

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
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const newStatus = !task.completed
        showNotification(`Tâche ${newStatus ? 'terminée' : 'réactivée'}`)
        return { ...task, completed: newStatus }
      }
      return task
    }))
  }

  const deleteAllCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
    showNotification('Toutes les tâches terminées ont été supprimées')
  }

  const pendingTasks = tasks
    .filter(task => !task.completed)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  const completedTasks = tasks
    .filter(task => task.completed)
    .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

  const renderTaskList = (tasks: Task[], title: string, isCompleted: boolean) => (
    <div className="task-block">
      <div className="task-block-header">
        <h2>{title}</h2>
        {isCompleted && completedTasks.length > 0 && (
          <button 
            onClick={deleteAllCompleted}
            className="delete-all-button"
          >
            Tout supprimer
          </button>
        )}
      </div>
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
      {notification && (
        <Notification 
          message={notification} 
          onClose={() => setNotification(null)} 
        />
      )}
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

      {renderTaskList(pendingTasks, "Tâches en cours", false)}
      {renderTaskList(completedTasks, "Tâches terminées", true)}
    </div>
  )
}

export default TaskList