import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export function PrivateRoure({ children }) {
  const auth = useAuth()
  const location = useLocation()
  console.log('####: location', location)

  if (auth.user === null) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return children
}
