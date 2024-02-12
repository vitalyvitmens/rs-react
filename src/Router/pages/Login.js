import React from 'react'
import { useAuth } from '../../ContextAPI/context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const username = formData.get('username')

    console.log('####: user', username)
    auth.signin(username, () => {
      navigate('/')
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
