import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkPosition = [
  {
    text:"Add",
    position:"top", 
    to:"addPosition",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updatePosition/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deletePosition/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnPosition = [
    columnHelper.accessor("idposition",{
        header: "ID"
    }),
  {
    accessorKey:'positionjob',
    header: " Posición",
  },
  {
    accessorKey: "description",
    header: " Descripción",
  },
  {
    accessorKey: "area",
    header: " Área",
  },
  {
    accessorKey: "personchange",
    header: " Usuario que actualizó",
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
      return (<><BtnGroupList array={ArrayLinkPosition} params={row.original.idposition}/></>)
    }
  },
];