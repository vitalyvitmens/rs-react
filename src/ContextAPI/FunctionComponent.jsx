import { useContext } from 'react'
import { ThemeContext } from './ContextAPI'

export function FunctionComponent() {
  const value = useContext(ThemeContext)
  console.log('####: value', value)

  return (
    <div>
      <h1>Function Component</h1>
      <div style={{ color: 'green', fontSize: '3rem', fontWeight: 'bold' }}>
        <div>Имя: {value.name}</div>
        <div>Возраст: {value.age}</div>
      </div>
    </div>
  )
}
