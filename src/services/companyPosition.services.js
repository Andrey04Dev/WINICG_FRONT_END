import {http} from './http-content'

const GetAllCompanyPosition = async () => {
    try {
      const res = await http.get("/CompanyPosition");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetCompanyPositionById = async (id) => {
    try {
      const res = await http.get("/CompanyPosition", id);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddCompanyPosition = async (data) => {
    try {
      const res = await http.post("/CompanyPosition/CompanyPosition", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateCompanyPosition = async (data, id) => {
    try {
      const res = await http.put(`/CompanyPosition/updateCompanyPosition${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteCompanyPosition = async (id) => {
    try {
      const res = await http.delete(`/CompanyPosition/deleteCompanyPosition/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const CompanyPositionService = {
    GetAllCompanyPosition,
    GetCompanyPositionById,
    AddCompanyPosition,
    UpdateCompanyPosition,
    DeleteCompanyPosition,
  };
  
  export default CompanyPositionService