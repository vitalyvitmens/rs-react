import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LifeCycles from './LifeCycles'
import Hooks from './Hooks'
import NestedList from './Checkbox'
import CustomHooks from './CustomHooks/CustomHooks'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <>
  <CustomHooks/>
    {/* <Hooks /> */}
    {/* <LifeCycles /> */}
    {/* <NestedList/> */}
  </>
  // </React.StrictMode>
)
