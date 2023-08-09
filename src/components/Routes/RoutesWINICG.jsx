import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const RoutesWINICG = () => {
  const AddIsoRulePage = lazy(()=> import("../Pages/IsoRule/AddIsoRulePage"))
  const IsoRulePage = lazy(()=> import("../Pages/IsoRule/IsoRulePage"))
  return (
    <BrowserRouter>
    <Suspense fallback={"<div>Loading</div>"}>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/isoRule" element={<IsoRulePage/>}>
          <Route path='addIsoRule' element={<AddIsoRulePage/>}/>
        </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default RoutesWINICG