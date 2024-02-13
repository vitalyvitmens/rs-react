import React from 'react'
import { useAuth } from '../../ContextAPI/context/AuthProvider'
import { useNavigate, useLocation } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  console.log('####: location', location)
  console.log('####: auth', auth)

  const from = location.state?.from || '/'

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')

    console.log('####: formData', formData)
    console.log('####: user', username)
    auth.signin(username, () => {
      navigate(from, {
        replace: true,
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input type="text" name="username" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}
