import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { Button } from '../Button'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/" title="Home">
        <div className={styles.logoImage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="-11.5 -10.23174 23 20.46348">
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        </div>
        <span className={styles.logoText}>
          <span>React</span>
          <span>Cards</span>
        </span>
      </Link>

      <div className={styles.actions}>
        <Button>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}
