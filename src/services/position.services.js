import {http} from './http-content'

const GetAllPosition = async () => {
    try {
      const res = await http.get("/Position");
      console.log("En el servicio", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const GetCountPosition = async () => {
    try {
      const res = await http.get("/Position/getCountPosition");
      console.log("En el servicio", res.data)
      return res.data;
    } catch (error) {
      return error;
    }
  };
  const GetPositionById = async (id) => {
    try {
      const res = await http.get(`/Position/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const AddPosition = async (data) => {
    try {
      const res = await http.post("/Position/addPosition", data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const UpdatePosition = async (data, id) => {
    try {
      const res = await http.put(`/Position/updatePosition/${id}`, data);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const DeletePosition = async (id) => {
    try {
      const res = await http.delete(`/Position/deletePosition/${id}`);
      return res.data;
    } catch (error) {
      return error;
    }
  };
  
  const PositionService = {
    GetAllPosition,
    GetPositionById,
    AddPosition,
    UpdatePosition,
    DeletePosition,
    GetCountPosition
  };
  
  export default PositionService