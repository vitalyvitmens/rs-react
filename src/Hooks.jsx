import { useEffect, useReducer, useState } from 'react'

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

// //! useEffect()
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

//! useLayoutEffect()
function Hooks2() {
  useEffect(() => {
    console.log('## Hooks2 ##: componentDidMount')

    return () => {
      console.log('## Hooks2 ##: componentWillUnmount')
    }
  }, [])

  return (
    <>
      <h1>This is Title Hooks2!</h1>
    </>
  )
}

export default function Hooks() {
  const [visible, setVisible] = useState(false)

  const style = {
    background: 'black',
    position: 'relative',
    top: '10px',
    padding: '5px 20px',
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setVisible((s) => !s)}>
            {visible ? 'Hide' : 'Show'}
          </button>
        </div>
        {visible && (
          <div style={style} id="box">
            <Hooks2 />
          </div>
        )}
      </header>
    </div>
  )
}
