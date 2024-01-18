import { useReducer, useState } from 'react'

// Цель урока — получить представление о всех самых важных хуках React и понять, в каких задачах они могут быть полезны.
// В данном уроке вы узнаете о множестве полезных хуков, таких как:

// useReducer(),
// useLayoutEffect(),
// useRef(),
// useMemo(),
// useCallback(),
// useTransition(),
// useDeferredValue(),
// useState(),
// useEffect().

// //! useState()
// const ARR = [1, 2, 3, 4, 5]

// export default function Hooks() {
//   // const [value, setValue] = useState(ARR.length)
//   const [value, setValue] = useState(() => {
//     if (ARR.length > 0) {
//       return ARR.reduce((acc, item) => acc + item)
//     }
//     return 0
//   })
//   const [count, setCount] = useState(0)

//   const handleMinusTwoNumClick = () => {
//     setCount((prevState) => prevState - 1)
//     setCount((prevState) => prevState - 1)
//   }

//   const handlePlusTwoNumClick = () => {
//     setCount((prevState) => prevState + 1)
//     setCount((prevState) => prevState + 1)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="App-arr">Сумма чисел массива ARR: {value}</div>
//         <div className="App-counter">{count}</div>
//         <div className="App-wrap">
//           <button className="App-button" onClick={handleMinusTwoNumClick}>
//             -
//           </button>
//           <button className="App-button" onClick={handlePlusTwoNumClick}>
//             +
//           </button>
//         </div>
//       </header>
//     </div>
//   )
// }

//! useReducer()
const initState = {
  count: 0,
  name: 'Egor',
}

const reducer = (state, action) => {
  console.log('####: state', state)
  console.log('####: action', action)

  switch (action.type) {
    case 'DESC':
      return {
        ...state,
        count: state.count - action.payload,
      }
    case 'INC':
      return {
        ...state,
        count: state.count + action.payload,
      }
    case 'RESET':
      return {
        ...state,
        count: initState.count,
        name: initState.name,
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload,
      }
    default:
      throw new Error()
  }
}

export default function Hooks() {
  const [state, dispatch] = useReducer(reducer, initState)
  console.log('####: state', state)

  const handleMinusClick = () => {
    dispatch({
      type: 'DESC',
      payload: 10,
    })
  }

  const handlePlusClick = () => {
    dispatch({
      type: 'INC',
      payload: 5,
    })
  }

  const handleResetClick = () => {
    dispatch({
      type: 'RESET',
    })
  }

  const handleNameClick = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: 'VITALY',
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-counter">{state.count}</div>
        <div className="App-wrap">
          <button className="App-button" onClick={handleMinusClick}>
            -
          </button>
          <button
            className="App-button"
            style={{ width: '150px' }}
            onClick={handleResetClick}
          >
            Reset
          </button>
          <button className="App-button" onClick={handlePlusClick}>
            +
          </button>
        </div>
        <button
          className="App-button"
          style={{ width: '170px' }}
          onClick={handleNameClick}
        >
          {state.name}
        </button>
      </header>
    </div>
  )
}
