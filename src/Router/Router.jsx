import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Book } from './pages/Book'
import { BookList } from './pages/BookList'

// //! Введение в React Router
// // npm install react-router-dom
// // import { BrowserRouter } from 'react-router-dom'
// /*const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <BrowserRouter> 
//     <App /> 
//   </BrowserRouter>
// )*/

// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/book">Book</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/book" element={<Book />} />
//         <Route path="/books" element={<BookList />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

//! Динамические сегменты
// npm install react-router-dom
// import { BrowserRouter } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter> 
    <App /> 
  </BrowserRouter>
)*/

export default function Router() {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/book">Book</Link></li>
      <li><Link to="/books">BookList</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}
