import { FC } from 'react'
import { ICard } from '../../../models/ICard'
import Card from '../../atoms/Card'
interface Props {
  cards: ICard[]
}

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
