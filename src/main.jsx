import React from 'react'
import ReactDOM from 'react-dom/client'
import { PhoneProvider } from './context/phoneContext.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <PhoneProvider>
    <App />
    </PhoneProvider>
  </React.StrictMode>

)
