import {http} from './http-content'

const GetAllRisk = async () => {
    try {
      const res = await http.get("/Risk");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetRiskById = async (id) => {
    try {
      const res = await http.get("/Risk", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddRisk = async (data) => {
    try {
      const res = await http.get("/Risk", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateRisk = async (data, id) => {
    try {
      const res = await http.get(`/Risk/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteRisk = async (id) => {
    try {
      const res = await http.get(`/Risk/${id}`);
      return res;
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