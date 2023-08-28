import {http} from './http-content'

const GetAllRisk = async () => {
    try {
      const res = await http.get("/Risk");
      console.log(res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetRiskById = async (id) => {
    try {
      const res = await http.get(`/Risk/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddRisk = async (data) => {
    try {
      const res = await http.post("/Risk/addRisk", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateRisk = async (data, id) => {
    try {
      const res = await http.put(`/Risk/updateRisk/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteRisk = async (id) => {
    try {
      const res = await http.delete(`/Risk/deleteRisk/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const RiskService = {
    GetAllRisk,
    GetRiskById,
    AddRisk,
    UpdateRisk,
    DeleteRisk,
  };
  
  export default RiskService