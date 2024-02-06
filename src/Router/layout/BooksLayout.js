import { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

export function BooksLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 })
  const val = searchParams.get('n')
  // const [val, setVal] = useState(3)
  console.log("####: searchParams.get('n')", searchParams.get('n'))

  return (
    <>
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
          <Link to={`/books/${val}`}>Harry Potter {val}</Link>
        </li>
        <li>
          <Link to="/books/new">New Book</Link>
        </li>
      </ul>
      <Outlet context={{ name: 'Egor Book' }} />
      <input
        type="number"
        value={val}
        // onChange={(e) => setVal(e.target.value)}
        onChange={(e) => setSearchParams({ n: e.target.value, name: 'Egor' })}
      />
    </>
  )
}
