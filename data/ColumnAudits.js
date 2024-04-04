import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkAudit = [
  {
    text:"Add",
    position:"top", 
    to:"addAudit",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateAudit/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteAudit/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnAudit = [
    columnHelper.accessor("idaudit",{
        header: "ID"
    }),
  {
    accessorKey:'nameaudit',
    header: " Nombre de auditoría",
  },
  {
    accessorKey: "audiT_DATE",
    header: " Fecha de auditoría",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("DD-MMM-YYYY")
  },
  {
    accessorKey: "audiT_TIME",
    header: " Hora de auditoría",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("HH:MM:SS")
  },
  {
    accessorKey: "topiC_AUDIT",
    header: " Tema de auditoría",
  },
  {
    accessorKey: "numbeR_DAY",
    header: " Duración en días",
  },
  {
    accessorKey: "goaL_AUDIT",
    header: " Meta",
  },
  {
    accessorKey: "audiT_PROCESS",
    header: " Proceso de auditoría",
  },
  {
    accessorKey: "audiT_RULE",
    header: " Regla a auditar",
  },
  {
    accessorKey: "personchange",
    header: "Persona  que actualiza",
  },
  {
    accessorKey: "createdate",
    header: " Fecha de creación",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("DD-MMM-YYYY")
  },
  {
    accessorKey: "updatedate",
    header: " Fecha de actualización",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("DD-MMM-YYYY")
  },
  {
    accessorKey: "action",
    header: " Acciones",
    cell: ({row}) =>  {
      return (<><BtnGroupList array={ArrayLinkAudit} params={row.original.idaudit}/></>)
    }
  },
];