import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import BrowserRouters
import { BrowserRouter } from 'react-router-dom'
import MobileDataProvider from './ContextApi/ContextApi.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MobileDataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MobileDataProvider>,
)
