import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import IsoRuleService from "../services/isoRule.services";

export const GetAllIsoRules = createAsyncThunk(
    "isoRules/getAllisoRules", 
    async(_, thunkAPI)=>{
        try {
            const res =  await IsoRuleService.GetAllIsoRule()
            console.log("Site", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const GetCountIsoRules = createAsyncThunk(
    "isoRules/getCountisoRules", 
    async(_, thunkAPI)=>{
        try {
            const res =  await IsoRuleService.GetCountIsoRule()
            console.log("Site", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetIsoRulesById = createAsyncThunk(
    "isoRules/getIsoRulesById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await IsoRuleService.GetIsoRuleById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddIsoRules = createAsyncThunk(
    "isoRules/addIsoRules", 
    async(data, thunkAPI)=>{
        try {
            const res =  await IsoRuleService.AddIsoRule(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateIsoRules = createAsyncThunk(
    "isoRules/updateIsoRules", 
    async(data, thunkAPI)=>{
        try {
            const {idrule} =  data
            const res =  await IsoRuleService.UpdateIsoRule(data, idrule)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteIsoRules = createAsyncThunk(
    "isoRules/deleteIsoRules", 
    async(id, thunkAPI)=>{
        try {
            const res =  await IsoRuleService.DeleteIsoRule(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {isoRules:null, loading: false, success:false, error:false, message:""};

const IsoRulesSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllIsoRules.pending, (state) => {
            state.loading = true
            state.isoRules = null;
        })
        .addCase(GetAllIsoRules.fulfilled,(state, {payload}) => {
            state.loading = false
            state.isoRules = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllIsoRules.rejected, (state) => {
            state.loading = false
            state.isoRules = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetCountIsoRules.pending, (state) => {
            state.loading = true
            state.isoRules = null;
        })
        .addCase(GetCountIsoRules.fulfilled,(state, {payload}) => {
            state.loading = false
            state.isoRules = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetCountIsoRules.rejected, (state) => {
            state.loading = false
            state.isoRules = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetIsoRulesById.pending, (state) => {
            state.loading = true
            state.isoRules = null;
        })
        .addCase(GetIsoRulesById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.isoRules = payload;
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetIsoRulesById.rejected, (state) => {
            state.loading = false
            state.isoRules = [];
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddIsoRules.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La norma ISO se ha agregado correctamente"
        })
        .addCase(AddIsoRules.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateIsoRules.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateIsoRules.fulfilled,(state, {payload}) => {
            state.isoRules = payload;
            state.success = true
            state.message =  "La norma ISO se ha agregado correctamente."
        })
        .addCase(UpdateIsoRules.rejected, (state) => {
            state.isoRules = [];
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(DeleteIsoRules.pending, (state) => {
            state.loading = true
            state.isoRules = null;
        })
        .addCase(DeleteIsoRules.fulfilled,(state, {payload}) => {
            state.loading = false
            state.isoRules = payload;
            state.success = true
            state.message =  `La norma ISO se ha eliminado correctamente`
        })
        .addCase(DeleteIsoRules.rejected, (state) => {
            state.loading = false
            state.isoRules = [];
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = IsoRulesSlice;
export default reducer;