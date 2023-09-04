import * as yup from "yup"

export const ValidationAudit =  yup.object({
    audit_Name: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    audit_Date: yup.date("Escoger un fecha").required("El campo es requerido").default(() => new Date()),
    audit_Time: yup.string().required("El campo es requerido"),
    audit_Subject: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    number_Days: yup.number("Solo escribir numeros").required("El campo es requerido"),
    kind_Audit: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    scope_Audit: yup.string().required("El campo es requerido"),
    audit_Process: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    audit_Rule: yup.string().required("El campo es requerido"),
})

export const ValidationCertification = yup.object({
    certification_name : yup.string().required("El campo es requerido"),
    certificacion_date: yup.date("Escoger un fecha").required("El campo es requerido").default(() => new Date()),
})

export const ValidationCompanyPosition = yup.object({
    idUser: yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    idProcess : yup.string().required("El campo es requerido").oneOf(["Interna","Externa"],"Solo selecionar una de la opciones"),
    mandated: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    description: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    responsabilities: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    profile_Position: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
})

export const ValidationFlag =  yup.object({
    idrule: yup.string().required("El campo es requerido"),
    flagName: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
})

export const ValidationIsoRule = yup.object({
    idCertification: yup.string(),
    idAudit: yup.string(),
    nameRule: yup.string().required("El campo es requerido"),
    codeRule: yup.string().required("El campo es requerido"),
    rule_description :  yup.string()
})

export const ValidationNoAccordance = yup.object({
    idProcess : yup.string().required("El campo es requerido"),
    idaudit : yup.string().required("El campo es requerido"),
    idtask : yup.string().required("El campo es requerido"),
    name_No_Accordance: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍáÁ _]*[ñA-Za-zéíÉÍáÁ][ñA-Za-zéíÉÍáÁ _]*$/, "Solo ingrese letras"),
    kind: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍáÁ _]*[ñA-Za-zéíÉÍáÁ][ñA-Za-zéíÉÍáÁ _]*$/, "Solo ingrese letras"),
    ranking: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉáÁÍ _]*[ñA-Za-zéíÉÍáÁ][ñA-Za-zéíÉÍáÁ _]*$/, "Solo ingrese letras"),
    description: yup.string().required("El campo es requerido"),
    state: yup.string().required("El campo es requerido"),
    audit_Detect: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉáÁÍ _]*[ñA-Za-zéíÉÍáÁ][ñA-Za-zéíÉÍáÁ _]*$/, "Solo ingrese letras"),
})

export const ValidationProcess = yup.object({
    idRule : yup.string().required("El campo es requerido"),
    codeProcess: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ 0-9 _]*[ñA-Za-zéíÉÍ 0-9][ñA-Za-zéíÉÍ 0-9 _]*$/, "Solo ingrese letras o numeros"),
    processname: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ 0-9 _]*[ñA-Za-zéíÉÍ 0-9][ñA-Za-zéíÉÍ 0-9 _]*$/, "Solo ingrese letras o numeros"),
    charge_Person: yup.string().required("El campo es requerido"),
    role_Involves: yup.string().required("El campo es requerido"),
})

export const ValidationRisk = yup.object({
    idRule : yup.string().required("El campo es requerido"),
    nameRisks: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    origen: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    consequense: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    source_risk: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    state: yup.string().required("El campo es requerido"),
})

export const ValidationRole = yup.object({
    role: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras")
})

export const ValidationTasks = yup.object({
    idUser : yup.string().required("El campo es requerido"),
    idRule : yup.string().required("El campo es requerido"),
    idFlags : yup.string().required("El campo es requerido"),
    project: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    event_task: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
})

export const ValidationUser = yup.object({
    idRole : yup.string().required("El campo es requerido"),
    idPosition : yup.string().required("El campo es requerido"),
    cedula: yup.string().required("El campo es requerido"),
    fullname: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    email: yup.string().email("Esto no es un correo").required("El campo es requerido"),
    password: yup.string().required("El campo es requerido")
})

export const ValidationPosition = yup.object({
    positionjob: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    description: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras"),
    area: yup.string().required("El campo es requerido").matches(/^[ñA-Za-zéíÉÍ _]*[ñA-Za-zéíÉÍ][ñA-Za-zéíÉÍ _]*$/, "Solo ingrese letras")
})

export const ValidationLogin = yup.object({
    email: yup.string().required("El campo es requerido"),
    password: yup.string().required("El campo es requerido")
})