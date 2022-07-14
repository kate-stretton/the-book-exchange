export const SET_BOOK = 'SET_BOOK'

import { getBook } from '../apis/bookView'

export function setBook(book) {
  return {
    type: SET_BOOK,
    payload: book,
  }
}

export function fetchBook(id) {
  return (dispatch) => {
    return getBook(id).then((book) => {
      console.log('action', book)
      dispatch(setBook(book))
      return null
    })
  }
}
