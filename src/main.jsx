import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes'
import './index.css'
import BackToTop from './components/BackToTop'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRoutes/>
    <BackToTop/>
  </React.StrictMode>,
)
