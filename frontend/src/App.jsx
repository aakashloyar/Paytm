import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Send from './pages/Send'
import Dashboard from './pages/Dashboard'
import Appbar from './components/Appbar'
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
