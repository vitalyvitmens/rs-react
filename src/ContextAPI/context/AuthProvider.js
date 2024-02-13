import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => localStorage.getItem('user') || null)
  console.log('####: user', user)

  const signin = (newUser, callback) => {
    setUser(newUser)
    localStorage.setItem('user', newUser)
    callback()
  }

  const signout = (callback) => {
    setUser(null)
    localStorage.removeItem('user')
    callback()
  }
  const value = {
    // здесь можем хранить любые данные о user:
    user,
    signin,
    signout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
