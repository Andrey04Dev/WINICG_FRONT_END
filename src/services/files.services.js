import { http } from "./http-content";

const AddFiles = async (data) => {
  try {
    console.log("Lo que entra en el addfiles", data)
    const res = await http.post("/Files/addFiles", data);
    return res.data;
  } catch (error) {
    return error;
  }
};
const GetCountFile = async() =>{
    try {
        const res =  await http.get(`/Files/getCountFiles`)
        return res.data
    } catch (error) {
        return error
    }
}
const GetFilesByIdModule = async(id) =>{
    try {
        const res =  await http.get(`/Files/getFilesById/${id}`)
        return res.data
    } catch (error) {
        return error
    }
}

const DeleteFiles= async(idmodule,idfile) =>{
    try {
        const res =  await http.delete(`/Files/deleteFile/${idmodule}/${idfile}`)
        return res.data
    } catch (error) {
        return error
    }
}

const FilesService = {
    AddFiles, 
    GetFilesByIdModule, 
    DeleteFiles, 
    GetCountFile
}

export default FilesService