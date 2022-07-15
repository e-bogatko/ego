import { FC } from 'react'
import style from './style.module.scss'
import FlipCard from '../../atoms/Card'
import { ICard } from '../../../models/ICard'
import Button from '../../atoms/Button'
interface Props {
  card: ICard | any
  handleNextCard: () => void
}

const Game: FC<Props> = ({ card, handleNextCard }) => {
  return (
    <div className={style.content}>
      <FlipCard card={card} />
      <Button onClick={handleNextCard}>Следующая карта</Button>
    </div>
  )
}

export default Game
