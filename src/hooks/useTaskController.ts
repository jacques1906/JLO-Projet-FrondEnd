import { useState, useCallback, useRef } from 'react'
import { TaskController } from '../controllers/TaskController'
import { Task } from '../types/task'

export const useTaskController = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const controllerRef = useRef<TaskController>()

  if (!controllerRef.current) {
    controllerRef.current = new TaskController(() => {
      setTasks([...controllerRef.current!.model.getTasks()])
    })
  }

  const updateTasks = useCallback(() => {
    setTasks([...controllerRef.current!.model.getTasks()])
  }, [])

  return {
    tasks,
    controller: controllerRef.current,
    updateTasks
  }
}