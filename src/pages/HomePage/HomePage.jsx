import { QuestionCard } from '@/components/QuestionCard'
import styles from './HomePage.module.css'
import { useEffect, useState } from 'react'

export const HomePage = () => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch('/db.json')
      const data = await response.json()

      setCards(data.react)
    }

    loadData()
  }, [])

  return (
    <div className={styles.homePage}>
      <h1>Home</h1>
      <div className={styles.cards}>
        {cards.map((card) => (
          <QuestionCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  )
}
