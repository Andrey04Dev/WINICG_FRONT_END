import {http} from './http-content'

const GetAllProcess = async () => {
    try {
      const res = await http.get("/Process");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetProcessById = async (id) => {
    try {
      const res = await http.get("/Process", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddProcess = async (data) => {
    try {
      const res = await http.post("/Process/addProcess", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateProcess = async (data, id) => {
    try {
      const res = await http.put(`/Process/updateProcess/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteProcess = async (id) => {
    try {
      const res = await http.delete(`/Process/deleteProcess/${id}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const ProcessService = {
    GetAllProcess,
    GetProcessById,
    AddProcess,
    UpdateProcess,
    DeleteProcess,
  };
  
  export default ProcessService