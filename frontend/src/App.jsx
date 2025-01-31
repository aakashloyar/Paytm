import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Send from './assets/Send'
import Dashboard from './assets/Dashboard'
import Signin from './assets/Signin'
import Signup from './assets/Signup'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="send" element={<Send />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
