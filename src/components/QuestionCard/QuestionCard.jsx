import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'
import styles from './QuestionCard.module.css'

export const QuestionCard = ({ id, question, answer, level, completed }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/questions/${id}`)
  }

  return (
    <article className={styles.questionCard}>
      <div className={styles.labels}>
        <span className={styles.level}>Level: {level}</span>
        <span className={styles.completed}>{completed ? 'Completed' : 'Not Completed'}</span>
      </div>

      <h2 className={styles.title}>{question}</h2>

      <div className={styles.shortAnswer}>
        <strong className={styles.label}>Short Answer:</strong>
        <span className={styles.answer}>{answer}</span>
      </div>

      <Button className={styles.button} onClick={handleClick}>
        View
      </Button>
    </article>
  )
}
