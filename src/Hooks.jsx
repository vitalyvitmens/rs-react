import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react'

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

// //! useReducer()
// const initState = {
//   count: 0,
//   name: 'Egor',
//   isChangeName: false,
// }

// const reducer = (state, action) => {
//   console.log('####: state', state)
//   console.log('####: action', action)

//   switch (action.type) {
//     case 'DESC':
//       return {
//         ...state,
//         count: state.count - action.payload,
//       }
//     case 'INC':
//       return {
//         ...state,
//         count: state.count + action.payload,
//       }
//     case 'RESET':
//       return initState
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.payload,
//         isChangeName: !state.isChangeName,
//       }
//     default:
//       throw new Error()
//   }
// }

// export default function Hooks() {
//   const [state, dispatch] = useReducer(reducer, initState)
//   console.log('####: state', state)

//   const handleMinusClick = () => {
//     dispatch({
//       type: 'DESC',
//       payload: 10,
//     })
//   }

//   const handlePlusClick = () => {
//     dispatch({
//       type: 'INC',
//       payload: 5,
//     })
//   }

//   const handleResetClick = () => {
//     dispatch({
//       type: 'RESET',
//     })
//   }

//   const handleNameClick = () => {
//     dispatch({
//       type: 'CHANGE_NAME',
//       payload: 'VITALY',
//     })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="App-counter">{state.count}</div>
//         <div className="App-wrap">
//           <button className="App-button" onClick={handleMinusClick}>
//             -
//           </button>
//           <button
//             className="App-button"
//             style={{ width: '150px' }}
//             onClick={handleResetClick}
//           >
//             Reset
//           </button>
//           <button className="App-button" onClick={handlePlusClick}>
//             +
//           </button>
//         </div>
//         <button
//           className="App-button"
//           style={{ width: '170px' }}
//           onClick={handleNameClick}
//         >
//           {state.name}
//         </button>
//         <div className={state.isChangeName ? 'green' : 'red'}>
//           state.isChangeName: {state.isChangeName ? 'true' : 'false'}
//         </div>
//       </header>
//     </div>
//   )
// }

// //! useEffect() - отрабатывает после того как дом дерево показано в браузере
// //! useEffect отрабатывает после того, когда дом дерево уже сформировано, он уже показал его на экране и готов применить к нему какой то side effect, это очень важное отличие useEffect от componentDidMount - который готов показать jsx код в дом дереве, но еще не показал, а вот useEffect он уже показывает это в дом дереве
// function Hooks3() {
//   useEffect(() => {
//     console.log('## Hooks3 ##: componentDidMount')

//     return () => {
//       console.log('## Hooks3 ##: componentWillUnmount')
//     }
//   }, [])

//   return <h1>This is Title Hooks3!</h1>
// }

// function Hooks2() {
//   useEffect(() => {
//     console.log('## Hooks2 ##: componentDidMount')

//     return () => {
//       console.log('## Hooks2 ##: componentWillUnmount')
//     }
//   }, [])

//   return (
//     <>
//       <h1>This is Title Hooks2!</h1>
//       <Hooks3 />
//     </>
//   )
// }

// export default function Hooks() {
//   const [count, setCount] = useState(0)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     console.log('## Hooks ##: componentDidMount')
//   }, [])

//   useEffect(() => {
//     console.log('## Hooks ##: componentWillUpdate')
//   })

//   useEffect(() => {
//     console.log('## Hooks ##: subscribe count')

//     return () => {
//       console.log('## Hooks ##: unsubscribe count')
//     }
//   }, [count])

//   // useEffect(() => {
//   //   console.log('####: visible is changed')
//   // }, [visible])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <div>
//           <button onClick={() => setCount((s) => s + 1)}>Click</button>
//           <button onClick={() => setVisible((s) => !s)}>Hide</button>
//         </div>
//         {visible && <Hooks2 />}
//         {/* <Hooks2 /> */}
//         {/* <Hooks3 /> */}
//       </header>
//     </div>
//   )
// }

// //! useLayoutEffect() - работает до того как дом дерево показано в браузере
// function Hooks2() {
//   useEffect(() => {
//     console.log('## Hooks2 ##: componentDidMount')

//     return () => {
//       console.log('## Hooks2 ##: componentWillUnmount')
//     }
//   }, [])

//   return (
//     <>
//       <p>SHOW BOX</p>
//       <h1>Some Title!</h1>
//     </>
//   )
// }

// export default function Hooks() {
//   const [visible, setVisible] = useState(false)

//   useLayoutEffect(() => {
//     if (!visible) {
//       return
//     }

//     const btnEl = document.getElementById('btn')
//     const { bottom } = btnEl.getBoundingClientRect()
//     const boxEl = document.getElementById('box')
//     boxEl.style.top = `${bottom + 25}px`
//   }, [visible])

//   useEffect(() => {
//     console.log('####: useEffect 1')
//   }, [])

//   useLayoutEffect(() => {
//     console.log('####: useLayoutEffect 1')
//   }, [])

//   useEffect(() => {
//     console.log('####: useEffect 2')
//   }, [])

//   useLayoutEffect(() => {
//     console.log('####: useLayoutEffect 2')
//   }, [])

//   const style = {
//     background: 'black',
//     position: 'relative',
//     top: '10px',
//     padding: '5px 20px',
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <button id="btn" onClick={() => setVisible((s) => !s)}>
//             {visible ? 'Hide' : 'Show'}
//           </button>
//         </div>
//         {visible && (
//           <div style={style} id="box">
//             <Hooks2 />
//           </div>
//         )}
//       </header>
//     </div>
//   )
// }

// const arr = [1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9]

// const withoutRepeat = (array) =>
//   array.filter(
//     (i) =>
//       array.reduce((acc, i) => ((acc[i] = (acc[i] || 0) + 1), acc), {})[i] === 1
//   )

// console.log(withoutRepeat(arr)) // [2, 3, 5, 8, 9]

// const withoutRepeat2 = (array) => {
//   const freq = {}
//   array.map((i) => (freq[i] ? freq[i]++ : (freq[i] = 1)))

//   return array.filter((i) => freq[i] === 1)
// }

// console.log(withoutRepeat2(arr)) // [2, 3, 5, 8, 9]

// //! useRef() - рендерится только при рендере компонента
//! Часть №1
// export default function Hooks() {
//   // const ref = useRef(null)
//   // const ref = useRef('Egor')
//   // const ref = useRef({ count: 1 })
//   // const ref = useRef(true)
//   const [count, setCount] = useState(0)
//   const countRef = useRef(0)
//   console.log('####: countRef', countRef)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Count state: {count}</p>
//         <p>Count ref {countRef.current}:</p>
//         <button onClick={() => setCount((p) => p + 1)}>Click Count</button>
//         <button onClick={() => (countRef.current = countRef.current + 1)}>
//           Click Count Ref
//         </button>
//       </header>
//     </div>
//   )
// }

// //! useRef() - рендерится только при рендере компонента
// //! Часть №2
// export default function Hooks() {
//   const ref = useRef(null)
//   console.log('####: ref', ref)

//   const style = {
//     padding: '12px',
//     background: 'red',
//   }

//   const handleClick = () => {
//     if (ref.current !== null) {
//       ref.current.style.width = `${ref.current.offsetWidth * 1.05}px`
//     }
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           <button onClick={handleClick}>Click</button>
//         </div>
//         <div ref={ref} style={style}>
//           Box
//         </div>
//       </header>
//     </div>
//   )
// }

//! useMemo() - используется для мемоизации значений, которые зависят от других значений, и возвращает их только при изменении этих зависимостей. Это позволяет избежать лишних вычислений и оптимизировать производительность компонентов React.
export default function Hooks() {
  const [number, setNumber] = useState(0)
  const [dark, SetDark] = useState(true)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  const themeDark = useMemo(() => ({
    backgroundColor: dark ? '#282c34' : 'white',
    color: dark ? 'white' : '#282c34',
  }), [dark])

  useEffect(() => {
    console.log('####: Change Theme Dark Constant')
  }, [themeDark])

  return (
    <div className="App">
      <header className="App-header" style={themeDark}>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => SetDark((s) => !s)}>Change Theme</button>
        <div>{doubleNumber}</div>
      </header>
    </div>
  )

  function slowFunction(number) {
    const start = new Date().getTime()
    let end = start

    while (end < start + 500) {
      end = new Date().getTime()
    }

    return number * 2
  }
}
