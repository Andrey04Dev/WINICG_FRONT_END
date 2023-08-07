import * as yup from "yup"

export const ValidationAudit =  yup.object({
    auditName: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditDate: yup.date("Escoger un fecha").required("El campo es requerido").default(() => new Date()),
    auditTime: yup.string().required("El campo es requerido"),
    auditSubject: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    numberDays: yup.number("Solo escribir numeros").required("El campo es requerido"),
    kindAudit: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    scopeDay: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditProcess: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditRule: yup.string().required("El campo es requerido"),
})

export const ValidationCertification = yup.object({
    certificationName : yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    certificationDate: yup.date("Escoger un fecha").required("El campo es requerido").default(() => new Date()),
})

export const ValidationCompanyPosition = yup.object({
    idUser: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    idProcess : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    mandated: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    description: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    responsability: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    profilePosition: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras")
})

export const ValidationFlag =  yup.object({
    idIsoRule: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    flagName: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
})

export const ValidationIsoRule = yup.object({
    idCertification: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar unas de la opciones"),
    idAudit: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    nameRule: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    codeRule: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    ruleDescription :  yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras")
})

export const ValidationNoAccordance = yup.object({
    idProcess : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    nameNoAccordance: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    kind: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    ranking: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    auditDetect: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
})

export const ValidationProcess = yup.object({
    idRule : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar unas de la opciones"),
    codeProcess: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    chargePerson: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    rolesInvolves: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
})

export const ValidationRisk = yup.object({
    idRule : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar unas de la opciones"),
    nameRisks: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    consequense: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    sourceRisk: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
})

export const ValidationRole = yup.object({
    role: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras")
})

export const ValidationTasks = yup.object({
    idUser : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    idRule : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    idFlag : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    project: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    eventTask: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
})

export const ValidationUser = yup.object({
    idRole : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    id: yup.string().required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
    email: yup.string().email("Esto no es un correo").required("El campo es requerido").matches(/^[aA-zZ]+$/, "Solo ingrese letras"),
})