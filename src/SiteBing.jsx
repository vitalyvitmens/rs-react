import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

// Компонент для отображения карточки товара
function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <span className="price">{product.price} руб.</span>
      <button className="buy-button">Купить</button>
    </div>
  )
}

// Компонент для отображения списка товаров с пагинацией
function ProductList({ products, page, setPage, limit }) {
  // Вычисляем количество страниц в зависимости от лимита
  const totalPages = Math.ceil(products.length / limit)

  // Вычисляем индексы начала и конца текущей страницы
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  // Выбираем только те товары, которые относятся к текущей странице
  const currentProducts = products.slice(startIndex, endIndex)

  // Функция для изменения текущей страницы
  const handlePageChange = (event) => {
    // Получаем номер страницы из атрибута data-page элемента button
    const newPage = Number(event.target.dataset.page)

    // Устанавливаем новую страницу в состояние компонента
    setPage(newPage)
  }

  return (
    <div className="product-list">
      <div className="products">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="page-button"
          data-page="1"
          onClick={handlePageChange}
          disabled={page === 1}
        ></button>
        <button
          className="page-button"
          data-page={page - 1}
          onClick={handlePageChange}
          disabled={page === 1}
        ></button>
        <span className="page-info">
          Страница {page} из {totalPages}
        </span>
        <button
          className="page-button"
          data-page={page + 1}
          onClick={handlePageChange}
          disabled={page === totalPages}
        ></button>
        <button
          className="page-button"
          data-page={totalPages}
          onClick={handlePageChange}
          disabled={page === totalPages}
        ></button>
      </div>
    </div>
  )
}

// Компонент для отображения фильтров по категориям и ценам
function Filters({ categories, prices, filters, setFilters }) {
  // Функция для обработки изменения чекбокса категории
  const handleCategoryChange = (event) => {
    // Получаем значение и состояние чекбокса из объекта event
    const { value, checked } = event.target

    // Копируем текущие фильтры в новый объект
    const newFilters = { ...filters }

    // Если чекбокс отмечен, добавляем значение в массив категорий
    if (checked) {
      newFilters.categories.push(value)
    } else {
      // Иначе удаляем значение из массива категорий
      newFilters.categories = newFilters.categories.filter(
        (category) => category !== value
      )
    }

    // Устанавливаем новые фильтры в состояние компонента
    setFilters(newFilters)
  }

  // Функция для обработки изменения радиокнопки цены
  const handlePriceChange = (event) => {
    // Получаем значение радиокнопки из объекта event
    const value = event.target.value

    // Копируем текущие фильтры в новый объект
    const newFilters = { ...filters }

    // Устанавливаем новое значение для цены
    newFilters.price = value

    // Устанавливаем новые фильтры в состояние компонента
    setFilters(newFilters)
  }

  return (
    <div className="filters">
      <h4>Категории</h4>
      <div className="categories">
        {categories.map((category) => (
          <div key={category} className="category">
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={filters.categories.includes(category)}
              onChange={handleCategoryChange}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>
      <h4>Цена</h4>
      <div className="prices">
        {prices.map((price) => (
          <div key={price} className="price">
            <input
              type="radio"
              id={price}
              name="price"
              value={price}
              checked={filters.price === price}
              onChange={handlePriceChange}
            />
            <label htmlFor={price}>{price}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

// Компонент для отображения поля поиска и селектора сортировки
function SearchAndSort({ query, setQuery, sort, setSort }) {
  // Функция для обработки изменения поля поиска
  const handleQueryChange = (event) => {
    // Получаем значение поля из объекта event
    const value = event.target.value

    // Устанавливаем новое значение в состояние компонента
    setQuery(value)
  }

  // Функция для обработки изменения селектора сортировки
  const handleSortChange = (event) => {
    // Получаем значение селектора из объекта event
    const value = event.target.value

    // Устанавливаем новое значение в состояние компонента
    setSort(value)
  }

  return (
    <div className="search-and-sort">
      <div className="search">
        <input
          type="text"
          placeholder="Поиск по товарам..."
          value={query}
          onChange={handleQueryChange}
        />
      </div>
      <div className="sort">
        <select value={sort} onChange={handleSortChange}>
          <option value="name-asc">По названию (А-Я)</option>
          <option value="name-desc">По названию (Я-А)</option>
          <option value="price-asc">По цене (по возрастанию)</option>
          <option value="price-desc">По цене (по убыванию)</option>
        </select>
      </div>
    </div>
  )
}

// Функция filterProducts принимает массив products и объект filters
// Возвращает новый массив, содержащий только те товары, которые соответствуют фильтрам
function filterProducts(products, filters) {
  // Создаем пустой массив для отфильтрованных товаров
  let filteredProducts = []

  // Перебираем все товары
  for (let product of products) {
    // Проверяем, соответствует ли товар фильтрам
    // Для этого используем логические переменные, которые будут true, если товар подходит по критерию, и false, если нет
    let matchName = true // По умолчанию считаем, что товар подходит по названию
    let matchPrice = true // По умолчанию считаем, что товар подходит по цене
    let matchCategory = true // По умолчанию считаем, что товар подходит по категории

    // Если в фильтрах задано название, то проверяем, содержит ли название товара это слово
    // Для этого приводим оба названия к нижнему регистру и используем метод includes
    if (filters.name) {
      matchName = product.name
        .toLowerCase()
        .includes(filters.name.toLowerCase())
    }

    // Если в фильтрах задан диапазон цен, то проверяем, попадает ли цена товара в этот диапазон
    // Для этого используем операторы сравнения
    if (filters.minPrice || filters.maxPrice) {
      matchPrice =
        (filters.minPrice ? product.price >= filters.minPrice : true) &&
        (filters.maxPrice ? product.price <= filters.maxPrice : true)
    }

    // Если в фильтрах задана категория, то проверяем, совпадает ли категория товара с этой категорией
    // Для этого используем оператор равенства
    if (filters.category) {
      matchCategory = product.category === filters.category
    }

    // Если товар соответствует всем фильтрам, то добавляем его в массив отфильтрованных товаров
    // Для этого используем логический оператор И
    if (matchName && matchPrice && matchCategory) {
      filteredProducts.push(product)
    }
  }

  // Возвращаем массив отфильтрованных товаров
  return filteredProducts
}

// Функция sortProducts принимает массив products и строку sortBy
// Возвращает новый массив, отсортированный по выбранному критерию
function sortProducts(products, sortBy) {
  // Создаем копию массива products, чтобы не изменять исходный массив
  let sortedProducts = [...products]

  // Используем метод sort, который принимает функцию сравнения двух элементов
  sortedProducts.sort((a, b) => {
    // В зависимости от значения sortBy, сравниваем товары по разным свойствам
    switch (sortBy) {
      case 'nameAsc': // Сортировка по названию по возрастанию
        // Используем метод localeCompare, который сравнивает две строки лексикографически
        return a.name.localeCompare(b.name)
      case 'nameDesc': // Сортировка по названию по убыванию
        // Используем метод localeCompare, но меняем местами аргументы, чтобы получить обратный порядок
        return b.name.localeCompare(a.name)
      case 'priceAsc': // Сортировка по цене по возрастанию
        // Используем обычное вычитание, чтобы сравнить числа
        return a.price - b.price
      case 'priceDesc': // Сортировка по цене по убыванию
        // Используем обычное вычитание, но меняем местами аргументы, чтобы получить обратный порядок
        return b.price - a.price
      default: // По умолчанию не сортируем
        return 0
    }
  })

  // Возвращаем отсортированный массив
  return sortedProducts
}

// Функция searchProducts принимает массив products и строку query
// Возвращает новый массив, содержащий только те товары, у которых название или описание содержит query
function searchProducts(products, query) {
  // Создаем пустой массив для найденных товаров
  let foundProducts = []

  // Перебираем все товары
  for (let product of products) {
    // Проверяем, содержит ли название или описание товара query
    // Для этого приводим оба значения к нижнему регистру и используем метод includes
    if (
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    ) {
      // Если да, то добавляем товар в массив найденных товаров
      foundProducts.push(product)
    }
  }

  // Возвращаем массив найденных товаров
  return foundProducts
}

// Компонент для отображения поля поиска
function SearchBar({ query, setQuery }) {
  // Функция для обработки изменения значения поля поиска
  function handleChange(event) {
    // Сохраняем новое значение в состояние query
    setQuery(event.target.value)
  }

  // Возвращаем JSX-разметку компонента
  return (
    <div className="SearchBar">
      {/* Используем элемент input с типом text для ввода поискового запроса */}
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Поиск по названию или описанию"
      />
    </div>
  )
}

// Компонент для отображения селектора сортировки
function SortSelector({ sort, setSort }) {
  // Функция для обработки изменения значения селектора сортировки
  function handleChange(event) {
    // Сохраняем новое значение в состояние sort
    setSort(event.target.value)
  }

  // Возвращаем JSX-разметку компонента
  return (
    <div className="SortSelector">
      {/* Используем элемент select с опциями для выбора критерия сортировки */}
      <select value={sort} onChange={handleChange}>
        <option value="nameAsc">По названию (А-Я)</option>
        <option value="nameDesc">По названию (Я-А)</option>
        <option value="priceAsc">По цене (по возрастанию)</option>
        <option value="priceDesc">По цене (по убыванию)</option>
      </select>
    </div>
  )
}

// Компонент для отображения пагинации
function Pagination({ page, setPage }) {
  // Функция для обработки нажатия на кнопку "Назад"
  function handlePrev() {
    // Уменьшаем значение page на 1, если оно больше 1
    if (page > 1) {
      setPage(page - 1)
    }
  }

  // Функция для обработки нажатия на кнопку "Вперед"
  function handleNext() {
    // Увеличиваем значение page на 1, если оно меньше 10
    // Предполагаем, что всего 10 страниц
    if (page < 10) {
      setPage(page + 1)
    }
  }

  // Возвращаем JSX-разметку компонента
  return (
    <div className="Pagination">
      {/* Используем элемент button для перехода на предыдущую страницу */}
      <button onClick={handlePrev}>Назад</button>
      {/* Отображаем текущую страницу */}
      <span>{page}</span>
      {/* Используем элемент button для перехода на следующую страницу */}
      <button onClick={handleNext}>Вперед</button>
    </div>
  )
}

// Главный компонент приложения
export default function SiteBing() {
  // Состояние для хранения списка товаров
  const [products, setProducts] = useState([])

  // Состояние для хранения поискового запроса
  const [query, setQuery] = useState('')

  // Состояние для хранения критерия сортировки
  const [sort, setSort] = useState('name-asc')

  // Состояние для хранения фильтров по категориям и ценам
  const [filters, setFilters] = useState({
    categories: [],
    price: '',
  })

  // Состояние для хранения текущей страницы
  const [page, setPage] = useState(1)

  // Хук useEffect, который вызывается при первом рендеринге компонента
  useEffect(() => {
    // Отправляем GET-запрос к серверу, чтобы получить список товаров
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // Если запрос успешен, то сохраняем данные в состояние products
        setProducts(response.data)
      })
      .catch((error) => {
        // Если запрос неудачен, то выводим ошибку в консоль
        console.error(error)
      })
  }, []) // Пустой массив зависимостей, чтобы хук вызывался только один раз

  // Хук useCallback, который возвращает функцию filterProducts, оптимизированную для повторного использования
  // Функция filterProducts принимает массив products и объект filters
  // Возвращает новый массив, содержащий только те товары, которые соответствуют фильтрам
  function filterProducts(products, filters) {
    // Создаем пустой массив для отфильтрованных товаров
    let filteredProducts = []

    // Перебираем все товары
    for (let product of products) {
      // Проверяем, соответствует ли товар фильтрам
      // Для этого используем логические переменные, которые будут true, если товар подходит по критерию, и false, если нет
      let matchName = true // По умолчанию считаем, что товар подходит по названию
      let matchPrice = true // По умолчанию считаем, что товар подходит по цене
      let matchCategory = true // По умолчанию считаем, что товар подходит по категории

      // Если в фильтрах задано название, то проверяем, содержит ли название товара это слово
      // Для этого приводим оба названия к нижнему регистру и используем метод includes
      if (filters.name) {
        matchName = product.name
          .toLowerCase()
          .includes(filters.name.toLowerCase())
      }

      // Если в фильтрах задан диапазон цен, то проверяем, попадает ли цена товара в этот диапазон
      // Для этого используем операторы сравнения
      if (filters.minPrice || filters.maxPrice) {
        matchPrice =
          (filters.minPrice ? product.price >= filters.minPrice : true) &&
          (filters.maxPrice ? product.price <= filters.maxPrice : true)
      }

      // Если в фильтрах задана категория, то проверяем, совпадает ли категория товара с этой категорией
      // Для этого используем оператор равенства
      if (filters.category) {
        matchCategory = product.category === filters.category
      }

      // Если товар соответствует всем фильтрам, то добавляем его в массив отфильтрованных товаров
      // Для этого используем логический оператор И
      if (matchName && matchPrice && matchCategory) {
        filteredProducts.push(product)
      }
    }

    // Возвращаем массив отфильтрованных товаров
    return filteredProducts
  }

  // Функция sortProducts принимает массив products и строку sortBy
  // Возвращает новый массив, отсортированный по выбранному критерию
  function sortProducts(products, sortBy) {
    // Создаем копию массива products, чтобы не изменять исходный массив
    let sortedProducts = [...products]

    // Используем метод sort, который принимает функцию сравнения двух элементов
    sortedProducts.sort((a, b) => {
      // В зависимости от значения sortBy, сравниваем товары по разным свойствам
      switch (sortBy) {
        case 'nameAsc': // Сортировка по названию по возрастанию
          // Используем метод localeCompare, который сравнивает две строки лексикографически
          return a.name.localeCompare(b.name)
        case 'nameDesc': // Сортировка по названию по убыванию
          // Используем метод localeCompare, но меняем местами аргументы, чтобы получить обратный порядок
          return b.name.localeCompare(a.name)
        case 'priceAsc': // Сортировка по цене по возрастанию
          // Используем обычное вычитание, чтобы сравнить числа
          return a.price - b.price
        case 'priceDesc': // Сортировка по цене по убыванию
          // Используем обычное вычитание, но меняем местами аргументы, чтобы получить обратный порядок
          return b.price - a.price
        default: // По умолчанию не сортируем
          return 0
      }
    })

    // Возвращаем отсортированный массив
    return sortedProducts
  }
  // Хук useCallback, который возвращает функцию searchProducts, оптимизированную для повторного использования
  // Функция searchProducts принимает массив products и строку query
  // Возвращает новый массив, содержащий только те товары, у которых название или описание содержит query
  function searchProducts(products, query) {
    // Создаем пустой массив для найденных товаров
    let foundProducts = []

    // Перебираем все товары
    for (let product of products) {
      // Проверяем, содержит ли название или описание товара query
      // Для этого приводим оба значения к нижнему регистру и используем метод includes
      if (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      ) {
        // Если да, то добавляем товар в массив найденных товаров
        foundProducts.push(product)
      }
    }

    // Возвращаем массив найденных товаров
    return foundProducts
  }
  // Применяем функции фильтрации, сортировки и поиска к списку товаров
  let filteredProducts = filterProducts(products, filters)
  let sortedProducts = sortProducts(filteredProducts, sort)
  let searchedProducts = searchProducts(sortedProducts, query)

  // Возвращаем JSX-разметку компонента
  return (
    <div className="App">
      {/* Компонент для отображения поля поиска */}
      <SearchBar query={query} setQuery={setQuery} />
      {/* Компонент для отображения селектора сортировки */}
      <SortSelector sort={sort} setSort={setSort} />
      {/* Компонент для отображения фильтров */}
      <Filters filters={filters} setFilters={setFilters} />
      {/* Компонент для отображения списка товаров */}
      <ProductList products={searchedProducts} page={page} />
      {/* Компонент для отображения пагинации */}
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}
