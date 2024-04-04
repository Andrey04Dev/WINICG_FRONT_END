import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkIsoRule = [
  {
    text:"Add",
    position:"top", 
    to:"addIsoRule",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateIsoRule/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteIsoRule/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnIsoRule = [
    columnHelper.accessor("idrule",{
        header: "ID"
    }),
  {
    accessorKey:'certification',
    header: " Certificación",
    cell: ({getValue}) => getValue().certificatioN_NAME
  },
  {
    accessorKey: "audits",
    header: " Auditoria",
    cell: ({getValue}) => getValue().nameaudit
  },
  {
    accessorKey: "namerule",
    header: " Norma ISO",
  },
  {
    accessorKey: "rulE_DESCRIPTION",
    header: " Descripción",
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
      return (<><BtnGroupList array={ArrayLinkIsoRule} params={row.original.idrule}/></>)
    }
  },
];