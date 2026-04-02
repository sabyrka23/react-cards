import styles from './Button.module.css'

export const Button = ({ children, type = 'button' }) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  )
}
