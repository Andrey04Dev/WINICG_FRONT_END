import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkTask = [
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
    to:"updateTasks/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteTasks/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnTask = [
    columnHelper.accessor("idtask",{
        header: "ID"
    }),
  {
    accessorKey:'users',
    header: " Nombre Completo",
    cell: ({getValue}) =>getValue().fullname
  },
  {
    accessorKey: "isorule",
    header: " Norma ISO",
    cell: ({getValue}) => getValue().namerule
  },
  {
    accessorKey: "flags",
    header: " Nombre del indicador",
    cell: ({getValue}) => getValue().flagname
  },
  {
    accessorKey: "project",
    header: " Proyecto",
  },
  {
    accessorKey: "evenT_TASK",
    header: "Evento de tarea",
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
      return (<><BtnGroupList array={ArrayLinkTask} params={row.original.idtask}/></>)
    }
  },
];