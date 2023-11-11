const Book = props => {
  // if passing the entire object as a prop, either use:
  // const Book = ({ book: { img, title, author } }) => {
  // or
  // const { img, title, author } = props.book
  // or

  const { img, title, author } = props

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

export default Book
