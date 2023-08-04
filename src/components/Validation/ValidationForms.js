import * as yup from "yup"

export const ValidationRoles =  yup.object({
    auditName: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditDate: yup.date("Escoger un fecha").required("El campo es requerido").default(() => new Date()),
    auditTime: yup.string().required("El campo es requerido"),
    auditSubject: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    numberDays: yup.number("Solo escribir numeros").required("El campo es requerido"),
    kindAudit: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar unas de la opciones"),
    scopeDay: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditProcess: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditRule: yup.string().required("El campo es requerido"),
})