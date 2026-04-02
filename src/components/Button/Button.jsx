import styles from './Button.module.css'

export const Button = ({ children, onClick, isDisabled, type = 'button' }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
