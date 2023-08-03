import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TasksService from "../services/tasks.services";

export const GetAllTask = createAsyncThunk(
    "Task/getAllTask", 
    async(_, thunkAPI)=>{
        try {
            const res =  await TasksService.GetAllTask()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetTaskById = createAsyncThunk(
    "Task/getTaskById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await TasksService.GetTaskById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddTask = createAsyncThunk(
    "Task/addTask", 
    async(data, thunkAPI)=>{
        try {
            const res =  await TasksService.AddTask(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateTask = createAsyncThunk(
    "Task/updateTask", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await TasksService.UpdateTask(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteTask = createAsyncThunk(
    "Task/deleteTask", 
    async(id, thunkAPI)=>{
        try {
            const res =  await TasksService.DeleteTask(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {Task:null, loading: false, success:false, error:false, message:""};

const TaskSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllTask.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(GetAllTask.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllTask.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetTaskById.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(GetTaskById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetTaskById.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddTask.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La tarea se ha agregado correctamente"
        })
        .addCase(AddTask.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateTask.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateTask.fulfilled,(state, {payload}) => {
            state.Task = payload;
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateTask.rejected, (state) => {
            state.Task = null;
            state.success = false
            state.message =  "La tarea se ha agregado correctamente"
        })
        .addCase(DeleteTask.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(DeleteTask.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            state.success = true
            state.message =  `La tarea con el id ${payload.id} se ha eliminado correctamente`
        })
        .addCase(DeleteTask.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = TaskSlice;
export default reducer;