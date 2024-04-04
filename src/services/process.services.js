import {http} from './http-content'

const GetAllProcess = async () => {
    try {
      const res = await http.get("/Process");
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const GetCountProcess = async () => {
    try {
      const res = await http.get("/Process/getCountProcess");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetProcessById = async (id) => {
    try {
      const res = await http.get(`/Process/${id}`);
      console.log(res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddProcess = async (data) => {
    try {
      const res = await http.post("/Process/addProcess", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateProcess = async (data, id) => {
    try {
      const res = await http.put(`/Process/updateProcess/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteProcess = async (id) => {
    try {
      const res = await http.delete(`/Process/deleteProcess/${id}`);
      return res.data;
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
    GetCountProcess
  };
  
  export default ProcessService