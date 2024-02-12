//! Context API
import { useRef, useState, createContext } from 'react'
import contextAPIImg from '../assets/ContextAPI.jpg'
import { FunctionComponent } from './FunctionComponent'

// //! Введение в Context API
// export default function ContextAPI() {
//   return (
//     <div className="App">
//       <img src={contextAPIImg} alt={contextAPIImg} />
//     </div>
//   )
// }

// //! Provider и useContext()
// export const ThemeContext = createContext()

// export default function ContextAPI() {
//   return (
//     <ThemeContext.Provider value={{ name: 'Egor', age: 15 }}>
//       <div className="App">
//         <header className="App-header">
//           <button>Change Theme</button>
//           <FunctionComponent />
//         </header>
//       </div>
//     </ThemeContext.Provider>
//   )
// }

//! Передача событий в Context
export const ThemeContext = createContext()

export default function ContextAPI() {
  return (
    <ThemeContext.Provider value={{ name: 'Egor', age: 15 }}>
      <div className="App">
        <header className="App-header">
          <button>Change Theme</button>
          <FunctionComponent />
        </header>
      </div>
    </ThemeContext.Provider>
  )
}
