import { useState } from 'react'

export function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue)

  function push(element) {
    setArray((prevState) => [...prevState, element])
  }

  function update(index, newElement) {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      newElement,
      ...prevState.slice(index + 1, prevState.length),
    ])
  }

  function clear() {
    setArray([])
  }

  function remove(index) {
    setArray((prevState) => [
      ...prevState.slice(0, index),
      ...prevState.slice(index + 1, prevState.length),
    ])
  }

  function filter(callback) {
    setArray((prevState) => prevState.filter(callback))
  }

  function sort(callback) {
    setArray((prevState) => [...prevState].sort(callback))
  }

  return [array, { push, update, clear, remove, filter, sort }]
}
