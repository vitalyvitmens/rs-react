import { useState, useEffect } from 'react'

// Функция useFetch принимает два параметра: url и options
// url - это адрес, по которому будет отправлен запрос
// options - это объект, содержащий дополнительные параметры запроса, такие как метод, заголовки, тело и т.д.
export function useFetch(url, options) {
  // Хук useState создает три переменные: data, error и loading
  // data - это переменная, которая будет хранить полученные данные
  // error - это переменная, которая будет хранить возможную ошибку при запросе
  // loading - это переменная, которая будет показывать, идет ли загрузка данных
  // Используем null в качестве начальных значений для data и error, и true для loading
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  // Хук useEffect позволяет выполнять побочные эффекты в компоненте
  // Передаем ему функцию, которая будет вызвана при первом рендеринге и при каждом изменении url или options
  useEffect(() => {
    // Объявляем асинхронную функцию fetchData, которая будет выполнять запрос
    async function fetchData() {
      try {
        // Используем Fetch API, чтобы отправить запрос по url с options
        // Получаем объект ответа response
        const response = await fetch(url, options)

        // Проверяем, что статус ответа в диапазоне 200-299, то есть успешный
        // Если нет, то выбрасываем ошибку с текстом статуса
        if (!response.ok) {
          throw new Error(response.statusText)
        }

        // Преобразуем ответ в формат JSON
        // Получаем объект данных data
        const data = await response.json()

        // Устанавливаем data в состояние с помощью функции setData
        setData(data)

        // Устанавливаем error в null, так как нет ошибки
        setError(null)
      } catch (error) {
        // Если произошла ошибка при запросе, то устанавливаем error в состояние с помощью функции setError
        setError(error)
      } finally {
        // В любом случае устанавливаем loading в false, так как загрузка завершена
        setLoading(false)
      }
    }

    // Вызываем функцию fetchData
    fetchData()
  }, [url, options]) // Передаем url и options в качестве зависимостей, чтобы функция вызывалась при их изменении

  // Возвращаем объект с data, error и loading, которые можно использовать в компоненте
  return { data, error, loading }
}
