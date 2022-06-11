import cards from '../../../assets/content.json'
import CardList from '../../molecules/CardList'

const Main = () => {
  return (
    <div>
      <CardList cards={cards.content} />
    </div>
  )
}

export default Main
