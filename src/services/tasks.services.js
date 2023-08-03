import {http} from './http-content'

const GetAllTasks = async () => {
    try {
      const res = await http.get("/Tasks");
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const GetTasksById = async (id) => {
    try {
      const res = await http.get("/Tasks", id);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const AddTasks = async (data) => {
    try {
      const res = await http.get("/Tasks", data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const UpdateTasks = async (data, id) => {
    try {
      const res = await http.get(`/Tasks/${id}`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  
  const DeleteTasks = async (id) => {
    try {
      const res = await http.get(`/Tasks/${id}`);
      return res;
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