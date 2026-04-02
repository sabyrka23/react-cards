import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logoImage from '@/assets/logo.svg'
import { Button } from '../Button'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={logoImage} alt="" width={44} height={44} />
        <span>React Cards</span>
      </Link>

      <div className={styles.actions}>
        <Button>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}
