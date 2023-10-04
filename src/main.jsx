import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {MemoryContextProvider} from './context/MemoryContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <MemoryContextProvider>
    <App />
    </MemoryContextProvider>
    </BrowserRouter>
  
)
