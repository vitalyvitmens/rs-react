import { Link } from 'react-router-dom'

export function BookList() {
  return (
    <>
      <h1>BookList</h1>
      <ul>
        <li>
          <Link to="/books/1">Harry Potter 1</Link>
        </li>
        <li>
          <Link to="/books/2">Harry Potter 2</Link>
        </li>
        <li>
          <Link to="/books/3">Harry Potter 3</Link>
        </li>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
      </ul>
    </>
  )
}
