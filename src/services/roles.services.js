import {http} from './http-content'

const GetAllRoles = async () => {
    try {
      const res = await http.get("/Roles");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetRolesById = async (id) => {
    try {
      const res = await http.get("/Roles", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddRoles = async (data) => {
    try {
      const res = await http.get("/Roles", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateRoles = async (data, id) => {
    try {
      const res = await http.get(`/Roles/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteRoles = async (id) => {
    try {
      const res = await http.get(`/Roles/${id}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const RolesService = {
    GetAllRoles,
    GetRolesById,
    AddRoles,
    UpdateRoles,
    DeleteRoles,
  };
  
  export default RolesService