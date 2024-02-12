import { NavLink, Outlet } from 'react-router-dom'
import { AuthStatus } from '../../ContextAPI/components/AuthStatus'

export function MainLayout() {
  return (
    <>
      <AuthStatus />
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
      </ul>

      <Outlet />
    </>
  )
}
