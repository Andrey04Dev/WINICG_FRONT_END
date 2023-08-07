import {http} from './http-content'

console.log(process.env.REACT_APP_API_SERVICE)
const GetAllRoles = async () => {
    try {
      const res = await http.get("Roles");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetRolesById = async (id) => {
    try {
      const res = await http.get("Roles", id);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddRoles = async (data) => {
    try {
      console.log("Al inicio del servioc de roles", data)
      const res = await http.post("Roles/addRole/", data);
      console.log("Al inicio del servioc de roles", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateRoles = async (data, id) => {
    try {
      const res = await http.put(`Roles/updateRole/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteRoles = async (id) => {
    try {
      const res = await http.delete(`Roles/deleteRole/${id}`);
      return res.data;
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