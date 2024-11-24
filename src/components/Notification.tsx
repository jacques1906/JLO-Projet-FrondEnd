import { useEffect } from 'react'
import '../styles/components/Notification.css'

interface NotificationProps {
  message: string
  onClose: () => void
}

const Notification = ({ message, onClose }: NotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="notification">
      {message}
    </div>
  )
}

export default Notification 