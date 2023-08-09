import { http } from "./http-content";

const GetAllCertification = async () => {
  try {
    const res = await http.get("/Certification");
    return res;
  } catch (error) {
    return error;
  }
};

const GetCertificationById = async (id) => {
  try {
    const res = await http.get("/Certification", id);
    return res;
  } catch (error) {
    return error;
  }
};

const AddCertification = async (data) => {
  try {
    const res = await http.get("/Certification/addCertification", data);
    return res;
  } catch (error) {
    return error;
  }
};

const UpdateCertification = async (data, id) => {
  try {
    const res = await http.put(`/Certification/updateCertification/${id}`, data);
    return res;
  } catch (error) {
    return error;
  }
};

const DeleteCertification = async (id) => {
  try {
    const res = await http.delete(`/Certification/deleteCertification/${id}`);
    return res;
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
};

export default CertificationService