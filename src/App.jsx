import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Component/Home'
import Store from './Component/Store'
import Cart from './Component/Cart'
import Login from './Component/Login'
import Signup from './Component/Signup'
function App() {
  

  return (
    <div className='app'>
    <Routes>
    <Route exact path='/'element={<Home/>}/>
    <Route exact path='/store'element={<Store/>}/>
    <Route exact path='/cart'element={<Cart/>}/>
    <Route exact path='/login--user'element={<Login/>}/>
    <Route exact path='/signup-user'element={<Signup/>}/>
    
    </Routes>
    </div>
  )
}

export default App
