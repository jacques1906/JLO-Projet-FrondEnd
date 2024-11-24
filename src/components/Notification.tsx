import { useEffect, useState } from 'react'
import '../styles/components/Notification.css'

interface NotificationProps {
  message: string
  onClose: () => void
}

const Notification = ({ message, onClose }: NotificationProps) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [onClose, isHovered])

  return (
    <div 
      className="notification"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="notification-message">{message}</span>
      <button 
        className="notification-close" 
        onClick={onClose}
        aria-label="Fermer la notification"
      >
        ×
      </button>
    </div>
  )
}

export default Notification 