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
import { UseLocalStorage } from './UseLocalStorage'
import { useUpdateLogger } from './useUpdateLogger'
import { UseToggle } from './UseToggle'

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

//! useToggle() - позволяет переключать значение между true и false с помощью функции setState. Это полезно, когда хочешь управлять состоянием, которое может быть включено или выключено, например: показать или скрыть элемент, включить или выключить режим, активировать или деактивировать опцию.
export default function CustomHooks() {
  const [state, setState] = UseToggle(false)
  return (
    <div className="App">
      <header className="App-header">
        <p>{state.toString()}</p>
        <button onClick={() => setState()}>Toggle</button>
        <button onClick={() => setState(true)}>Set True</button>
        <button onClick={() => setState(false)}>Set False</button>
      </header>
    </div>
  )
}
