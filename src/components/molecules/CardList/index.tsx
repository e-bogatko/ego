import { FC } from 'react'
import Props from './interface'
import Card from '../../atoms/Card'
import { ICard } from '../../../models/ICard'

const CardList: FC<Props> = ({ cards }) => {
  return (
    <div>
      {cards.map((card: ICard) => (
        <Card id={card.id} key={card.id} card={card.card} />
      ))}
    </div>
  )
}

export default CardList
