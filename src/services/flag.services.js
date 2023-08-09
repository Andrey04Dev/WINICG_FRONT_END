import {http} from './http-content'

const GetAllFlag = async () => {
    try {
      const res = await http.get("/Flag");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetFlagById = async (id) => {
    try {
      const res = await http.get("/Flag", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddFlag = async (data) => {
    try {
      const res = await http.get("/Flag/addFlag", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateFlag = async (data, id) => {
    try {
      const res = await http.put(`/Flag/updateFlag/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteFlag = async (id) => {
    try {
      const res = await http.delete(`/Flag/deleteFlag/${id}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const FlagService = {
    GetAllFlag,
    GetFlagById,
    AddFlag,
    UpdateFlag,
    DeleteFlag,
  };
  
  export default FlagService