import { useAuth } from "../../ContextAPI/context/AuthProvider"

export function Users() {
  // можем достать любые данные о user из useAuth():
  const user = useAuth()
  console.log('####: user', user)

  return (
    <h1>Users</h1>
  )
}
