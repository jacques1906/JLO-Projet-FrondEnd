import { ThemeColor } from '../types/theme'
import { Task } from '../types/task'

export class LocalStorageService {
  static getTheme(): ThemeColor {
    return (localStorage.getItem('theme') as ThemeColor) || 'sombre'
  }

  static setTheme(theme: ThemeColor): void {
    localStorage.setItem('theme', theme)
  }

  static getTasks(): Task[] {
    const tasks = localStorage.getItem('tasks')
    if (!tasks) return []
    return JSON.parse(tasks).map((task: any) => ({
      ...task,
      createdAt: new Date(task.createdAt)
    }))
  }

  static setTasks(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
} 