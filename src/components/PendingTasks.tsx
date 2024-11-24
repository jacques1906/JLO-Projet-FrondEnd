import { useState } from 'react'
import TaskList from './TaskList'

const PendingTasks = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tâches en cours</h2>
      <TaskList showPendingOnly={true} />
    </div>
  )
}

export default PendingTasks 