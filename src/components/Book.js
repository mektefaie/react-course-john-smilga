const Book = props => {
  const { img, title, author, getBook, id, number } = props

  return (
    <article className='book'>
      <span className='number'>{`# ${number + 1}`}</span>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={() => getBook(id)}>Click me</button>
      <h4>{author} </h4>
    </article>
  )
}

export default Book
