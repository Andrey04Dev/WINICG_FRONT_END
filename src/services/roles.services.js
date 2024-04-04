import {http} from './http-content'

const GetAllRoles = async () => {
    try {
      const res = await http.get("/Roles");
      console.log("Rest api de servicio de roles", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetCountRoles = async () => {
    try {
      const res = await http.get("/Roles/getCountRoles");
      console.log("Rest api de servicio de roles", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const GetRolesById = async (id) => {
    try {
      const res = await http.get(`/Roles/${id}`, );
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddRoles = async (data) => {
    try {
      const res = await http.post("/Roles/addRole/", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateRoles = async (data, id) => {
    try {
      const res = await http.put(`/Roles/updateRole/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteRoles = async (id) => {
    try {
      const res = await http.delete(`/Roles/deleteRole/${id}`);
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
    GetCountRoles
  };
  
  export default RolesService