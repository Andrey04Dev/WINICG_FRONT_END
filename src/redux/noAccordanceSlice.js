import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import NoAccordanceService from "../services/noAccordance";

export const GetAllNoAccordance = createAsyncThunk(
    "NoAccordance/getAllNoAccordance", 
    async(_, thunkAPI)=>{
        try {
            const res =  await NoAccordanceService.GetAllNoAccordance()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetNoAccordanceById = createAsyncThunk(
    "NoAccordance/getNoAccordanceById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await NoAccordanceService.GetNoAccordanceById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddNoAccordance = createAsyncThunk(
    "NoAccordance/addNoAccordance", 
    async(data, thunkAPI)=>{
        try {
            const res =  await NoAccordanceService.AddNoAccordance(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateNoAccordance = createAsyncThunk(
    "NoAccordance/updateNoAccordance", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await NoAccordanceService.UpdateNoAccordance(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteNoAccordance = createAsyncThunk(
    "NoAccordance/deleteNoAccordance", 
    async(id, thunkAPI)=>{
        try {
            const res =  await NoAccordanceService.DeleteNoAccordance(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {NoAccordance:null, loading: false, success:false, error:false, message:""};

const NoAccordanceSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllNoAccordance.pending, (state) => {
            state.loading = true
            state.NoAccordance = null;
        })
        .addCase(GetAllNoAccordance.fulfilled,(state, {payload}) => {
            state.loading = false
            state.NoAccordance = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllNoAccordance.rejected, (state) => {
            state.loading = false
            state.NoAccordance = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetNoAccordanceById.pending, (state) => {
            state.loading = true
            state.NoAccordance = null;
        })
        .addCase(GetNoAccordanceById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.NoAccordance = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetNoAccordanceById.rejected, (state) => {
            state.loading = false
            state.NoAccordance = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddNoAccordance.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La conformidad se ha agregado correctamente"
        })
        .addCase(AddNoAccordance.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateNoAccordance.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateNoAccordance.fulfilled,(state, {payload}) => {
            state.NoAccordance = payload;
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateNoAccordance.rejected, (state) => {
            state.NoAccordance = null;
            state.success = false
            state.message =  "La conformidad se ha agregado correctamente"
        })
        .addCase(DeleteNoAccordance.pending, (state) => {
            state.loading = true
            state.NoAccordance = null;
        })
        .addCase(DeleteNoAccordance.fulfilled,(state, {payload}) => {
            state.loading = false
            state.NoAccordance = payload;
            state.success = true
            state.message =  `La conformidad con el id ${payload.id} se ha eliminado correctamente`
        })
        .addCase(DeleteNoAccordance.rejected, (state) => {
            state.loading = false
            state.NoAccordance = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = NoAccordanceSlice;
export default reducer;