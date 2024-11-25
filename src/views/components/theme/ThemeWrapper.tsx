import { useTheme } from '../../../contexts/ThemeContext'

interface ThemeWrapperProps {
  children: React.ReactNode
}

const ThemeWrapper = ({ children }: ThemeWrapperProps) => {
  const { theme } = useTheme()
  
  return (
    <div className={`theme-${theme}`}>
      {children}
    </div>
  )
}

export default ThemeWrapper 