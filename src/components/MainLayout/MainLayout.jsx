import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer'
import styles from './MainLayout.module.css'
import { Header } from '../Header'

export const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <div className={styles.content}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
