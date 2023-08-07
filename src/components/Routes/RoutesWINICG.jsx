import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const RoutesWINICG = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default RoutesWINICG