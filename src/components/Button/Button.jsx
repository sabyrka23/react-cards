import styles from './Button.module.css'

export const Button = ({ children, isDisabled, type = 'button' }) => {
  return (
    <button className={styles.button} type={type} disabled={isDisabled}>
      {children}
    </button>
  )
}
