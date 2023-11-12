import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Book from './components/Book'
import { books } from './assets/data/books'

function BookList() {
  const getBook = id => {
    console.log(books.find(book => book.id === id))
  }

  return (
    <section className='booklist'>
      {books.map(book => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
