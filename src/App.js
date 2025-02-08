import React from 'react'
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./index.css";
import NotFound from './pages/NotFound';

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App