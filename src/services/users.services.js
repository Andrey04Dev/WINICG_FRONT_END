import axios from 'axios';
import {http} from './http-content'

const GetAllUser = async () => {
    try {
      const res = await http.get("/User");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetCountUser = async () => {
    try {
      const res = await http.get("/User/getCountUser");
      return res.data;
    } catch (error) {
      return error;
    }
  };
  const GetUserById = async (id) => {
    try {
      const res = await http.get(`/User/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddUser = async (data) => {
    try {
      const res = await http.post("/User/addUser", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateUser = async (data,id) => {
    try {
      const res = await axios.put(`https://localhost:7128/api/User/updateUser/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteUser = async (id) => {
    try {
      const res = await http.delete(`/User/deleteUser/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };

  const LoginUser = async(data)=>{
    try {
      const res =  await http.post("/User/login",data)
      sessionStorage.setItem("userLogin", JSON.stringify(res.data))
      return res.data
    } catch (error) {
      return error
    }
  }

const LogoutUser = async()=>{
  try {
    sessionStorage.removeItem("userLogin")
    return "Te vas a desconectar del sistema"
  } catch (error) {
    return error
  }
}


  
  const UserService = {
    GetAllUser,
    GetUserById,
    AddUser,
    UpdateUser,
    DeleteUser,
    LoginUser,
    LogoutUser,
    GetCountUser
  };
  
  export default UserService