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

// //! Множественные поля ввода
// export default function Forms() {
//   const [inputs, setInputs] = useState({
//     lastname: '',
//     name: '',
//     middlename: '',
//   })

//   const handleChange = (e) => {
//     console.dir(e.target)
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleSubmit = () => {
//     console.log('####:', inputs)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           type="text"
//           name="lastname"
//           placeholder="Фамилия"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Имя"
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="middlename"
//           placeholder="Отчество"
//           onChange={handleChange}
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       </header>
//     </div>
//   )
// }

//! Контролируемые поля ввода
export default function Forms() {
  const [inputs, setInputs] = useState({
    lastname: '',
    name: '',
    middlename: '',
  })

  const handleChange = (e) => {
    console.dir(e.target)
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = () => {
    console.log('####:', inputs)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          name="lastname"
          placeholder="Фамилия"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Имя"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="middlename"
          placeholder="Отчество"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  )
}
