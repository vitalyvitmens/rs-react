import { Routes, Route, Link, useRoutes, NavLink, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
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
//       path: '/about',
//       element: <About />,
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
//       ],
//     },
//     {
//       path: '/contact',
//       element: <Contact />,
//     },
//     {
//       path: '*',
//       element: <NotFound />,
//     },
//   ])
//   return (
//     <>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//       <li><Link to="/books">BookList</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//     </ul>
//     {element}
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

// //! Link в нем аргумент to не единственный который можно использовать, есть ещё:
// //! - replace он принимает true или false и подменяет предыдущую страницу в истории от компонента на котором данный аргумент находится, на пред-предыдущую страницу (полезно если после авторизации Вы не хотите что бы клиент возвращался на страницу авторизации)
// //! - reloadDocument по клику на эту ссылку страница будет перезагружаться 
// //! - state={} с его помощью возможно передавать какие то данные между компонентами используя внутреннее состояние нашего реакт роутера, при этом этот state не будет поподать в url, а будет храниться только внутри нашего реакт роутера
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><Link to="/" replace>Home</Link></li> 
//       <li><Link to="/about" reloadDocument>About</Link></li>
//       <li><Link to="/books" state={false}>BookList</Link></li>
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

// //! NavLink
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><NavLink style={({ isActive }) => {
//         console.log('####: isActive', isActive)
//         if (isActive) {
//           return {color: 'red'}
//         }
//         return {}
//       }} to="/">Home</NavLink></li>
//       <li><NavLink style={({ isActive }) => isActive ? { color: 'red'} : {}} to="/about">About</NavLink></li>
//       <li><NavLink className={({ isActive }) => isActive ? 'red' : null} to="/books" end>{({ isActive }) => isActive ? 'BookList Active' : 'BookList'}</NavLink></li>
//       <li><NavLink className={({isActive}) => isActive ? 'pink' : null} to="/contact">Contact</NavLink></li>
//       <li><NavLink to="/gallery">Gallery</NavLink></li>
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
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! Navigate и useNavigate() - смотри файл src\Router\pages\NotFound.js
// export default function Router() {
//   return (
//     <>
//     <ul>
//       <li><NavLink style={({ isActive }) => {
//         console.log('####: isActive', isActive)
//         if (isActive) {
//           return {color: 'red'}
//         }
//         return {}
//       }} to="/">Home</NavLink></li>
//       <li><NavLink style={({ isActive }) => isActive ? { color: 'red'} : {}} to="/about">About</NavLink></li>
//       <li><NavLink className={({ isActive }) => isActive ? 'red' : null} to="/books" end>{({ isActive }) => isActive ? 'BookList Active' : 'BookList'}</NavLink></li>
//       <li><NavLink className={({isActive}) => isActive ? 'pink' : null} to="/contact">Contact</NavLink></li>
//       <li><NavLink to="/gallery">Gallery</NavLink></li>
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
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </>
//   )
// }

// //! useSearchParams() - смотри файл src\Router\layout\BooksLayout.js
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

//! useLocation() - дополнительно смотри файл src\Router\pages\NotFound.js
export default function Router() {
  const location = useLocation()
  console.log('####: location', location)
  return (
    <>
    <ul>
      <li><NavLink style={({ isActive }) => {
        console.log('####: isActive', isActive)
        if (isActive) {
          return {color: 'red'}
        }
        return {}
      }} to="/" state='Hello, this is the state from location.state'>Home</NavLink></li>
      <li><NavLink style={({ isActive }) => isActive ? { color: 'red'} : {}} to="/about">About</NavLink></li>
      <li><NavLink className={({ isActive }) => isActive ? 'red' : null} to="/books" end>{({ isActive }) => isActive ? 'BookList Active' : 'BookList'}</NavLink></li>
      <li><NavLink className={({isActive}) => isActive ? 'pink' : null} to="/contact">Contact</NavLink></li>
      <li><NavLink to="/gallery">Gallery</NavLink></li>
    </ul>
    <div style={{color: 'red', fontWeight: 700, fontSize: '1.5rem'}}>{ location.state }</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
