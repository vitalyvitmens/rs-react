import { useState } from 'react'

// Функция useInput принимает два параметра: initialValue и validator
// initialValue - это начальное значение поля ввода
// validator - это функция, которая проверяет, является ли ввод допустимым
export function useInput(initialValue = '', validator) {
  // Хук useState создает переменную value и функцию setValue для ее изменения
  // Передаем initialValue в качестве параметра, чтобы установить начальное значение
  const [value, setValue] = useState(initialValue)

  // Функция onChange обрабатывает событие изменения ввода
  // Она принимает объект события в качестве параметра
  function onChange(event) {
    // Получаем значение из события
    const {
      target: { value },
    } = event

    // Объявляем переменную willUpdate, которая определяет, нужно ли обновлять значение
    let willUpdate = true

    // Если передана функция validator, то вызываем ее с введенным значением
    // Если функция вернет false, то устанавливаем willUpdate в false
    if (typeof validator === 'function') {
      willUpdate = validator(value)
    }

    // Если willUpdate равно true, то вызываем функцию setValue с введенным значением
    if (willUpdate) {
      setValue(value)
    }
  }

  // Возвращаем объект с value и onChange, которые можно использовать в компоненте input
  return { value, onChange }
}
