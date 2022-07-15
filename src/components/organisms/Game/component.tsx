import { FC } from 'react'
import style from './style.module.scss'
import CardList from '../../molecules/CardList'
import { ICard } from '../../../models/ICard'

interface Props {
  cards: ICard[]
}

const Game: FC<Props> = ({ cards }) => {
  return (
    <div className={style.content}>
      <CardList cards={cards} />
    </div>
  )
}

export default Game
