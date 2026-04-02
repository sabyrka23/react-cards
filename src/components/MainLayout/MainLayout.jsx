import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import styles from './MainLayout.module.css'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>header</header>
      <div className={styles.content}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
