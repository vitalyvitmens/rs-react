import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  const signIn = (newUser, callback) => {
    setUser(newUser)
    callback()
  }

  const signOut = (callback) => {
    setUser(null)
    callback()
  }

  const value = {
    user,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
    )
  }
