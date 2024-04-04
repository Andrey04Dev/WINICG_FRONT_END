import { http } from "./http-content";

const GetAllCertification = async () => {
  try {
    const res = await http.get("Certification");
    return res.data;
  } catch (error) {
    return error;
  }
};
const GetCountCertification = async () => {
  try {
    const res = await http.get("Certification/getCountCertification");
    return res.data;
  } catch (error) {
    return error;
  }
};
const GetCertificationById = async (id) => {
  try {
    const res = await http.get(`Certification/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

const AddCertification = async (data) => {
  try {
    const res = await http.post("Certification/addCertification", data);
    console.log("Dentro del axios add:", data)
    return res.data;
  } catch (error) {
    return error;
  }
};

const UpdateCertification = async (data, id) => {
  try {
    const res = await http.put(`Certification/updateCertification/${id}`, data);
    return res.data;
  } catch (error) {
    return error;
  }
};

const DeleteCertification = async (id) => {
  try {
    const res = await http.delete(`Certification/deleteCertification/${id}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

const CertificationService = {
  GetAllCertification,
  GetCertificationById,
  AddCertification,
  UpdateCertification,
  DeleteCertification,
  GetCountCertification
};

export default CertificationService