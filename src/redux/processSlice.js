import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProcessService from "../services/process.services";

export const GetAllProcess = createAsyncThunk(
    "Process/getAllProcess", 
    async(_, thunkAPI)=>{
        try {
            const res =  await ProcessService.GetAllProcess()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetProcessById = createAsyncThunk(
    "Process/getProcessById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await ProcessService.GetProcessById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddProcess = createAsyncThunk(
    "Process/addProcess", 
    async(data, thunkAPI)=>{
        try {
            const res =  await ProcessService.AddProcess(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateProcess = createAsyncThunk(
    "Process/updateProcess", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await ProcessService.UpdateProcess(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteProcess = createAsyncThunk(
    "Process/deleteProcess", 
    async(id, thunkAPI)=>{
        try {
            const res =  await ProcessService.DeleteProcess(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {Process:null, loading: false, success:false, error:false, message:""};

const ProcessSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllProcess.pending, (state) => {
            state.loading = true
            state.Process = null;
        })
        .addCase(GetAllProcess.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Process = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllProcess.rejected, (state) => {
            state.loading = false
            state.Process = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetProcessById.pending, (state) => {
            state.loading = true
            state.Process = null;
        })
        .addCase(GetProcessById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Process = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetProcessById.rejected, (state) => {
            state.loading = false
            state.Process = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddProcess.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "El proceso se ha agregado correctamente"
        })
        .addCase(AddProcess.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateProcess.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateProcess.fulfilled,(state, {payload}) => {
            state.Process = payload;
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateProcess.rejected, (state) => {
            state.Process = null;
            state.success = false
            state.message =  "El proceso se ha agregado correctamente"
        })
        .addCase(DeleteProcess.pending, (state) => {
            state.loading = true
            state.Process = null;
        })
        .addCase(DeleteProcess.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Process = payload;
            state.success = true
            state.message =  `El proceso con el id ${payload.id} se ha eliminado correctamente`
        })
        .addCase(DeleteProcess.rejected, (state) => {
            state.loading = false
            state.Process = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = ProcessSlice;
export default reducer;