import { Link, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { Button } from '../Button'
import { Logo } from '../Logo'

export const Header = () => {
  const navigate = useNavigate()

  const handleAddQuestion = () => {
    navigate('/add-question')
  }

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <header className={styles.header}>
      <Link to="/" title="Home" aria-label="Home">
        <Logo />
      </Link>
      <div className={styles.actions}>
        <Button onClick={handleAddQuestion}>Add</Button>
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </header>
  )
}
