import { useState } from 'react'

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

//! useState()
const ARR = [1, 2, 3, 4, 5]

export default function Hooks() {
  // const [value, setValue] = useState(ARR.length)
  const [value, setValue] = useState(() => {
    if (ARR.length > 0) {
      return ARR.reduce((acc, item) => acc + item)
    }
    return 0
  })
  const [count, setCount] = useState(0)

  const handleMinusTwoNumClick = () => {
    setCount((prevState) => prevState - 1)
    setCount((prevState) => prevState - 1)
  }

  const handlePlusTwoNumClick = () => {
    setCount((prevState) => prevState + 1)
    setCount((prevState) => prevState + 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-arr">Сумма чисел массива ARR: {value}</div>
        <div className="App-counter">{count}</div>
        <div className="App-wrap">
          <button className="App-button" onClick={handleMinusTwoNumClick}>
            -
          </button>
          <button className="App-button" onClick={handlePlusTwoNumClick}>
            +
          </button>
        </div>
      </header>
    </div>
  )
}
