import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export function NotFound() {
  const navigate = useNavigate()
  // const isUser = false

  useEffect(() => {
    setTimeout(() => {
      // navigate('/')
      navigate(-1)
    }, 1000)
  }, [navigate])

  // if (!isUser) {
  //   return <Navigate to="/" />
  // }

  return <h1>NotFound</h1>
}
