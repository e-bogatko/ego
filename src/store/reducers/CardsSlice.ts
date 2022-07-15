import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CardsState {
  usedCards: number[]
  currentCardIndex: number
}

const initialState: CardsState = {
  usedCards: [], // TODO: fix type localStorage
  currentCardIndex: 0
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setUsedCards(state, action: PayloadAction<number>) {
      console.log(action.payload)
      state.usedCards.push(action.payload)
      localStorage.setItem('usedCards', JSON.stringify(action.payload))
    },
    setCurrentCardIndex(state, action: PayloadAction<number>) {
      console.log(action.payload)
      state.currentCardIndex = action.payload
      localStorage.setItem('currentCardIndex', JSON.stringify(action.payload))
    }
    // usersFetching(state) {
    //   state.isLoading = true
    // },
    // usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
    //   state.isLoading = false
    //   state.error = ''
    //   state.users = action.payload
    // },
    // usersFetchingError(state, action: PayloadAction<any>) {
    //   state.isLoading = false
    //   state.error = action.payload
    // }
  }
})

export default cardsSlice.reducer
