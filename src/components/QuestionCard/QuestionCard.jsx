import { Button } from '../Button'
import styles from './QuestionCard.module.css'

export const QuestionCard = () => {
  return (
    <article className={styles.questionCard}>
      <div className={styles.labels}>
        <span className={styles.level}>Level: 2</span>
        <span className={styles.completed}>Not Completed</span>
      </div>

      <h2 className={styles.title}>Question Title</h2>

      <div className={styles.shortAnswer}>
        <strong className={styles.label}>Short Answer:</strong>
        <span className={styles.answer}>This is a short answer to the question.</span>
      </div>

      <Button className={styles.button}>View</Button>
    </article>
  )
}
