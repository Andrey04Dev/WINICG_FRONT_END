import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RiskService from "../services/risks.services";

export const GetAllRisk = createAsyncThunk(
    "Risk/getAllRisk", 
    async(_, thunkAPI)=>{
        try {
            const res =  await RiskService.GetAllRisk()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetRiskById = createAsyncThunk(
    "Risk/getRiskById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await RiskService.GetRiskById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddRisk = createAsyncThunk(
    "Risk/addRisk", 
    async(data, thunkAPI)=>{
        try {
            const res =  await RiskService.AddRisk(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateRisk = createAsyncThunk(
    "Risk/updateRisk", 
    async(data, thunkAPI)=>{
        try {
            const {idrisks} =  data
            const res =  await RiskService.UpdateRisk(data, idrisks)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteRisk = createAsyncThunk(
    "Risk/deleteRisk", 
    async(id, thunkAPI)=>{
        try {
            const res =  await RiskService.DeleteRisk(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {Risk:null, loading: false, success:false, error:false, message:""};

const RiskSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllRisk.pending, (state) => {
            state.loading = true
            state.Risk = null;
        })
        .addCase(GetAllRisk.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Risk = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllRisk.rejected, (state) => {
            state.loading = false
            state.Risk = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetRiskById.pending, (state) => {
            state.loading = true
            state.Risk = null;
        })
        .addCase(GetRiskById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Risk = payload;
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetRiskById.rejected, (state) => {
            state.loading = false
            state.Risk = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddRisk.fulfilled,(state, {payload}) => {
            state.success = true
            state.message =  "El riesgo se ha agregado correctamente"
        })
        .addCase(AddRisk.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateRisk.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateRisk.rejected,(state) => {
            state.Risk = null;
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateRisk.fulfilled, (state, {payload}) => {
            state.Risk = payload;
            state.success = true
            state.message =  "El riesgo se ha actualizado correctamente"
        })
        .addCase(DeleteRisk.pending, (state) => {
            state.loading = true
            state.Risk = null;
        })
        .addCase(DeleteRisk.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Risk = payload;
            state.success = true
            state.message =  `El riesgo se ha eliminado correctamente`
        })
        .addCase(DeleteRisk.rejected, (state) => {
            state.loading = false
            state.Risk = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = RiskSlice;
export default reducer;