import Game from './component'
import cards from '../../../assets/content.json'
import { ICard } from '../../../models/ICard'

const GameContainer = () => {
  return <Game cards={cards.content as ICard[]} />
}

export const container = GameContainer
