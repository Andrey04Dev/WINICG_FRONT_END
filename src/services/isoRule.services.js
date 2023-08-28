import {http} from './http-content'

const GetAllIsoRule = async () => {
    try {
      const res = await http.get("/IsoRule");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetIsoRuleById = async (id) => {
    try {
      const res = await http.get("/IsoRule", id);
      console.log(res.data)

      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddIsoRule = async (data) => {
    try {
      const res = await http.post("/IsoRule/addIsoRule", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateIsoRule = async (data, id) => {
    try {
      const res = await http.put(`/IsoRule/updateIsoRule/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteIsoRule = async (id) => {
    try {
      const res = await http.delete(`/IsoRule/deleteIsoRule/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const IsoRuleService = {
    GetAllIsoRule,
    GetIsoRuleById,
    AddIsoRule,
    UpdateIsoRule,
    DeleteIsoRule,
  };
  
  export default IsoRuleService