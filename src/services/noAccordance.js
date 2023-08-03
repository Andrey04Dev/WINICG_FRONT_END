import {http} from './http-content'

const GetAllNoAccordance = async () => {
    try {
      const res = await http.get("/NoAccordance");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetNoAccordanceById = async (id) => {
    try {
      const res = await http.get("/NoAccordance", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddNoAccordance = async (data) => {
    try {
      const res = await http.get("/NoAccordance", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateNoAccordance = async (data, id) => {
    try {
      const res = await http.get(`/NoAccordance/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteNoAccordance = async (id) => {
    try {
      const res = await http.get(`/NoAccordance/${id}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const NoAccordanceService = {
    GetAllNoAccordance,
    GetNoAccordanceById,
    AddNoAccordance,
    UpdateNoAccordance,
    DeleteNoAccordance,
  };
  
  export default NoAccordanceService