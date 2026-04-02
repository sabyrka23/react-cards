import { QuestionCard } from '@/components/QuestionCard'
import styles from './HomePage.module.css'

export const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Home</h1>
      <QuestionCard />
    </div>
  )
}
