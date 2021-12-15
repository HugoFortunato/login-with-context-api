import { useState } from 'react'
import './App.css'
import { AuthProvider } from './context/AuthProvider'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectLayout from './components/ProtectLayout'
import Login from './components/Login'


function App() {

  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/profile" element={<ProtectLayout><h2>Olá esse é o componente profile!</h2></ProtectLayout>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
  )
}

export default App
