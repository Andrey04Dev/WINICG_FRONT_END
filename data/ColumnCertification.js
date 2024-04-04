import {createColumnHelper} from '@tanstack/react-table'
import moment from 'moment'
import BtnGroupList from '../common/BtnGroupList';
const columnHelper = createColumnHelper()

const ArrayLinkCertification = [
  {
    text:"Add",
    position:"top", 
    to:"addCertification",
    className:"btn btn-primary mx-2", 
    icon:"plus"
  }, 
  {
    text:"Update",
    position:"top", 
    to:"updateCertification/",
    className:"btn btn-warning mx-2", 
    icon:"pen"
  },
  {
    text:"Delete",
    position:"top", 
    to:"deleteCertification/",
    className:"btn btn-danger mx-2", 
    icon:"trash"
  }
]

export const ColumnCertification = [
    columnHelper.accessor("idcertification",{
        header: "ID"
    }),
  {
    accessorKey:'certificatioN_NAME',
    header: " Certificación",
  },
  {
    accessorKey: "certificatioN_DATE",
    header: " Fecha de certificación",
    cell: ({getValue}) =>  moment( new Date(getValue())).format("DD-MMM-YYYY")
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
      return (<><BtnGroupList array={ArrayLinkCertification} params={row.original.idrule}/></>)
    }
  },
];