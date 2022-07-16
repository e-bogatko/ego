import { FC, useState } from 'react'
import { ICard } from '../../../models/ICard'
import style from './style.module.scss'
import { ReactComponent as ArrowRepeat } from '../../../assets/icons/arrow-repeat.svg'

interface Props {
  card: ICard | any
}

const FlipCard: FC<Props> = ({ card }) => {
  const [flip, setFlip] = useState<boolean>(false)

  return (
    <div className={style.card}>
      <div className={style.header}>
        {flip ? card.card.back.question : card.card.front.question}
      </div>
      <div className={style.body}>
        <p className={style.answer}>
          1)&nbsp;
          {flip ? card.card.back.answers.one : card.card.front.answers.one}
        </p>
        <p className={style.answer}>
          2)&nbsp;
          {flip ? card.card.back.answers.two : card.card.front.answers.two}
        </p>
        <p className={style.answer}>
          3)&nbsp;
          {flip ? card.card.back.answers.three : card.card.front.answers.three}
        </p>
      </div>
      <ArrowRepeat
        className={style.arrowRepeat}
        onClick={() => setFlip(!flip)}
      />
    </div>
  )
}

export default FlipCard
