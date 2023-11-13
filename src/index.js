import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Book from './components/Book'
import { books } from './assets/data/books'

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className='booklist'>
        {books.map((book, number) => {
          return <Book {...book} key={book.id} number={number} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
