import clsx from 'clsx'
import styles from './Button.module.css'

export const Button = ({ children, className, onClick, isDisabled, type = 'button' }) => {
  return (
    <button className={clsx(styles.button, className)} type={type} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  )
}
