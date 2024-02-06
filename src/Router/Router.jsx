import { Routes, Route, Link, useRoutes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Book } from './pages/Book'
import { BookList } from './pages/BookList'
import { NewBook } from './pages/NewBook'
import { NotFound } from './pages/NotFound'
import { BooksLayout } from './layout/BooksLayout'
import { BooksRoutes } from './BooksRoutes'

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

// //! Динамические сегменты
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<BookList />} />
//         <Route path="/books/:id/:img?" element={<Book />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

//! Типы Router:
// npm install react-router-dom
//! 1). HashRouter - этот маршрутизатор перед роутом подставляет /#
//! import { HashRouter } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <HashRouter> 
    <App /> 
  </HashRouter>
)*/
//! 2). unstable_HistoryRoute - этот маршрутизатор позволяет в ручную управлять объектом истории (кнопка назад и вперед в браузере)
//! import { unstable_HistoryRoute } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <unstable_HistoryRoute> 
    <App /> 
  </unstable_HistoryRoute>
)*/
//! 3). MemoryRouter - этот маршрутизатор хранит в памяти место хранение информации о текущем маршруте Url браузера
//! import { MemoryRouter } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <MemoryRouter> 
    <App /> 
  </MemoryRouter>
)*/
//! 4). StaticRouter - этот маршрутизатор отвечает за серверный рендеринг, он принимает лишь один аргумент куда мы хотим перейти и поэтому отображает только одну статическую страницу
//! import { unstable_HistoryRoute } from 'react-router-dom/server'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StaticRouter location="/book"> 
    <App /> 
  </StaticRouter>
)*/
//! 5). NativeRouter - этот маршрутизатор эквивалентен нашему BrowserRouter но только для React Native
//! import { NativeRouter } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <NativeRouter> 
    <App /> 
  </NativeRouter>
)*/
//! 6). BrowserRouter - это наш маршрутизатор который покрывает 90% случаев использования внутри React
//! import { BrowserRouter } from 'react-router-dom'
/*const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter> 
    <App /> 
  </BrowserRouter>
)*/

// //! useParams()
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<BookList />} />
//         <Route path="/books/:id/:img?" element={<Book />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   )
// }

// //! Специфичные пути и страница 404
// // Жесткие пути в приоритете чем динамические пути
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<BookList />} />
//         <Route path="/books/:id/:img?" element={<Book />} />
//         <Route path="/books/new" element={<NewBook />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! Вложенные страницы - позволяет вкладывать одни роуты в другие, позволяя делать гибкую верстку
// // Жесткие пути в приоритете чем динамические пути
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books">
//           <Route index element={<BookList />} />
//           <Route path=":id" element={<Book />} />
//           <Route path="new" element={<NewBook />} />
//         </Route>
//         {/* <Route path="/books" element={<BookList />} /> */}
//         {/* <Route path="/books/:id/:img?" element={<Book />} /> */}
//         {/* <Route path="/books/new" element={<NewBook />} /> */}
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! Outlet
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<BooksLayout />}>
//           <Route index element={<BookList />} />
//           <Route path=":id" element={<Book />} />
//           <Route path="new" element={<NewBook />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! Вложенный роутинг. Контекст Outlet
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books/*" element={<BooksRoutes />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! useRoutes()
// export default function Router() {
//   const element = useRoutes([
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: '/books',
//       element: <BooksLayout />,
//       children: [
//         {
//           index: true,
//           element: <BookList />,
//         },
//         {
//           path: ':id',
//           element: <Book />,
//         },
//         {
//           path: 'new',
//           element: <NewBook />,
//         },
//       ]
//     }
//   ])
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//     { element }
//       {/* <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/books" element={<BooksLayout />}>
//           <Route index element={<BookList />} />
//           <Route path=":id" element={<Book />} />
//           <Route path="new" element={<NewBook />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes> */}
//     </>
//   )
// }

//! Link
export default function Router() {
  return (
    <>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/books">BookList</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/*" element={<BooksRoutes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
