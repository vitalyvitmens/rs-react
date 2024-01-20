import { useState, useEffect } from 'react'

const CheckboxField = (props) => {
  const { name, label, value, onChange } = props

  return (
    <div>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={value}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export function findParent(specialties, parentCode) {
  const parentList = []
  const findParentRecursive = (specialties, parentCode) => {
    for (let i = 0; i < specialties.length; i++) {
      const item = specialties[i]
      if (item.code === parentCode) {
        parentList.push(item)
        if (item.parent_code) {
          findParentRecursive(specialties, item.parent_code)
        }
        break
      }
      if (
        item.child_occupation_codes &&
        item.child_occupation_codes.length > 0
      ) {
        const parent = findParentRecursive(
          item.child_occupation_codes,
          parentCode
        )
        if (parent) {
          parentList.push(item)
          break
        }
      }
    }
  }

  findParentRecursive(specialties, parentCode)
  return parentList
}

const NestedList = (props) => {
  const { parentCode } = props

  const [data, setData] = useState([])

  const [checkedItems, setCheckedItems] = useState({})
  const [isDropdown, setIsDropdown] = useState({})
  const [loading, setLoading] = useState(false)
  console.log('####: data', data)
  console.log('####: checkedItems', checkedItems)
  console.log('####: isDropdown', isDropdown)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3005/specialties')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
        setCheckedItems((prev) => ({
          ...prev,
          ...data.reduce((acc, item) => {
            acc[item.code] = item.checked
            return acc
          }, {}),
        }))
      })
      .catch((err) => {
        console.error('Произошла ошибка сети', err)
        setLoading(false)
      })
    return () => {
      console.log('## useEffect ##: componentWillUnmount')
    }
  }, [])
  let parentClass

  if (isDropdown) {
    parentClass = 'open'
  } else {
    parentClass = 'close'
  }

  const handleChange = (e) => {
    const { name, checked } = e.target

    setCheckedItems((prev) => ({ ...prev, [name]: checked }))
  }

  const handleSelectAll = (e) => {
    const { checked } = e.target

    const newCheckedItems = {}

    for (let item of data) {
      if (item.parent_code === parentCode) {
        newCheckedItems[item.code] = checked
      }
    }

    setCheckedItems((prev) => ({ ...prev, ...newCheckedItems }))
  }

  const isAllSelected = () => {
    for (let item of data) {
      if (item.parent_code === parentCode) {
        if (!checkedItems[item.code]) {
          return false
        }
      }
    }

    return true
  }

  const handleDropdown = (e, code) => {
    e.preventDefault()

    setIsDropdown((prev) => ({
      ...prev,
      [code]: !prev[code],
    }))
  }

  return loading ? (
    <div className="loading">
      <p>Загрузка данных...</p>
    </div>
  ) : (
    <ul className="nested-list">
      {data.map((item) => {
        if (
          item.child_occupation_codes &&
          item.child_occupation_codes.length > 0
        ) {
          return (
            <li key={item.code}>
              <div className="nested-list-col">
                <a
                  href="/"
                  onClick={(e) => handleDropdown(e, item.code)}
                  className={`nested-list__link ${
                    isDropdown[item.code] ? 'open' : 'close'
                  }`}
                >
                  <div className={`nested-plus ${parentClass}`}>
                    <img src="/images/nested-plus.svg" alt="" />
                  </div>
                  <span>
                    {item.code} {item.name}
                  </span>
                </a>

                <div
                  className={`nested-list__dropdown ${
                    isDropdown[item.code] ? 'open' : 'close'
                  }`}
                >
                  {/* <NestedList
                    key={item.code}
                    data={item.child_occupation_codes}
                    parentCode={item.code}
                    isDropdown={isDropdown}
                    checkedItems={checkedItems}
                  /> */}
                </div>
              </div>
            </li>
          )
        } else {
          return (
            <li key={item.code}>
              <div className="nested-list-res">
                <CheckboxField
                  key={item.code}
                  name={item.code}
                  label={`${item.code} ${item.name}`}
                  value={checkedItems[item.code] || false}
                  onChange={handleChange}
                  checkedItems={checkedItems}
                />
              </div>
            </li>
          )
        }
      })}
      <li>
        <div className="nested-list-res">
          <CheckboxField
            name="selectAll"
            label="Выделить все"
            value={isAllSelected()}
            onChange={handleSelectAll}
          />
        </div>
      </li>
    </ul>
  )
}

export default NestedList
