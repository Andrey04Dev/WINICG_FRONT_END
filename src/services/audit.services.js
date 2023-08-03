import {http} from './http-content'

const GetAllAudit = async () => {
    try {
      const res = await http.get("/Audit");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetAuditById = async (id) => {
    try {
      const res = await http.get("/Audit", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddAudit = async (data) => {
    try {
      const res = await http.get("/Audit", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateAudit = async (data, id) => {
    try {
      const res = await http.get(`/Audit/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteAudit = async (id) => {
    try {
      const res = await http.get(`/Audit/${id}`);
      return res;
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