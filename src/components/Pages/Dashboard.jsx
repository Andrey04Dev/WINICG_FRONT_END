import React, { useCallback, useEffect, useState } from 'react'
import Navbar from '../common/Navbar';
import HeaderLogged from '../common/HeaderLogged';
import { useDispatch, useSelector } from 'react-redux';
import { GetCountAudits } from '../../redux/auditSlice';
import Icon from '../common/Icon';
import { GetCountCertification } from '../../redux/certificationSlice';
import { GetCountFiles } from '../../redux/filesSlice';
import { GetCountFlags } from '../../redux/flagSlice';
import { GetCountIsoRules } from '../../redux/isoRuleSlice';
import { GetCountNoAccordance } from '../../redux/noAccordanceSlice';
import { GetCountPositions } from '../../redux/positionSlice';
import { GetCountProcess } from '../../redux/processSlice';
import { GetCountRisk } from '../../redux/risksSlice';
import { GetCountRoles } from '../../redux/rolesSlice';
import { GetCountTask } from '../../redux/taskSlice';
import { GetCountUser } from '../../redux/userSlice';

const Dashboard = () => {
    const [reduceMenu, setReduceMenu] = useState(true);
    const dispatch =  useDispatch()
    const {audits} = useSelector(state=>state.audit)
    const {certification} = useSelector(state=>state.certification)
    const {flags} = useSelector(state=>state.flag)
    const {isoRules} = useSelector(state=>state.isoRule)
    const {NoAccordance} = useSelector(state=>state.noAccordance)
    const {Process} = useSelector(state=>state.process)
    const {Risk} = useSelector(state=>state.risk)
    const {Roles} = useSelector(state=>state.roles)
    const {Task} = useSelector(state=>state.tasks)
    const {Positions} = useSelector(state=>state.position)
    const {user} = useSelector(state=>state.users)
    const {files} = useSelector(state=>state.files)
  const handleReduceMenu = () => {
    setReduceMenu(!reduceMenu);
  };
  
  const initialState = useCallback(
    () => {
      dispatch(GetCountAudits())
      dispatch(GetCountCertification())
      dispatch(GetCountFiles())
      dispatch(GetCountFlags())
      dispatch(GetCountIsoRules())
      dispatch(GetCountNoAccordance())
      dispatch(GetCountPositions())
      dispatch(GetCountProcess())
      dispatch(GetCountRisk())
      dispatch(GetCountRoles())
      dispatch(GetCountTask())
      dispatch(GetCountUser())
    },
    [dispatch],
  )
  

  useEffect(() => {
    initialState()
    
    return () => {
    }
  }, [initialState])
  
  return (
    <div className='row'>
        <div className={reduceMenu ? "width_menu col-1" : "container_menu col-3"}>
          <Navbar onClick={handleReduceMenu} show={reduceMenu}/>
        </div>
        <div className={reduceMenu ? "col-md-11" : "col-md-9"}>
          <HeaderLogged/>
        <div className='row justify-content-center '>
          <div className='col-md-4 bg-danger text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{audits}</h2>
            <div className='d-flex justify-content-center'>
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "user-tie"]} />
            <h2 className='text-white fa-2x'>Auditoría</h2>
            </div>
          </div>
          <div className='col-md-4 bg-success text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{certification}</h2>
            <div className='d-flex justify-content-center'>
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "certificate"]} />
            <h2 className='text-white'>Certificaciones</h2>
            </div>
          </div>
          <div className='col-md-4 bg-info text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{files}</h2>
            <div className="d-flex justify-content-center"><Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "certificate"]} />
            <h2 className='text-white'>Archivos</h2></div>
          </div>
          <div className='col-md-4 bg-secondary text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{flags}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "flag"]} />
            <h2 className='text-white'>Indicadores</h2>
            </div>
          </div>
          <div className='col-md-4 bg-warning text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{isoRules}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "ruler"]} />
            <h2 className='text-white'>Normas ISO</h2>
            </div>
          </div>
          <div className='col-md-4 bg-primary text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{NoAccordance}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "briefcase"]} />
            <h2 className='text-white'>No conformidades</h2>
            </div>
          </div>
          <div className='col-md-4 bg-orange text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{Positions}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "briefcase"]} />
            <h2 className='text-white'>Posiciones</h2>
            </div>
          </div>
          <div className='col-md-4 bg-lila text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{Process}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "arrow-trend-up"]} />
            <h2 className='text-white'>Procesos</h2>
            </div>
          </div>
          <div className='col-md-4 bg-dark text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{Risk}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "triangle-exclamation"]} />
            <h2 className='text-white'>Riesgos</h2>
            </div>
          </div>
          <div className='col-md-4 bg-morado text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{Roles}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "user-gear"]} />
            <h2 className='text-white'>Roles</h2>
            </div>
          </div>
          <div className='col-md-4 bg-verde-claro text-center mx-3 my-3 opacity-75'>
            <h2 className="text-white">{Task}</h2>
            <div className="d-flex justify-content-center">
            <Icon className={"mx-3 my-1 fa-2x text-white"} icon={["fas", "list-check"]} />
            <h2 className='text-white'>Tareas</h2>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard