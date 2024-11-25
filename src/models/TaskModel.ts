import { Task } from '../types/task'
import { LocalStorageService } from '../services/LocalStorageService'

export class TaskModel {
  private tasks: Task[]
  private nextId: number

  constructor() {
    // Charger les tâches depuis le localStorage
    this.tasks = LocalStorageService.getTasks()
    // Calculer le prochain ID
    this.nextId = this.calculateNextId()
  }

  private calculateNextId(): number {
    if (this.tasks.length === 0) return 1
    return Math.max(...this.tasks.map(task => task.id)) + 1
  }

  getTasks(): Task[] {
    return this.tasks
  }

  addTask(text: string): void {
    const newTask: Task = {
      id: this.nextId++,
      text,
      completed: false,
      createdAt: new Date()
    }
    this.tasks.push(newTask)
    LocalStorageService.setTasks(this.tasks)
  }

  toggleTask(taskId: number): Task | undefined {
    const task = this.tasks.find(t => t.id === taskId)
    if (task) {
      task.completed = !task.completed
      LocalStorageService.setTasks(this.tasks)
    }
    return task
  }

  deleteCompletedTasks(): void {
    this.tasks = this.tasks.filter(task => !task.completed)
    LocalStorageService.setTasks(this.tasks)
  }
} 