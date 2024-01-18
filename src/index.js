import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LifeCycles from './LifeCycles'
import Hooks from './Hooks'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <>
    <Hooks />
    <LifeCycles />
  </>
  // </React.StrictMode>
)
