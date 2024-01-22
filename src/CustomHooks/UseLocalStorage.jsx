import { useState, useEffect } from 'react'

function getValueStorage(key, initialState) {
  const saveValue = JSON.parse(localStorage.getItem(key))

  return saveValue
    ? saveValue
    : initialState instanceof Function
    ? initialState()
    : initialState
}

export function UseLocalStorage(key, initialState) {
  const [value, setValue] = useState(() => getValueStorage(key, initialState))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
