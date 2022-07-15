import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks } from '../actions/home'

export default function Home() {
  const books = useSelector((state) => state.home)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  console.log(books)

  return (
    <>
      <h1>Browse books!</h1>
      <div>
        {books.content &&
          books.content.map((book) => (
            <img src={book.image} key={book.id} alt="Book" />
          ))}
      </div>
    </>
  )
}
