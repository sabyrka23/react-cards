import styles from './Footer.module.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <span>React Question Cards Application | {currentYear}</span>
      <span>
        Developed by{' '}
        <a href="https://github.com/sabyrka23" target="_blank">
          Sabyrka
        </a>
      </span>
    </footer>
  )
}
