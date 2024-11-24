import { useState } from 'react'
import TaskList from './TaskList'

const CompletedTasks = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tâches terminées</h2>
      <TaskList showCompletedOnly={true} />
    </div>
  )
}

export default CompletedTasks 