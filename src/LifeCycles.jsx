import React, { useEffect, useState } from 'react'
import ClassComponentLifecycleMethods from './assets/classComponentLifecycleMethods.jpg'
import RenderFunctionalComponent from './assets/renderFunctionalComponent.jpg'
import './App.css'
import Example from './components/Modal'

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

// export default function LifeCycles() {
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

// export default function LifeCycles() {
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
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('#### №1: constructor')
//     this.state = {
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//     }
//   }

//   render() {
//     console.log('#### №2: render')
//     return (
//       <>
//         <div>Дата: {this.state.date}</div>
//         <div>Время: {this.state.time}</div>
//       </>
//     )
//   }

//   componentDidMount() {
//     console.log('#### №3: componentDidMount')
//     this.interval = setInterval(() => {
//       this.setState({
//         time: new Date().toLocaleTimeString(),
//       })
//       console.log(this.state.date, this.state.time)
//     }, 1000)
//   }

//   componentWillUnmount() {
//     console.log('#### END: componentWillUnmount')
//     clearInterval(this.interval)
//   }
// }

// export default function LifeCycles() {
//   const [clock, setClock] = useState(true)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {clock && <Clock />}
//         <button onClick={() => setClock(!clock)}>Show/hide Clock</button>
//       </header>
//     </div>
//   )
// }

//! Методы жизненного цикла классового компонента
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     console.log('#### №1: constructor')
//     this.state = {
//       date: new Date().toLocaleDateString(),
//       time: new Date().toLocaleTimeString(),
//     }
//   }

//   render() {
//     console.log('#### №2: render')
//     return (
//       <>
//         <div>Дата: {this.state.date}</div>
//         <div>Время: {this.state.time}</div>
//       </>
//     )
//   }

//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     console.log('#### №4: shouldComponentUpdate old State', this.state)
//     console.log('#### №4: shouldComponentUpdate new State', nextState)
//     return true // shouldComponentUpdate принимает решение стоит ли обновлять наш компонент, в данном случае стоит, так как true
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('#### №5: componentDidUpdate', this.state)

//   }

//   componentDidMount() {
//     console.log('#### №3: componentDidMount')
//     this.interval = setInterval(() => {
//       this.setState({
//         time: new Date().toLocaleTimeString(),
//       })
//       console.log(this.state.date, this.state.time)
//     }, 1000)
//   }

//   componentWillUnmount() {
//     console.log('#### END: componentWillUnmount')
//     clearInterval(this.interval)
//   }
// }

// export default function LifeCycles() {
//   const [clock, setClock] = useState(true)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {clock && <Clock />}
//         <button onClick={() => setClock(!clock)}>Show/hide Clock</button>
//         <div>-</div>
//         <img
//           className="Class-component-logo"
//           src={ClassComponentLifecycleMethods}
//           alt="ClassComponentLifecycleMethods"
//         />
//       </header>
//     </div>
//   )
// }

//! Жизненные фазы функционального компонента
// function Clock() {
//   const [date, setDate] = useState(new Date().toLocaleDateString())
//   const [time, setTime] = useState(new Date().toLocaleTimeString())

//   useEffect(() => {
//     console.log('#### №2: componentDidMount')
//     const interval = setInterval(() => {
//       setDate(new Date().toLocaleDateString())
//       setTime(new Date().toLocaleTimeString())
//       console.log('####: date', date, 'time', time)
//     }, 1000)

//     return () => {
//       console.log('#### END: componentWillUnmount')
//       clearInterval(interval)
//     }
//   }, [date, time])

//   console.log('#### №1: render')
//   return (
//     <>
//       <div>Дата: {date}</div>
//       <div>Время: {time}</div>
//     </>
//   )
// }
// export default function LifeCycles() {
//   const [clock, setClock] = useState(true)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {clock && <Clock />}
//         <button onClick={() => setClock(!clock)}>Show/hide Clock</button>
//         <div>-</div>
//       </header>
//     </div>
//   )
// }

//! Рендер функционального компонента
// function Clock() {
//   const [time, setTime] = useState(new Date().toLocaleTimeString())

//   let name = 'Egor'
//   console.log('## RENDER ##: name', name)

//   useEffect(() => {
//     console.log('#### №2: componentDidMount')
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleTimeString())
//       console.log('## USE EFFECT ##: name', name)
//       name = Date.now()
//       // console.log('## USE EFFECT ##: time', time)
//       console.log('## USE EFFECT ##: name', name)
//     }, 1000)

//     return () => {
//       console.log('#### END: componentWillUnmount')
//       clearInterval(interval)
//     }
//   }, [time])

//   console.log('#### №1: render')
//   return (
//     <>
//       <div>Сейчас: {time}</div>
//     </>
//   )
// }
// export default function LifeCycles() {
//   const [clock, setClock] = useState(true)
//   return (
//     <div className="App">
//       <header className="App-header">
//         {clock && <Clock />}
//         <button onClick={() => setClock(!clock)}>Show/hide Clock</button>
//         <div>-</div>
//         <img
//           className="Class-component-logo"
//           src={RenderFunctionalComponent}
//           alt="RenderFunctionalComponent"
//         />
//       </header>
//     </div>
//   )
// }

//! Условный рендеринг
// //! Тернарный оператор:
// function Greeting() {
//   return <div>Привет!</div>
// }

// function Bye() {
//   return <div>Пока!</div>
// }

// export default function LifeCycles() {
//   const [isShow, setIsShow] = useState(true)

//   return (
//     <div className="App">
//       <header className="App-header">
//         {isShow ? <Greeting /> : <Bye />}
//         <button onClick={() => setIsShow((s) => !s)}>Click</button>
//       </header>
//     </div>
//   )
// }

// //! Оператор && (И):
// function Greeting() {
//   return <div>Привет!</div>
// }

// function Bye() {
//   return <div>Пока!</div>
// }

// export default function LifeCycles() {
//   const [isShow, setIsShow] = useState(false)
//   // const [isShow, setIsShow] = useState(true)

//   return (
//     <div className="App">
//       <header className="App-header">
//         {isShow && <Greeting/>}
//         <button onClick={() => setIsShow((s) => !s)}>Click</button>
//       </header>
//     </div>
//   )
// }

// //! Сохраняя в переменную jsx код:
// function Greeting() {
//   return <div>Привет!</div>
// }

// function Bye() {
//   return <div>Пока!</div>
// }

// export default function LifeCycles() {
//   const [isShow, setIsShow] = useState(false)
//   // const [isShow, setIsShow] = useState(true)

//   let component
//   if (isShow) {
//     component = <Greeting />
//   } else {
//     component = <Bye />
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {component}
//         <button onClick={() => setIsShow((s) => !s)}>Click</button>
//       </header>
//     </div>
//   )
// }

// //! Сохраняя в переменную Компоненты:
// function Greeting() {
//   return <div>Привет!</div>
// }

// function Bye() {
//   return <div>Пока!</div>
// }

// export default function LifeCycles() {
//   const [isShow, setIsShow] = useState(true)

//   let Сomponent
//   if (isShow) {
//     Сomponent = Greeting
//   } else {
//     Сomponent = Bye
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Сomponent {...props}/> */}
//         <Сomponent />
//         <button onClick={() => setIsShow((s) => !s)}>Click</button>
//       </header>
//     </div>
//   )
// }

// //! Подменяя контент:
function Greeting() {
  return <div>Привет!</div>
}

function Bye() {
  return <div>Пока!</div>
}

export default function LifeCycles() {
  const [isShow, setIsShow] = useState(false)

  if (isShow) {
    return <Greeting />
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => setIsShow((s) => !s)}>Click</button>
      </header>
    </div>
  )
}

//! Используя конструкцию switch case:
// function Greeting() {
//   return <div>Привет!</div>
// }

// function Bye() {
//   return <div>Пока!</div>
// }

// export default function LifeCycles() {
//   const [isShow, setIsShow] = useState(undefined)

//   switch (isShow) {
//     case true:
//       return (
//         <>
//           <button onClick={() => setIsShow((s) => !s)}>Click</button>
//           <Greeting />
//         </>
//       )
//     case false:
//       return (
//         <>
//           <button onClick={() => setIsShow((s) => !s)}>Click</button>
//           <Bye />
//         </>
//       )

//     default:
//       return (
//         <div className="App">
//           <header className="App-header">
//             <button onClick={() => setIsShow((s) => !s)}>Click</button>
//           </header>
//         </div>
//       )
//   }
// }

//! Модальное окно библиотекой HeadlessUI
// export default function LifeCycles() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Example />
//       </header>
//     </div>
//   )
// }

