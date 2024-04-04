import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkProcess = [
  {
    text:"Add",
    position:"top", 
    to:"addProcess",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateProcess/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteProcess/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnProcess = [
    columnHelper.accessor("idprocess",{
        header: "ID"
    }),
  {
    accessorKey:'isorule',
    header: " Norma ISO",
    cell: ({getValue}) =>getValue().namerule
  },
  {
    accessorKey: "processname",
    header: " Nombre del proceso",
  },
  {
    accessorKey: "chargE_PERSON",
    header: " Persona a cargo",
  },
  {
    accessorKey: "rolE_INVOLVES",
    header: " Rol implicado",
  },
  {
    accessorKey: "personchange",
    header: "Persona que actualiza",
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
      return (<><BtnGroupList array={ArrayLinkProcess} params={row.original.iduser}/></>)
    }
  },
];