import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Appchat from './appchat.tsx'
// import Videomeet from './videomeet.tsx'


// import Login from './login.tsx'
import './index.css'
import LoginPage from './login.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LoginPage />
    {/* <Videomeet /> */}
    <App />
    <Appchat />
  </React.StrictMode>,
)
