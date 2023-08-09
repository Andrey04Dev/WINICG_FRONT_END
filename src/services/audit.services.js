import {http} from './http-content'

const GetAllAudit = async () => {
    try {
      const res = await http.get("Audit");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetAuditById = async (id) => {
    try {
      const res = await http.get("Audit", id);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddAudit = async (data) => {
    try {
      console.log("Antes de services de aduit", data)
      const res = await http.post("Audit/addAudit", data);
      console.log("Despues de services de aduit", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateAudit = async (data, id) => {
    try {
      const res = await http.put(`Audit/updateAudit/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteAudit = async (id) => {
    try {
      const res = await http.delete(`Audit/deleteAudit/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AuditService = {
    GetAllAudit,
    GetAuditById,
    AddAudit,
    UpdateAudit,
    DeleteAudit,
  };
  
  export default AuditService