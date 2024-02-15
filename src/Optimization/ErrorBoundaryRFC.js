import { useEffect, useReducer } from 'react'

// определение типов для действий
const SET_ERROR = 'SET_ERROR'
const RESET_ERROR = 'RESET_ERROR'

// определение функции-редьюсера
const errorReducer = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        hasError: true,
        error: action.error,
        errorInfo: action.errorInfo,
      }
    case RESET_ERROR:
      return { hasError: false, error: null, errorInfo: null }
    default:
      return state
  }
}

// определение функционального компонента
const ErrorBoundaryRFC = ({ children }) => {
  // использование хука useReducer для управления состоянием ошибки
  const [errorState, dispatch] = useReducer(errorReducer, {
    hasError: false,
    error: null,
    errorInfo: null,
  })

  // использование хука useEffect для обработки ошибок при монтировании и размонтировании компонента
  useEffect(() => {
    // определение функции для обработки ошибок
    const handleError = (error, errorInfo) => {
      console.log('####: error from ErrorBoundaryRFC', error.message)
      console.log('####: errorInfo from ErrorBoundaryRFC', errorInfo)
      // обновление состояния ошибки с помощью диспетчера
      dispatch({ type: SET_ERROR, error, errorInfo })
    }

    // добавление слушателя события ошибки
    window.addEventListener('error', handleError)

    // возвращение функции для очистки слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('error', handleError)
      // сброс состояния ошибки с помощью диспетчера
      dispatch({ type: RESET_ERROR })
    }
  }, [])

  // рендеринг компонента в зависимости от состояния ошибки
  if (errorState.hasError) {
    return <h4>Что-то пошло не так!</h4>
  }

  return children
}

export default ErrorBoundaryRFC
