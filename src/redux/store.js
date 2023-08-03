import AuditSlice from './auditSlice'
import CertificationSlice from './certificationSlice'
import CompanyPositionSlice from './companyPositionSlice'
import FlagsSlice from './flagSlice'
import IsoRulesSlice from './isoRuleSlice'
import NoAccordanceSlice from './noAccordanceSlice'
import ProcessSlice from './processSlice'
import RiskSlice from './risksSlice'
import RolesSlice from './rolesSlice'
import TaskSlice from './taskSlice'
import UserSlice from './userSlice'

const { configureStore } = require("@reduxjs/toolkit")

const reducer = {
    audit: AuditSlice,
   certification: CertificationSlice,
   companyPosition : CompanyPositionSlice, 
   flag:FlagsSlice,
   isoRule: IsoRulesSlice, 
   noAccordance: NoAccordanceSlice, 
   process: ProcessSlice, 
   risk: RiskSlice,
   roles: RolesSlice,
   tasks: TaskSlice,
   users: UserSlice
}

const  store =   configureStore({
    reducer:reducer, 
    devTools:true,
    //middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})

export default store