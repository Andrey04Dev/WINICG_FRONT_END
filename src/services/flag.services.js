import {http} from './http-content'

const GetAllFlag = async () => {
    try {
      const res = await http.get("/Flag");
      console.log("LO indicadores que mano", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetCountFlag = async () => {
    try {
      const res = await http.get("/Flag/getCountFlag");
      console.log("LO indicadores que mano", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const GetFlagById = async (id) => {
    try {
      const res = await http.get(`/Flag/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddFlag = async (data) => {
    try {
      const res = await http.post("/Flag/addFlag", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateFlag = async (data, id) => {
    try {
      const res = await http.put(`/Flag/updateFlag/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteFlag = async (id) => {
    try {
      const res = await http.delete(`/Flag/deleteFlag/${id}`);
      return res.data;
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
    GetCountFlag
  };
  
  export default FlagService