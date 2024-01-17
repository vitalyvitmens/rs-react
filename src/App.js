import './App.css'
import React, { useState } from 'react'

//! Коллекции и ключи
// const FIELDS = [
//   {
//     id: '123',
//     title: 'Name',
//   },
//   {
//     id: '213',
//     title: 'LastName',
//   },
// ]

// function Item({ name }) {
//   return (
//     <div>
//       <span>{name}</span>
//       <input type="text" />
//     </div>
//   )
// }

// export default function App() {
//   const [items, setItems] = useState(FIELDS)

//   const handleClick = () => {
//     setItems([{ id: '323', title: 'New Field' }, ...items])
//     // setItems([items.length, ...items])
//     // setItems([...items, items.length])
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         {items.map((item, index) => (
//           <Item key={item.id} name={item.title} />
//         ))}
//         <button onClick={handleClick}>Add</button>
//       </header>
//     </div>
//   )
// }

//! Иммутабельные переменные
// const card = {
//   name: 'Vitaly',
//   color: {
//     r: 256,
//     g: 23,
//     b: 45,
//   },
// }

// const changeName = (obj) => {
//   // const copyObj = { ...obj } // не может скопировать вложенность, только верхнеуровневое копирование
//   // const copyObj = Object.assign({}, obj) // не может скопировать вложенность, только верхнеуровневое копирование
//   const copyObj = JSON.parse(JSON.stringify(obj)) // не может скопировать функции, Symbol и тяжёлая операция, не можем ссылаться сами на себя
//   //! Для вложенного копирования объектов используй функцию cloneDeep() из библиотеки Lodash
//   copyObj.name = 'Egor'
//   return copyObj
// }

// const card2 = changeName(card)

// console.log(card)
// console.log(card2)
// console.log(card === card2)

// console.log(card.color)
// console.log(card2.color)
// console.log(card.color === card2.color)

// const CARDS = [
//   {
//     id: 8721,
//     name: 'Egor',
//     like: false,
//   },
//   {
//     id: 5261,
//     name: 'Vitaly',
//     like: false,
//   },
//   {
//     id: 8764,
//     name: 'Tolia',
//     like: false,
//   },
//   {
//     id: 2352,
//     name: 'Sveta',
//     like: false,
//   },
// ]

// function Card({ name, isLike, onClick }) {
//   return (
//     <div>
//       <p>{name}</p>
//       <button onClick={onClick}>{isLike ? 'Unlike' : 'Like'}</button>
//     </div>
//   )
// }

// export default function App() {
//   const [cards, setCards] = useState(CARDS)

//   const handleLikeClick = (id) => {
//     console.log('####: id', id)
//     const cardCopy = cards.map((item) => {
//       const copyItem = { ...item }
//       if (item.id === id) {
//         copyItem.like = !item.like
//       }
//       return copyItem
//     })
//     console.log('####: cards', cards)
//     setCards(cardCopy)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="App-grid">
//           {cards.map((item) => (
//             <Card
//               key={item.id}
//               name={item.name}
//               isLike={item.like}
//               onClick={() => handleLikeClick(item.id)}
//             />
//           ))}
//         </div>
//       </header>
//     </div>
//   )
// }

//! Жизненный цикл компонента
class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('#### №1: constructor')
    this.state = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    }
  }

  render() {
    console.log('#### №2: render')
    return (
      <>
        <div>Дата: {this.state.date}</div>
        <div>Время: {this.state.time}</div>
      </>
    )
  }

  componentDidMount() {
    console.log('#### №3: componentDidMount')
    this.interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
      console.log(this.state.date, this.state.time)
    }, 1000)
  }

  componentWillUnmount() {
    console.log('#### END: componentWillUnmount')
    clearInterval(this.interval)
  }
}

export default function App() {
  const [clock, setClock] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        {clock && <Clock />}
        <button onClick={() => setClock(!clock)}>Show/hide Clock</button>
      </header>
    </div>
  )
}
