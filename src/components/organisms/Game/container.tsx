import Game from './component'
import cards from '../../../assets/content.json'
// import { ICard } from '../../../models/ICard'
import { useAppSelector, useAppDispatch } from '../../../hooks/redux'
import { cardsSlice } from '../../../store/reducers/CardsSlice'
import randomInteger from '../../../helpers/randomNumber'
// import { useEffect } from 'react'

const GameContainer = () => {
  const dispatch = useAppDispatch()
  const currentCardIndex = useAppSelector(
    (state) => state.cardsReducer.currentCardIndex
  )
  const usedCards = useAppSelector((state) => state.cardsReducer.usedCards)

  const getCurrentCardIndex = (): void => {
    const number = randomInteger(0, cards.content.length)
    if (usedCards.includes(number)) {
      return getCurrentCardIndex()
    } else {
      dispatch(cardsSlice.actions.setCurrentCardIndex(number))
      dispatch(cardsSlice.actions.setUsedCards(number))
    }
  }
  console.log(cards.content[currentCardIndex])
  const card = cards.content[currentCardIndex]

  // useEffect(() => {
  //   getCurrentCardIndex()
  // }, [])
  return <Game card={card} handleNextCard={getCurrentCardIndex} />
}

export const container = GameContainer
