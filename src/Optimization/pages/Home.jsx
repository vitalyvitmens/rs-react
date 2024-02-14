import { useState } from 'react'
import { Admin } from '../components/Admin'

//! 1. Динамический импорт
export function Home() {
  const [admin, setAdmin] = useState(false)

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() =>
          import('../utils/sum').then((module) => {
            alert(module.sum(2, 2))
          })
        }
      >
        Plus 2 + 2
      </button>
      <button onClick={() => setAdmin((s) => !s)}>Toggle Admin</button>
      {admin ? <Admin /> : <h2>Not Admin</h2>}
    </>
  )
}
