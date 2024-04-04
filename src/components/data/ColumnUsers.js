import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkUser = [
  {
    text:"Add",
    position:"top", 
    to:"addUsers",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateUsers/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteUsers/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnDef = [
    columnHelper.accessor("iduser",{
        header: "ID"
    }),
  {
    accessorKey:'fullname',
    header: " Nombre completo",
  },
  {
    accessorKey: "cedula",
    header: " Cedula",
  },
  {
    accessorKey: "email",
    header: " Correo",
  },
  {
    accessorKey: "active",
    header: " Estado",
    cell: ({getValue}) => getValue() === true ? "Activo":"Inactivo"
  },
  {
    accessorKey: "changeperson",
    header: "Persona actualizada",
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
      return (<><BtnGroupList array={ArrayLinkUser} params={row.original.iduser}/></>)
    }
  },
];