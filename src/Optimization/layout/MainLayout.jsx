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

      <Outlet />
    </>
  )
}
