import { useState } from 'react'

// //! Работа с полями ввода. Начало.
// export default function Forms() {
//   const [value, setValue] = useState('')

//   const handleChange = (e) => {
//     console.dir(e.target)
//     console.log(e.target.value)
//     setValue(e.target.value)
//   }

//   const handleSubmit = () => {
//     alert(value)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input type="text" onChange={handleChange} />
//         <button onClick={handleSubmit}>Submit</button>
//       </header>
//     </div>
//   )
// }

//! Множественные поля ввода
export default function Forms() {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    console.dir(e.target)
    console.log(e.target.value)
    setValue(e.target.value)
  }

  const handleSubmit = () => {
    alert(value)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={handleChange} />
        <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  )
}
