import { FC } from 'react'
import { ICard } from '../../../models/ICard'
import style from './style.module.scss'

const FlipCard: FC<ICard> = ({ card }) => {
  return (
    <div className={style.card}>
      <div className={style.header}>{card.front.question}</div>
      <div className={style.body}>
        <p className={style.answer}>{card.front.answers.one}</p>
        <p className={style.answer}>{card.front.answers.two}</p>
        <p className={style.answer}>{card.front.answers.three}</p>
      </div>
    </div>
  )
}

export default FlipCard
