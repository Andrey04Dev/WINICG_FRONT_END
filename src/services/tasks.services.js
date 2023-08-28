import {http} from './http-content'

const GetAllTasks = async () => {
    try {
      const res = await http.get("/Tasks");
      console.log(res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetTasksById = async (id) => {
    try {
      const res = await http.get(`/Tasks/${id}`, );
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddTasks = async (data) => {
    try {
      const res = await http.post("/Tasks/addTask", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateTasks = async (data, id) => {
    try {
      const res = await http.put(`/Tasks/updateTask/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteTasks = async (id) => {
    try {
      const res = await http.delete(`/Tasks/deleteTask/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const TasksService = {
    GetAllTasks,
    GetTasksById,
    AddTasks,
    UpdateTasks,
    DeleteTasks,
  };
  
  export default TasksService