// //! 1. Динамический импорт
// import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
// import { About } from './pages/About'
// import { Users } from './pages/Users'
// import { MainLayout } from './layout/MainLayout'

// export function Optimization() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users" element={<Users />} />
//       </Route>
//     </Routes>
//   )
// }

// //! 2. lazy() и Suspense. Что бы работало нужно обернуть <Suspense><Outlet /></Suspense> в компоненте MainLayout- дополнительно смотри src\Optimization\pages\Home.jsx и src\Optimization\layout\MainLayout.jsx
// import { lazy } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { About } from './pages/About'
// import { Users } from './pages/Users'
// import { MainLayout } from './layout/MainLayout'

// //! Если Home экспортируется по дефолту, то используй:
// // const Home = lazy(() => import('./pages/Home'))
// //! Если Home экспортируется не по дефолту, то используй:
// const Home = lazy(() =>
//   import('./pages/Home').then((module) => ({ default: module.Home }))
// )

// export function Optimization() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users" element={<Users />} />
//       </Route>
//     </Routes>
//   )
// }

// //! 3. Lazy loading и useTransition() - дополнительно смотри src\Optimization\pages\Home.jsx и src\Optimization\pages\About.jsx и src\Optimization\pages\Users.jsx
// import { lazy } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { MainLayout } from './layout/MainLayout'

// const Home = lazy(() =>
//   import('./pages/Home').then((module) => ({ default: module.Home }))
// )
// const About = lazy(() =>
//   import('./pages/About').then((module) => ({ default: module.About }))
// )
// const Users = lazy(() =>
//   import('./pages/Users').then((module) => ({ default: module.Users }))
// )

// export function Optimization() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users" element={<Users />} />
//       </Route>
//     </Routes>
//   )
// }

// //! 4. Создание динамических компонентов - смотри вместе с src\Optimization\components\Component.jsx и src\Optimization\pages\Home.jsx и папку src\Optimization\components
// import { lazy } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { MainLayout } from './layout/MainLayout'

// const Home = lazy(() =>
//   import('./pages/Home').then((module) => ({ default: module.Home }))
// )
// const About = lazy(() =>
//   import('./pages/About').then((module) => ({ default: module.About }))
// )
// const Users = lazy(() =>
//   import('./pages/Users').then((module) => ({ default: module.Users }))
// )

// export function Optimization() {
//   return (
//     <Routes>
//       <Route element={<MainLayout />}>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/users" element={<Users />} />
//       </Route>
//     </Routes>
//   )
// }

// //! 5. Error Boundary
// import { useState } from 'react'
// import ErrorBoundaryRCC from './ErrorBoundaryRCC'
// import ErrorBoundaryRFC from './ErrorBoundaryRFC'

// function SomeComponent({ count }) {
//   return (
//     <p>
//       1 plus {count()} equals {1 + count()}
//     </p>
//   )
// }

// export function Optimization() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Example {count}</p>
//         <button onClick={() => setCount((s) => s + 1)}>Count</button>
//         <ErrorBoundaryRCC>
//           {/* <SomeComponent count={5} /> */}
//           <SomeComponent count={() => 5} />
//         </ErrorBoundaryRCC>
//         <ErrorBoundaryRFC>
//           {/* <SomeComponent count={5} /> */}
//           <SomeComponent count={() => 5} />
//         </ErrorBoundaryRFC>
//       </header>
//     </div>
//   )
// }

//! 6. Infinity Scroll, часть 1
import { useState } from 'react'
import ErrorBoundaryRCC from './ErrorBoundaryRCC'
import ErrorBoundaryRFC from './ErrorBoundaryRFC'

function SomeComponent({ count }) {
  return (
    <p>
      1 plus {count()} equals {1 + count()}
    </p>
  )
}

export function Optimization() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <p>Example {count}</p>
        <button onClick={() => setCount((s) => s + 1)}>Count</button>
        <ErrorBoundaryRCC>
          {/* <SomeComponent count={5} /> */}
          <SomeComponent count={() => 5} />
        </ErrorBoundaryRCC>
        <ErrorBoundaryRFC>
          {/* <SomeComponent count={5} /> */}
          <SomeComponent count={() => 5} />
        </ErrorBoundaryRFC>
      </header>
    </div>
  )
}
