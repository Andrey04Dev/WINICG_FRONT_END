import {http} from './http-content'

const AddHistorial = async(data) =>{
try {
    console.log("Informacion del history",data)
    const res = await http.post("/Historial/addHistory", data)
    return res.data
} catch (error) {
    return error
}
}
const GetHistorialbyIdModule = async(id) =>{
    try {
        const res =  await http.get(`/Historial/getHistorialById/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}

const HistorialServices = {
    AddHistorial, 
    GetHistorialbyIdModule
}

export default HistorialServices
