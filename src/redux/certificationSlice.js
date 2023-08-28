import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CertificationService from "../services/certification.services";

export const GetAllCertification = createAsyncThunk(
    "Certification/getAllCertification", 
    async(_, thunkAPI)=>{
        try {
            const res =  await CertificationService.GetAllCertification()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetCertificationById = createAsyncThunk(
    "Certification/getCertificationById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await CertificationService.GetCertificationById(id)
            console.log(res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddCertification = createAsyncThunk(
    "Certification/addCertification", 
    async(data, thunkAPI)=>{
        try {
            const res =  await CertificationService.AddCertification(data)
            console.log("Data del creatasynthinmk", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateCertification = createAsyncThunk(
    "Certification/updateCertification", 
    async(data, thunkAPI)=>{
        try {
            const {idcertification} =  data
            const res =  await CertificationService.UpdateCertification(data, idcertification)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteCertification = createAsyncThunk(
    "Certification/deleteCertification", 
    async(id, thunkAPI)=>{
        try {
            const res =  await CertificationService.DeleteCertification(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {certification:null, loading: false, success:false, error:false, message:""};

const CertificationSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllCertification.pending, (state) => {
            state.loading = true
            state.certification = null;
        })
        .addCase(GetAllCertification.fulfilled,(state, {payload}) => {
            state.loading = false
            state.certification = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllCertification.rejected, (state) => {
            state.loading = false
            state.certification = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetCertificationById.pending, (state) => {
            state.loading = true
            state.certification = null;
        })
        .addCase(GetCertificationById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.certification = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetCertificationById.rejected, (state) => {
            state.loading = false
            state.certification = [];
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddCertification.pending, (state) => {
            state.success = false
            state.loading =  true
        })
        .addCase(AddCertification.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La certificación se ha agregado correctamente"
        })
        .addCase(AddCertification.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateCertification.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateCertification.fulfilled,(state, {payload}) => {
            state.certification = payload;
            state.success = true
            state.message =  "La certificación se ha agregado correctamente"
        })
        .addCase(UpdateCertification.rejected, (state) => {
            state.certification = [];
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(DeleteCertification.pending, (state) => {
            state.loading = true
            state.certification = null;
        })
        .addCase(DeleteCertification.fulfilled,(state, {payload}) => {
            state.loading = false
            state.certification = payload;
            state.success = true
            state.message =  `La certificación  se ha eliminado correctamente`
        })
        .addCase(DeleteCertification.rejected, (state) => {
            state.loading = false
            state.certification = [];
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = CertificationSlice;
export default reducer;