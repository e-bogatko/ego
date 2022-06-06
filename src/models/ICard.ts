interface card {
  page_id: number
  question: string
  answers: {
    one: string
    two: string
    three: string
  }
}

export interface ICard {
  id: number
  card: {
    front: card
    back: card
  }
}
