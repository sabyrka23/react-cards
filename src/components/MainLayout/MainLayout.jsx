import styles from './MainLayout.module.css'

export const MainLayout = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.mainLayout}>
      <header className={styles.header}>header</header>
      <div className={styles.content}>
        <main className={styles.main}>main</main>
        <footer className={styles.footer}>
          <span>React Question Cards Application | {currentYear}</span>
          <span>
            Developed by{' '}
            <a href="https://github.com/sabyrka23" target="_blank">
              Sabyrka
            </a>
          </span>
        </footer>
      </div>
    </div>
  )
}
