import { useContext } from 'react'
import { ThemeContext } from './ContextAPI'

// //! Provider и useContext()
// export function FunctionComponent() {
//   const value = useContext(ThemeContext)
//   console.log('####: value', value)

//   return (
//     <div>
//       <h1>Function Component</h1>
//       <div style={{ color: 'green', fontSize: '3rem', fontWeight: 'bold' }}>
//         <div>Имя: {value.name}</div>
//         <div>Возраст: {value.age}</div>
//       </div>
//     </div>
//   )
// }

//! Передача событий в Context
function getTheme(theme) {
  return {
    background: theme ? '#fff' : '#282c34',
    color: theme ? '#282c34' : '#fff',
  }
}

export function FunctionComponent() {
  const value = useContext(ThemeContext)
  console.log('####: value', value)

  return (
    <div style={getTheme(value.dark)}>
      <h1>Function Component</h1>
      <button onClick={value.changeTheme}>Change Theme</button>
    </div>
  )
}
