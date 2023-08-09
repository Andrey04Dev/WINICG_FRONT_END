import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'

const RoutesWINICG = () => {
  //Lazy de la auditorias
  const AddAuditPage = lazy(()=> import("../Pages/Audit/AddAuditPage"))
  const AuditPage = lazy(()=> import("../Pages/Audit/AuditPage"))
  //Lazy de la certificaciones
  const AddCertificationPage = lazy(()=> import("../Pages/Certification/AddCertification"))
  const CertificationPage = lazy(()=> import("../Pages/Certification/CertificationPage"))
  //Lazy de normas ISO
  const AddIsoRulePage = lazy(()=> import("../Pages/IsoRule/AddIsoRulePage"))
  const IsoRulePage = lazy(()=> import("../Pages/IsoRule/IsoRulePage"))
  return (
    <BrowserRouter>
    <Suspense fallback={"<div>Loading</div>"}>
    <Routes>
        {/* Ruta de la página principal */}
        <Route path="/" element={<Home/>}></Route>
        {/* Rutas para la página de auditoria */}
        <Route path="/audit" element={<AuditPage/>}>
        <Route path='addAudit' element={<AddAuditPage/>}/>
        </Route>
        {/* Rutas para la página de certificaciones */}
        <Route path="/certification" element={<CertificationPage/>}>
        <Route path='addCertification' element={<AddCertificationPage/>}/>
        </Route>
        {/* Ruta de la página para las normas ISO */}
        <Route path="/isoRule" element={<IsoRulePage/>}>
          <Route path='addIsoRule' element={<AddIsoRulePage/>}/>
        </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
  )
}

export default RoutesWINICG