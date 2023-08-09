import {http} from './http-content'

const GetAllUser = async () => {
    try {
      const res = await http.get("/User");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetUserById = async (id) => {
    try {
      const res = await http.get("/User", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddUser = async (data) => {
    try {
      const res = await http.add("/User/addUser", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateUser = async (data, id) => {
    try {
      const res = await http.put(`/User/updateUser/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteUser = async (id) => {
    try {
      const res = await http.delete(`/User/deleteUser/${id}`);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UserService = {
    GetAllUser,
    GetUserById,
    AddUser,
    UpdateUser,
    DeleteUser,
  };
  
  export default UserService