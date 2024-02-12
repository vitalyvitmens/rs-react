import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'

export function AuthStatus() {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSignout = () => {
    auth.signout(() => {
      navigate('/')
    })
  }

  if (auth.user === null) {
    return (
      <div style={{ color: 'red', fontSize: '2rem', fontWeight: 'bold' }}>
        You are not logged in
      </div>
    )
  }

  return (
    <div>
      Welcom user <span style={{ fontWeight: 'bold' }}>{auth.user}</span>{' '}
      <button onClick={handleSignout}>Sign Out</button>
    </div>
  )
}
