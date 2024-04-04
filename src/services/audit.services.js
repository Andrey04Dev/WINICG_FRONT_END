import {http} from './http-content'

const GetAllAudit = async () => {
    try {
      const res = await http.get("/Audit");
      console.log("Lo que trae la data en el axios", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  const GetCountAudit = async () => {
    try {
      const res = await http.get("/Audit/getCountAudit");
      console.log("Lo que trae la data en el axios", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  const GetAuditById = async (id) => {
    try {
      const res = await http.get(`/Audit/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddAudit = async (data) => {
    try {
      console.log("ENtrada axio de audit", data)
      const res = await http.post("/Audit/addAudit", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateAudit = async (data, id) => {
    try {
      const res = await http.put(`/Audit/updateAudit/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteAudit = async (id) => {
    try {
      const res = await http.delete(`/Audit/deleteAudit/${id}`);
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
    GetCountAudit
  };
  
  export default AuditService