import { Routes, Route } from 'react-router-dom'
import { BooksLayout } from './layout/BooksLayout'
import { BookList } from './pages/BookList'
import { Book } from './pages/Book'
import { NewBook } from './pages/NewBook'

export function BooksRoutes() {
  return (
    <>
      <Routes>
        <Route element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
      </Routes>
    </>
  )
}
