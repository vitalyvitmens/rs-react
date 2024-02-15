// //! 1. Динамический импорт
// //! 2. lazy() и Suspense
// import { useState } from 'react'
// import { Admin } from '../components/Admin'

// export function Home() {
//   const [admin, setAdmin] = useState(false)

//   return (
//     <>
//       <h1>Home</h1>
//       <button
//         onClick={() =>
//           import('../utils/sum').then((module) => {
//             alert(module.sum(2, 2))
//           })
//         }
//       >
//         Plus 2 + 2
//       </button>
//       <button onClick={() => setAdmin((s) => !s)}>Toggle Admin</button>
//       {admin ? <Admin /> : <h2>Not Admin</h2>}
//     </>
//   )
// }

// //! 3. Lazy loading и useTransition()
// import { lazy, useState, Suspense, useTransition } from 'react'

// const Admin = lazy(() =>
//   import('../components/Admin').then((module) => ({ default: module.Admin }))
// )

// export function Home() {
//   const [admin, setAdmin] = useState(false)
//   const [isPending, startTransition] = useTransition()

//   return (
//     <>
//       <h1>Home</h1>
//       <button
//         onClick={() =>
//           import('../utils/sum').then((module) => {
//             alert(module.sum(2, 2))
//           })
//         }
//       >
//         Plus 2 + 2
//       </button>
//       <button disabled={isPending} onClick={() => startTransition(() => setAdmin((s) => !s))}>
//         Toggle Admin
//       </button>
//       {isPending && 'Loading...'}
//       <Suspense>
//         {/* <Suspense fallback="Loading..."> */}
//         {admin ? <Admin /> : <h2>Not Admin</h2>}
//       </Suspense>
//     </>
//   )
// }

//! 4. Создание динамических компонентов
import { useEffect, useState, useTransition } from 'react'
import { Component } from '../components/Component'

export function Home() {
  const [admin, setAdmin] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [render, setRender] = useState([])

  const generateComponent = () => {
    const componentNumber1 = Math.floor(Math.random() * 4) + 1
    const componentNumber2 = Math.floor(Math.random() * 4) + 1

    setRender([`Admin${componentNumber1}`, `Admin${componentNumber2}`])
  }

  useEffect(() => {
    setTimeout(() => {
      generateComponent()
    }, 5000)
  }, [])

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
      <button
        disabled={isPending}
        onClick={() =>
          startTransition(() => {
            setAdmin((s) => !s)
            generateComponent()
          })
        }
      >
        Toggle Admin
      </button>
      {isPending && 'Loading...'}
      {admin ? <Component name="Admin" /> : <h2>Not Admin</h2>}
      {render.map((item, idx) => (
        <Component key={idx} name={item} />
      ))}
    </>
  )
}
