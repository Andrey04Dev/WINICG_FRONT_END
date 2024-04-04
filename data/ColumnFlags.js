import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkFlags = [
  {
    text:"Add",
    position:"top", 
    to:"addFlag",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateFlag/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteFlag/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnFlags = [
    columnHelper.accessor("idflag",{
        header: "ID"
    }),
  {
    accessorKey:'isorule',
    header: " Norma ISO",
    cell: ({getValue}) => getValue().namerule
  },
  {
    accessorKey: "flagname",
    header: " Nombre de indicador",
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
      return (<><BtnGroupList array={ArrayLinkFlags} params={row.original.idrule}/></>)
    }
  },
];