import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CompanyPositionService from "../services/companyPosition.services";

export const GetAllCompanyPosition = createAsyncThunk(
    "companyPosition/getAllcompanyPosition", 
    async(_, thunkAPI)=>{
        try {
            const res =  await CompanyPositionService.GetAllCompanyPosition()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetCompanyPositionById = createAsyncThunk(
    "companyPosition/getCompanyPositionById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await CompanyPositionService.GetCompanyPositionById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddCompanyPosition = createAsyncThunk(
    "companyPosition/addCompanyPosition", 
    async(data, thunkAPI)=>{
        try {
            const res =  await CompanyPositionService.AddCompanyPosition(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateCompanyPosition = createAsyncThunk(
    "companyPosition/updateCompanyPosition", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await CompanyPositionService.UpdateCompanyPosition(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteCompanyPosition = createAsyncThunk(
    "companyPosition/deleteCompanyPosition", 
    async(id, thunkAPI)=>{
        try {
            const res =  await CompanyPositionService.DeleteCompanyPosition(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {companyPosition:null, loading: false, success:false, error:false, message:""};

const CompanyPositionSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllCompanyPosition.pending, (state) => {
            state.loading = true
            state.companyPosition = null;
        })
        .addCase(GetAllCompanyPosition.fulfilled,(state, {payload}) => {
            state.loading = false
            state.companyPosition = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllCompanyPosition.rejected, (state) => {
            state.loading = false
            state.companyPosition = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetCompanyPositionById.pending, (state) => {
            state.loading = true
            state.companyPosition = null;
        })
        .addCase(GetCompanyPositionById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.companyPosition = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetCompanyPositionById.rejected, (state) => {
            state.loading = false
            state.companyPosition = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddCompanyPosition.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La posicion  de la companía se ha agregado correctamente"
        })
        .addCase(AddCompanyPosition.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateCompanyPosition.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateCompanyPosition.fulfilled,(state, {payload}) => {
            state.companyPosition = payload;
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateCompanyPosition.rejected, (state) => {
            state.companyPosition = null;
            state.success = false
            state.message =  "La posicion  de la companía se ha agregado correctamente"
        })
        .addCase(DeleteCompanyPosition.pending, (state) => {
            state.loading = true
            state.companyPosition = null;
        })
        .addCase(DeleteCompanyPosition.fulfilled,(state, {payload}) => {
            state.loading = false
            state.companyPosition = payload;
            state.success = true
            state.message =  `La posicion  de la companía con el id ${payload.id} se ha eliminado correctamente`
        })
        .addCase(DeleteCompanyPosition.rejected, (state) => {
            state.loading = false
            state.companyPosition = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = CompanyPositionSlice;
export default reducer;