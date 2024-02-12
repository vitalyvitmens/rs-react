//! Context API
import { useRef, useState, createContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import contextAPIImg from '../assets/ContextAPI.jpg'
import { FunctionComponent } from './FunctionComponent'
import { ThemeProvider, useThemeUpdate } from './context/ThemeProvider'
import { MainLayout } from '../Router/layout/MainLayout'
import { Home } from '../Router/pages/Home'
import { About } from '../Router/pages/About'
import { Users } from '../Router/pages/Users'
import { AuthProvider } from './context/AuthProvider'

// //! Введение в Context API
// export default function ContextAPI() {
//   return (
//     <div className="App">
//       <img src={contextAPIImg} alt={contextAPIImg} />
//     </div>
//   )
// }

// //! Provider и useContext() - дополнительно смотри файл src\ContextAPI\FunctionComponent.jsx
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

// //! Передача событий в Context - дополнительно смотри файл src\ContextAPI\FunctionComponent.jsx
// export const ThemeContext = createContext()

// export default function ContextAPI() {
//   const [dark, setDark] = useState(false)

//   const handleChangeDark = () => setDark((s) => !s)

//   return (
//     <ThemeContext.Provider
//       value={{
//         dark,
//         changeTheme: () => setDark((s) => !s),
//       }}
//     >
//       <div className="App">
//         <header className="App-header">
//           <button onClick={handleChangeDark}>Change Theme</button>
//           <FunctionComponent />
//           <br />
//           <FunctionComponent />
//           <br />
//           <FunctionComponent />
//         </header>
//       </div>
//     </ThemeContext.Provider>
//   )
// }

// //! Оптимизируем использование контекста - дополнительно смотри файл src\ContextAPI\FunctionComponent.jsx и src\ContextAPI\context\ThemeProvider.js
// export default function ContextAPI() {
//   return (
//     <>
//       <ThemeProvider>
//         <HomeContext />
//       </ThemeProvider>
//       <ThemeProvider>
//         <AboutContext />
//       </ThemeProvider>
//     </>
//   )
// }

// function HomeContext() {
//   const handleChangeDark = useThemeUpdate()

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Home</h1>
//         <button onClick={handleChangeDark}>Change Theme</button>
//         <FunctionComponent />
//       </header>
//     </div>
//   )
// }

// function AboutContext() {
//   const handleChangeDark = useThemeUpdate()

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>About</h1>
//         <button onClick={handleChangeDark}>Change Theme</button>
//         <FunctionComponent />
//       </header>
//     </div>
//   )
// }

// //! PrivateRoute с использованием Context API, часть 1 - дополнительно смотри файл src\ContextAPI\context\AuthProvider.js и src\Router\layout\MainLayout.js
export const ThemeContext = createContext()

export default function ContextAPI() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
