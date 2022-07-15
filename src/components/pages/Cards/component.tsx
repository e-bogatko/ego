import { FC } from 'react'
import cards from '../../../assets/content.json'
import { ICard } from '../../../models/ICard'
import CardList from '../../molecules/CardList'

const Main: FC = () => {
  return (
    <div>
      <p>Hello</p>
      <CardList cards={cards.content as ICard[]} />
    </div>
  )
}

export default Main
