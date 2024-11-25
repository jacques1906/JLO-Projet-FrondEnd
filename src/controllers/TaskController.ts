import { TaskModel } from '../models/TaskModel'
import { Task } from '../types/task'

export class TaskController {
  model: TaskModel
  private notifyChange: () => void

  constructor(notifyChange: () => void) {
    this.model = new TaskModel()
    this.notifyChange = notifyChange
  }

  addTask(text: string): void {
    this.model.addTask(text)
    this.notifyChange()
  }

  toggleTask(taskId: number): void {
    const task = this.model.toggleTask(taskId)
    if (task) {
      this.notifyChange()
    }
  }

  deleteCompletedTasks(): void {
    this.model.deleteCompletedTasks()
    this.notifyChange()
  }

  getPendingTasks(): Task[] {
    return this.model.getTasks().filter(task => !task.completed)
  }

  getCompletedTasks(): Task[] {
    return this.model.getTasks().filter(task => task.completed)
  }
}