import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './components/Book'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Create React App',
    img: './logo512.png',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

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
