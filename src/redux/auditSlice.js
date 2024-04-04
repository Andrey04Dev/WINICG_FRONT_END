import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuditService from "../services/audit.services";

export const GetAllAudits = createAsyncThunk(
    "Audits/getAllAudits", 
    async(_, thunkAPI)=>{
        try {
            const res =  await AuditService.GetAllAudit()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const GetCountAudits = createAsyncThunk(
    "Audits/getCountAudits", 
    async(_, thunkAPI)=>{
        try {
            const res =  await AuditService.GetCountAudit()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const GetAuditById = createAsyncThunk(
    "Audits/getAuditById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await AuditService.GetAuditById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddAudit = createAsyncThunk(
    "Audits/addAudit", 
    async(data, thunkAPI)=>{
        try {
            const res =  await AuditService.AddAudit(data)
            console.log("Lo que se obtiene del creayasyntunk en add:", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateAudit = createAsyncThunk(
    "Audits/updateAudit", 
    async(data, thunkAPI)=>{
        try {
            const {idaudits} =  data
            const res =  await AuditService.UpdateAudit(data, idaudits)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteAudit = createAsyncThunk(
    "Audits/deleteAudit", 
    async(id, thunkAPI)=>{
        try {
            const res =  await AuditService.DeleteAudit(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {audits:null, loading: false, success:false, error:false, message:""};

const AuditSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllAudits.pending, (state) => {
            state.loading = true
            state.audits = null;
        })
        .addCase(GetAllAudits.fulfilled,(state, {payload}) => {
            state.loading = false
            state.audits = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllAudits.rejected, (state) => {
            state.loading = false
            state.audits = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetCountAudits.pending, (state) => {
            state.loading = true
            state.audits = null;
        })
        .addCase(GetCountAudits.fulfilled,(state, {payload}) => {
            state.loading = false
            state.audits = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetCountAudits.rejected, (state) => {
            state.loading = false
            state.audits = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetAuditById.pending, (state) => {
            state.loading = true
            state.audits = null;
        })
        .addCase(GetAuditById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.audits = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetAuditById.rejected, (state) => {
            state.loading = false
            state.audits = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddAudit.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La auditoria se ha agregado correctamente"
        })
        .addCase(AddAudit.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateAudit.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateAudit.fulfilled,(state, {payload}) => {
            state.audits = payload;
            state.success = true
            state.message =  "La auditoria se ha agregado correctamente"
        })
        .addCase(UpdateAudit.rejected, (state) => {
            state.audits = null;
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(DeleteAudit.pending, (state) => {
            state.loading = true
            state.audits = null;
        })
        .addCase(DeleteAudit.fulfilled,(state, {payload}) => {
            state.loading = false
            state.audits = payload;
            state.success = true
            state.message =  `La auditoria se ha eliminado correctamente`
        })
        .addCase(DeleteAudit.rejected, (state) => {
            state.loading = false
            state.audits = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = AuditSlice;
export default reducer;