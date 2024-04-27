import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import Header from './Header';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Home />
  </React.StrictMode>,
)
