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

//! 3. Lazy loading и useTransition() 
import { lazy, useState, Suspense, useTransition } from 'react'

const Admin = lazy(() =>
  import('../components/Admin').then((module) => ({ default: module.Admin }))
)

export function Home() {
  const [admin, setAdmin] = useState(false)
  const [isPending, startTransition] = useTransition()

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
      <button disabled={isPending} onClick={() => startTransition(() => setAdmin((s) => !s))}>
        Toggle Admin
      </button>
      {isPending && 'Loading...'}
      <Suspense>
        {/* <Suspense fallback="Loading..."> */}
        {admin ? <Admin /> : <h2>Not Admin</h2>}
      </Suspense>
    </>
  )
}
