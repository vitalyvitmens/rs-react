import { useRef, useState } from 'react'

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

// //! Контролируемые поля ввода
// export default function Forms() {
//   const [inputs, setInputs] = useState({
//     lastname: '',
//     name: '',
//     middlename: '',
//   })

//   const handleChange = (e) => {
//     if (e.target.value.includes('q')) {
//       setInputs((prevState) => ({
//         ...prevState,
//         [e.target.name]: prevState[e.target.name] + '-',
//       }))
//     } else {
//       setInputs((prevState) => ({
//         ...prevState,
//         [e.target.name]: e.target.value,
//       }))
//     }
//   }

//   const handleSubmit = () => {
//     console.log('####:', inputs)
//     setInputs({
//       lastname: '',
//       name: '',
//       middlename: '',
//     })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           value={inputs.lastname}
//           type="text"
//           name="lastname"
//           placeholder="Фамилия"
//           onChange={handleChange}
//         />
//         <input
//           value={inputs.name}
//           type="text"
//           placeholder="Имя"
//           name="name"
//           onChange={handleChange}
//         />
//         <input
//           value={inputs.middlename}
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

// //! Лайфхак для неконтролируемых полей ввода
// export default function Forms() {
//   console.log('####: render')
//   const inputs = useRef({
//     lastname: '',
//     name: '',
//     middlename: '',
//   })

//   const handleChange = (e) => {
//     inputs.current = {
//       ...inputs.current,
//       [e.target.name]: e.target.value,
//     }
//   }

//   const handleSubmit = () => {
//     console.log('####:', inputs.current)
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

// //! Работа с формой
// export default function Forms() {
//   const [inputs, setInputs] = useState({
//     lastname: '',
//     name: '',
//     middlename: '',
//   })

//   const handleChange = (e) => {
//     // console.log('####: event', e)
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('####: submit', inputs)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form onChange={handleChange} onSubmit={handleSubmit}>
//           <input type="text" name="lastname" placeholder="Фамилия" />
//           <input type="text" placeholder="Имя" name="name" />
//           <input type="text" name="middlename" placeholder="Отчество" />
//           <button type="submit">Submit</button>
//         </form>
//       </header>
//     </div>
//   )
// }

// //! Сброс полей ввода в форме
// export default function Forms() {
//   const formRef = useRef(null)
//   const [inputs, setInputs] = useState({
//     lastname: '',
//     name: '',
//     middlename: '',
//   })

//   const handleChange = (e) => {
//     // console.log('####: event', e)
//     setInputs((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('####: submit', inputs)
//     formRef.current.reset()
//   }

//   const handleReset = () => {
//     console.log('####: reset')
//     setInputs({})
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <form
//           ref={formRef}
//           onChange={handleChange}
//           onSubmit={handleSubmit}
//           onReset={handleReset}
//         >
//           <input type="text" name="lastname" placeholder="Фамилия" />
//           <input type="text" placeholder="Имя" name="name" />
//           <input type="text" name="middlename" placeholder="Отчество" />
//           <button type="submit">Submit</button>
//           <button type="reset">Reset</button>
//         </form>
//       </header>
//     </div>
//   )
// }

//! focus и blur при работе с полями ввода
export default function Forms() {
  const formRef = useRef(null)
  const inputLastnameRef = useRef(null)
  const [inputs, setInputs] = useState({
    lastname: '',
    name: '',
    middlename: '',
  })

  const handleBegin = () => {
    inputLastnameRef.current.focus()
  }

  const handleChange = (e) => {
    // console.log('####: event', e)
    if (e.target.value.includes('q')) {
      inputLastnameRef.current.blur()
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('####: submit', inputs)
    formRef.current.reset()
  }

  const handleReset = () => {
    console.log('####: reset')
    setInputs({})
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleBegin}>Начать заполнять форму</button>
        <form
          ref={formRef}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <input
            ref={inputLastnameRef}
            onFocus={() => console.log('####: onFocus')}
            onBlur={() => console.log('####: onBlur')}
            type="text"
            name="lastname"
            placeholder="Фамилия"
          />
          <input type="text" placeholder="Имя" name="name" />
          <input type="text" name="middlename" placeholder="Отчество" />
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </form>
      </header>
    </div>
  )
}
