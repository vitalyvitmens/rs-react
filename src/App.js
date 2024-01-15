import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

const FIELDS = [
  {
    id: '123',
    title: 'Name',
  },
  {
    id: '213',
    title: 'LastName',
  },
]

function Item({ name }) {
  return (
    <div>
      <span>{name}</span>
      <input type="text" />
    </div>
  )
}

function App() {
  const [items, setItems] = useState(FIELDS)

  const handleClick = () => {
    setItems([{ id: '323', title: 'New Field' }, ...items])
    // setItems([items.length, ...items])
    // setItems([...items, items.length])
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {items.map((item, index) => (
          <Item key={item.id} name={item.title} />
        ))}
        <button onClick={handleClick}>Add</button>
      </header>
    </div>
  )
}

export default App
