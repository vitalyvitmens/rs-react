//! Context API
import { useRef, useState } from 'react'
import contextAPIImg from '../assets/ContextAPI.jpg'

// //! Введение в Context API
// export default function ContextAPI() {
//   return (
//     <div className="App">
//       <img src={contextAPIImg} alt={contextAPIImg} />
//     </div>
//   )
// }

//! Provider и useContext()
export default function ContextAPI() {
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
