import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import LifeCycles from './LifeCycles'
import Hooks from './Hooks'
import NestedList from './Checkbox'
import CustomHooks from './CustomHooks/CustomHooks'
import SiteBing from './SiteBing'
import { EventLoop } from './tasks/EventLoop'
import Forms from './Forms/Forms'
import Router from './Router/Router'
import './index.css'
import ContextAPI from './ContextAPI/ContextAPI'
import { Optimization } from './Optimization/Optimization'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <>
      <Optimization />
      {/* <ContextAPI /> */}
      {/* <Router /> */}
      {/* <Forms /> */}
      {/* <CustomHooks /> */}
      {/* <EventLoop/> */}
      {/* <Hooks /> */}
      {/* <LifeCycles /> */}
      {/* <NestedList/> */}
      {/* <SiteBing/> */}
    </>
  </BrowserRouter>
  // </React.StrictMode>
)
