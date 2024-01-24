import {
  useCallback,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useTransition,
} from 'react'
import { UseLocalStorage } from './useLocalStorage'
import { useUpdateLogger } from './useUpdateLogger'
import { UseToggle } from './useToggle'
import { useTimeout } from './useTimeout'
import { useDebounce } from './useDebounce'
import { useInput } from './useInput'
import { useFetch } from './useFetch'
import { useUpdateEffect } from './useUpdateEffect'
import { useArray } from './useArray'

// Цель урока — научиться создавать и использовать пользовательские (кастомные) хуки в React для повторного использования логики в компонентах.

// В данном уроке вы узнаете, что такое пользовательские хуки и научитесь создавать свои, узнаете, как повторно использовать логику между компонентами, напишете полезные хуки для распространённых сценариев:
// useToggle(),
// useTimeout(),
// useDebounce(),
// useUpdateEffect(),
// useArray(),
// useThrottle(),
// useFetch(),

// //! useLocalStorage() - позволяет сохранять значение из поля ввода в Local storage и получать значение из локального хранилища браузера. Локальное хранилище - это механизм, который позволяет хранить данные в браузере даже после закрытия вкладки или окна. Это полезно, если хочешь сохранить состояние компонента между перезагрузками страницы.
// //! useUpdateLogger() - позволяет выводить в консоль переданное в него значение, как в данном случае значение value, которое равно значению ключа name в локальном хранилище.
// export default function CustomHooks() {
//   const [value, setValue] = UseLocalStorage('name', '')

//   useUpdateLogger(value)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input
//           id="text"
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//       </header>
//     </div>
//   )
// }

// //! useToggle() - позволяет переключать значение между true и false с помощью функции setState. Это полезно, когда хочешь управлять состоянием, которое может быть включено или выключено, например: показать или скрыть элемент, включить или выключить режим, активировать или деактивировать опцию.
// export default function CustomHooks() {
//   const [state, setState] = UseToggle(false)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{state.toString()}</p>
//         <button onClick={() => setState()}>Toggle</button>
//         <button onClick={() => setState(true)}>Set True</button>
//         <button onClick={() => setState(false)}>Set False</button>
//       </header>
//     </div>
//   )
// }

// //! useTimeout() - позволяет вызывать функцию обратного вызова (callback) через определенный промежуток времени (delay) и управлять этим процессом с помощью функций reset и clear. Это полезно, когда нужно выполнить какое-то действие после задержки, например, обнулить счетчик или показать сообщение.
// export default function CustomHooks() {
//   const [count, setCount] = useState(10)

//   const { reset, clear } = useTimeout(() => {
//     setCount(0)
//   }, 1000)

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <button onClick={() => setCount((p) => p + 1)}>Increment</button>
//         <button onClick={() => clear()}>Stop Timeout</button>
//         <button onClick={() => reset()}>Start Timeout</button>
//       </header>
//     </div>
//   )
// }

// //! useDebounce() - позволяет откладывать вызов функции обратного вызова (callback) до тех пор, пока не пройдет определенный промежуток времени (delay) с момента последнего изменения зависимостей (dependencies). Это полезно, когда ты хочешь избежать частых и ненужных запросов к API или других дорогостоящих операций, которые должны происходить только при стабилизации ввода или состояния.
// export default function CustomHooks() {
//   const [count, setCount] = useState(10)
//   const [value, setValue] = useState('')

//   // useDebounce(
//   //   () => {
//   //     alert(count)
//   //   },
//   //   1000,
//   //   [count]
//   // )

//   useDebounce(
//     () => {
//       console.log('####: Запроси мне API', value)
//     },
//     1000,
//     [value]
//   )

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <input
//           id="text"
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//         />
//         <button onClick={() => setCount((p) => p + 1)}>Increment</button>
//       </header>
//     </div>
//   )
// }

// //! useInput - позволяет управлять значением и событиями поля ввода с помощью React Hooks. Это полезно, когда ты хочешь создать контролируемый компонент input, который реагирует на изменения ввода и валидирует его.
// export default function CustomHooks() {
//   // Используем пользовательский хук useInput, чтобы создать контролируемый компонент input
//   // Передаем пустую строку в качестве initialValue
//   // Передаем функцию, которая проверяет, что длина ввода не превышает 10 символов, в качестве validator
//   const name = useInput('', (value) => value.length <= 10)

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Рендерим компонент input, используя value и onChange из хука useInput */}
//         <input placeholder="Name" {...name} />
//       </header>
//     </div>
//   )
// }

// //! useFetch - Функция useFetch принимает два параметра: url и options:       1). url - это адрес, по которому будет отправлен запрос                        2). options - это объект, содержащий дополнительные параметры запроса, такие как метод, заголовки, тело и т.д. Вывод данных с фильтрацией по ключу name.
// export default function CustomHooks() {
//   const input = useInput()
//   const { data, error, loading } = useFetch(
//     'https://jsonplaceholder.typicode.com/users'
//   )

//   return (
//     <div className="App">
//       <header className="App-header">
//         <input id="filter" type="text" {...input} />
//         <h4 style={{ color: 'green' }}>input.value: {input.value}</h4>
//         {loading && <p style={{ fontSize: '5rem' }}>Loading...</p>}
//         {error && <p style={{ color: 'red', fontSize: '3rem' }}>Error</p>}
//         {data && (
//           <ul>
//             {data
//               .filter((user) =>
//                 user.name.toLowerCase().includes(input.value.toLowerCase())
//               )
//               .map((user, index) => (
//                 <li key={user.id}>
//                   №{index + 1} id:{user.id} {user.name}
//                   <p style={{ color: 'gray' }}>
//                     username: {user.username}
//                     <br />
//                     email: {user.email}
//                     <br />
//                     city: {user.address.city}
//                     <br />
//                     street: {user.address.street}
//                   </p>
//                 </li>
//               ))}
//           </ul>
//         )}
//       </header>
//     </div>
//   )
// }

// //! useUpdateEffect - это модифицированная версия хука useEffect, которая пропускает первый рендер, полезен, когда нужно выполнить какое-то действие только при обновлении компонента, а не при его монтировании.
// export default function CustomHooks() {
//   const [count, setCount] = useState(10)

//   useUpdateEffect(() => {
//     alert(count)
//   }, [count])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{count}</p>
//         <button onClick={() => setCount((p) => p + 1)}>Increment</button>
//         <button onClick={() => setCount((p) => p - 1)}>Decrement</button>
//       </header>
//     </div>
//   )
// }

//! useArray -
export default function CustomHooks() {
  const [values, { push, update, clear, remove, filter, sort }] = useArray([
    10, 2, 3, 8, 1, 4, 5, 6, 7, 9,
  ])

  const isEven = useCallback((value) => value % 2 === 0, [])
  const isOdd = useCallback((value) => value % 2 !== 0, [])
  const sortAscending = useCallback((a, b) => a - b, [])
  const sortDescending = useCallback((a, b) => b - a, [])

  let set = useMemo(() => new Set(), [])
  const removingDuplicatesExceptOne = useCallback(
    (value) => !set.has(value) && set.add(value),
    [set]
  )

  const removingDuplicates = useCallback((value, index, array) => {
    let map = new Map()
    for (let element of array) {
      if (map.has(element)) {
        map.set(element, map.get(element) + 1)
      } else {
        map.set(element, 1)
      }
    }
    return map.get(value) === 1
  }, [])

  const removingAllElementsExceptDuplicates = useCallback(
    (value, index, array) => {
      let map = new Map()
      for (let element of array) {
        if (map.has(element)) {
          map.set(element, map.get(element) + 1)
        } else {
          map.set(element, 1)
        }
      }
      return map.get(value) !== 1
    },
    []
  )

  return (
    <div className="App">
      <header className="App-header">
        <p>[{values.join(', ')}]</p>
        <button onClick={() => push(values.length)}>push</button>
        <button onClick={() => update(3, 77)}>update 4 element to 77</button>
        <button onClick={() => update(0, 77)}>
          update first element to 77
        </button>
        <button onClick={() => update(values.length - 1, 77)}>
          update last element to 77
        </button>
        <button onClick={() => clear()}>clear</button>
        <button onClick={() => remove(0)}>remove first element</button>
        <button onClick={() => remove(values.length - 1)}>
          remove last element
        </button>
        <button onClick={() => remove(3)}>remove 4 element</button>
        <button onClick={() => filter(isEven)}>filter isEven</button>
        <button onClick={() => filter(isOdd)}>filter isOdd</button>
        <button onClick={() => sort(sortAscending)}>sort ascending</button>
        <button onClick={() => sort(sortDescending)}>sort descending</button>
        <button onClick={() => filter(removingDuplicatesExceptOne)}>
          removing duplicates except one
        </button>
        <button onClick={() => filter(removingDuplicates)}>
          removing duplicates
        </button>
        <button onClick={() => filter(removingAllElementsExceptDuplicates)}>
          removing all elements except duplicates
        </button>
      </header>
    </div>
  )
}
