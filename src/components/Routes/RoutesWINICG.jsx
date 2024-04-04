import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Spinner from "../common/Spinner";
import PrivateRoute from "../common/PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import { useSelector } from "react-redux";

const RoutesWINICG = () => {
  //Lazy de la auditorias
  const AddAuditPage = lazy(() => import("../Pages/Audit/AddAuditPage"));
  const AuditPage = lazy(() => import("../Pages/Audit/AuditPage"));
  const UpdateAuditPage = lazy(() => import("../Pages/Audit/UpdateAuditPage"));
  const DeleteAuditPage = lazy(() => import("../Pages/Audit/DeleteAuditPage"));
  //Lazy de la certificaciones
  const AddCertificationPage = lazy(() =>
    import("../Pages/Certification/AddCertification")
  );
  const CertificationPage = lazy(() =>
    import("../Pages/Certification/CertificationPage")
  );
  const UpdateCertificationPage = lazy(() =>
    import("../Pages/Certification/UpdateCertificationPage")
  );
  const DeleteCertificationPage = lazy(() =>
    import("../Pages/Certification/DeleeteCertificationPage")
  );
  //Lazy de normas ISO
  const AddIsoRulePage = lazy(() => import("../Pages/IsoRule/AddIsoRulePage"));
  const IsoRulePage = lazy(() => import("../Pages/IsoRule/IsoRulePage"));
  const UpdateIsoRulePage = lazy(() =>
    import("../Pages/IsoRule/UpdateIsoRulePage")
  );
  const DeleteIsoRulePage = lazy(() =>
    import("../Pages/IsoRule/DeleteIsoRulePage")
  );
  //Lista de paginas  de position
  const CompanyPositionPage = lazy(() =>
    import("../Pages/CompanyPosition/CompanyPositionPage")
  );
  const AddCompanyPositionPage = lazy(() =>
    import("../Pages/CompanyPosition/AddCompanyPositionPage")
  );
  const UpdateCompanyPositionPage = lazy(() =>
    import("../Pages/CompanyPosition/UpdateComapinyPositionPage")
  );
  const DeleteCompanyPositionPage = lazy(() =>
    import("../Pages/CompanyPosition/DeleteCompanyPositionPage")
  );
  //LIsta ruta de indicadores
  const AddFlagPage = lazy(() => import("../Pages/Flag/AddFlagPage"));
  const FlagPage = lazy(() => import("../Pages/Flag/FlagPage"));
  const UpdateFlagPage = lazy(() => import("../Pages/Flag/UpdateFlagPage"));
  const DeleteFlagPage = lazy(() => import("../Pages/Flag/DeleteFlagPage"));
  //LIsta ruta de no confomromidades
  const AddNoAcoordancePage = lazy(() =>
    import("../Pages/NoAccordannce/AddNoAcoordance")
  );
  const NoAccordancePage = lazy(() =>
    import("../Pages/NoAccordannce/NoAccordancePage")
  );
  const UpdateNoAccordancePage = lazy(() =>
    import("../Pages/NoAccordannce/UpdateNoAccordancePage")
  );
  const DeleteNoAccordancePage = lazy(() =>
    import("../Pages/NoAccordannce/DeleteNoAccordancePAge")
  );
  const AddFilesNoAccordancePage = lazy(() =>
    import("../Pages/NoAccordannce/AddFilesNoAccordancePage")
  );
  const ShowFilesNoAccordancePage = lazy(() =>
    import("../Pages/NoAccordannce/ShowFilesNoAccordancePage")
  );
  //lista de ruta de posiciones
  const Positionpage = lazy(() => import("../Pages/Position/PositionPage"));
  const AddPositionPage = lazy(() =>
    import("../Pages/Position/AddPositionPage")
  );
  const DeletePositionPage = lazy(() =>
    import("../Pages/Position/DeletePositionPage")
  );
  const UpdatePositionPage = lazy(() =>
    import("../Pages/Position/UpdatePositionPage")
  );
  //LIsta ruta de processo
  const AddProcessPage = lazy(() => import("../Pages/Process/AddProcessPage"));
  const ProcessPage = lazy(() => import("../Pages/Process/ProcessPage"));
  const UpdateProcessPage = lazy(() =>
    import("../Pages/Process/UpdateProcessPage")
  );
  const DeleteProcessPage = lazy(() =>
    import("../Pages/Process/DeleteProcessPage")
  );
  //Lista rutas de la pagina de riesgos
  const AddRisksPage = lazy(() => import("../Pages/Risks/AddRiskPage"));
  const RisksPage = lazy(() => import("../Pages/Risks/RisksPage"));
  const UpdateRisksPage = lazy(() => import("../Pages/Risks/UpdateRiskPage"));
  const DeleteRisksPage = lazy(() => import("../Pages/Risks/DeleteRiskPage"));
  const AddFilesRisksPage = lazy(() => import("../Pages/Risks/AddFilesPages"));
  const ShowFilesRisksPage = lazy(() => import("../Pages/Risks/ShowFilesRiskPage"));
  
  //Lista rutas de la pagina de roles
  const AddRolesPage = lazy(() => import("../Pages/Roles/AddRolePage"));
  const RolesPage = lazy(() => import("../Pages/Roles/RolesPage"));
  const UpdateRolesPage = lazy(() => import("../Pages/Roles/UpdateRolePage"));
  const DeleteRolesPage = lazy(() => import("../Pages/Roles/DeleteRolePage"));
  //Lista rutas de la pagina de task
  const AddTasksPage = lazy(() => import("../Pages/Tasks/AddTaskPage"));
  const TasksPage = lazy(() => import("../Pages/Tasks/TasksPage"));
  const UpdateTasksPage = lazy(() => import("../Pages/Tasks/UpdateTaskPage"));
  const DeleteTasksPage = lazy(() => import("../Pages/Tasks/DeleteTaskPage"));

  //Lista de rutas de pagina de usuarios
  const AddUsersPage = lazy(() => import("../Pages/Users/AddUserPage"));
  const UsersPage = lazy(() => import("../Pages/Users/UsersPage"));
  const UpdateUsersPage = lazy(() => import("../Pages/Users/UpdateUserPage"));
  const DeleteUsersPage = lazy(() => import("../Pages/Users/DeleteUserPage"));
  return (
    <BrowserRouter>
      <Suspense
        fallback={<Spinner style={{ height: "100vh", width: "100vw" }} />}
      >
        <Routes>
          {/* Ruta de la página principal */}
          <Route path="/" element={<Home />}></Route>
          {/* Rutas para la página de auditoria */}
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
            <Route path="/audit" element={<AuditPage />}>
              <Route path="addAudit" element={<AddAuditPage />} />
              <Route path="updateAudit/:id" element={<UpdateAuditPage />} />
              <Route path="deleteAudit/:id" element={<DeleteAuditPage />} />
            </Route>
            {/* Rutas para la página de certificaciones */}
            <Route path="/certification" element={<CertificationPage />}>
              <Route
                path="addCertification"
                element={<AddCertificationPage />}
              />
              <Route
                path="updateCertification/:id"
                element={<UpdateCertificationPage />}
              />
              <Route
                path="deleteCertification/:id"
                element={<DeleteCertificationPage />}
              />
            </Route>
            {/* Ruta de la página para las normas ISO */}
            <Route path="/isoRule" element={<IsoRulePage />}>
              <Route path="addIsoRule" element={<AddIsoRulePage />} />
              <Route path="updateIsoRule/:id" element={<UpdateIsoRulePage />} />
              <Route path="deleteIsoRule/:id" element={<DeleteIsoRulePage />} />
            </Route>
            {/* Rutas de  p[agina de agregar position] */}
            <Route path="/company_position" element={<CompanyPositionPage />}>
              <Route
                path="addCompanyPosition"
                element={<AddCompanyPositionPage />}
              />
              <Route
                path="updateCompanyPosition/:id"
                element={<UpdateCompanyPositionPage />}
              />
              <Route
                path="deleteCompanyPosition/:id"
                element={<DeleteCompanyPositionPage />}
              />
            </Route>
            {/* Rutas de  pagina de agregar indicadores] */}
            <Route path="/flag" element={<FlagPage />}>
              <Route path="addFlag" element={<AddFlagPage />} />
              <Route path="updateFlag/:id" element={<UpdateFlagPage />} />
              <Route path="deleteFlag/:id" element={<DeleteFlagPage />} />
            </Route>
            {/* Rutas de  pagina de agregar las no conformidades] */}
            <Route path="/noAccordance" element={<NoAccordancePage />}>
              <Route path="addNoAccordance" element={<AddNoAcoordancePage />} />
              <Route
                path="updateNoAccordance/:id"
                element={<UpdateNoAccordancePage />}
              />
              <Route
                path="deleteNoAccordance/:id"
                element={<DeleteNoAccordancePage />}
              />
              <Route
                path="addFilesNoAccordance/:id"
                element={<AddFilesNoAccordancePage />}
              />
              <Route
                path="showFilesNoAccordance/:id"
                element={<ShowFilesNoAccordancePage />}
              />
            </Route>
            {/* Rutas de  pagina de agregar las posiciones] */}
            <Route path="/position" element={<Positionpage />}>
              <Route path="addPosition" element={<AddPositionPage />} />
              <Route
                path="deletePosition/:id"
                element={<DeletePositionPage />}
              />
              <Route
                path="updatePosition/:id"
                element={<UpdatePositionPage />}
              />
            </Route>
            {/* Rutas de  pagina de agregar los process] */}
            <Route path="/process" element={<ProcessPage />}>
              <Route path="addProcess" element={<AddProcessPage />} />
              <Route path="updateProcess/:id" element={<UpdateProcessPage />} />
              <Route path="deleteProcess/:id" element={<DeleteProcessPage />} />
            </Route>
            {/* Rutas de  pagina de agregar los riesgos] */}
            <Route path="/risks" element={<RisksPage />}>
              <Route path="addRisks" element={<AddRisksPage />} />
              <Route path="updateRisks/:id" element={<UpdateRisksPage />} />
              <Route path="deleteRisks/:id" element={<DeleteRisksPage />} />
              <Route path="addFilesRisks/:id" element={<AddFilesRisksPage />} />
              <Route path="showFilesRisk/:id" element={<ShowFilesRisksPage />} />
            </Route>
            {/* Rutas de  pagina de agregar los roles] */}
            <Route path="/roles" element={<RolesPage />}>
              <Route path="addRoles" element={<AddRolesPage />} />
              <Route path="updateRoles/:id" element={<UpdateRolesPage />} />
              <Route path="deleteRoles/:id" element={<DeleteRolesPage />} />
            </Route>

            {/* Rutas de  pagina de agregar las tareas] */}
            <Route path="/tasks" element={<TasksPage />}>
              <Route path="addTasks" element={<AddTasksPage />} />
              <Route path="deleteTasks/:id" element={<UpdateTasksPage />} />
              <Route path="updateTasks/:id" element={<DeleteTasksPage />} />
            </Route>
            {/* Rutas de  pagina de agregar los usuarios] */}
            <Route path="/users" element={<UsersPage />}>
              <Route path="addUsers" element={<AddUsersPage />} />
              <Route path="updateUsers/:id" element={<UpdateUsersPage />} />
              <Route path="deleteUsers/:id" element={<DeleteUsersPage />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RoutesWINICG;
