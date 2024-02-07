import { useEffect } from 'react'
import { Navigate, useNavigate, useLocation } from 'react-router-dom'

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

// //! Раскомментируй для работы раздела useLocation()
// export function NotFound() {
//   const navigate = useNavigate()
//   const location = useLocation()

//   useEffect(() => {
//     setTimeout(() => {
//       navigate('/', {
//         state: location.pathname,
//       })
//     }, 1000)
//   }, [location.pathname, navigate])

//   return <h1>NotFound</h1>
// }
