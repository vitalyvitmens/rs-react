// //! 1. Динамический импорт
// import { NavLink, Outlet } from 'react-router-dom'

// export function MainLayout() {
//   return (
//     <>
//       <ul style={{ display: 'flex', gap: '25px', listStyle: 'none' }}>
//         <li>
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li>
//           <NavLink to="/users">User</NavLink>
//         </li>
//       </ul>

//       <Outlet />
//     </>
//   )
// }

//! 2. lazy() и Suspense
import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export function MainLayout() {
  return (
    <>
      <ul style={{ display: 'flex', gap: '25px', listStyle: 'none' }}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/users">User</NavLink>
        </li>
      </ul>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}
