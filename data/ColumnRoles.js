import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkRoles= [
  {
    text:"Add",
    position:"top", 
    to:"addRoles",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateRoles/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteRoles/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnRoles = [
    columnHelper.accessor("idrole",{
        header: "ID"
    }),
  {
    accessorKey:'role',
    header: " Role",
    cell: ({getValue}) =>getValue().fullname
  },
  {
    accessorKey: "personchange",
    header: " Persona que actualiza",
    cell: ({getValue}) => getValue().namerule
  },
  {
    accessorKey: "createdate",
    header: " Fecha de creación",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("DD-MMM-YYYY")
  },
  {
    accessorKey: "updatedate",
    header: " Fecha de actualización",
    cell: ({getValue}) => {return getValue ? moment( new Date(getValue())).format("DD-MMM-YYYY") : "No se ha actualizado"}
  },
  {
    accessorKey: "action",
    header: " Acciones",
    cell: ({row}) =>  {
      return (<><BtnGroupList array={ArrayLinkRoles} params={row.original.idtask}/></>)
    }
  },
];