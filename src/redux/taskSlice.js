import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TasksService from "../services/tasks.services";

export const GetAllTaskProcess = createAsyncThunk(
    "Task/getAllTask", 
    async(_, thunkAPI)=>{
        try {
            const res =  await TasksService.GetAllTasks()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetTaskByIdProcess = createAsyncThunk(
    "Task/getTaskById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await TasksService.GetTasksById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddTaskProcess = createAsyncThunk(
    "Task/addTask", 
    async(data, thunkAPI)=>{
        try {
            const res =  await TasksService.AddTasks(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateTaskProcess = createAsyncThunk(
    "Task/updateTask", 
    async(data, thunkAPI)=>{
        try {
            const {idtask} =  data
            const res =  await TasksService.UpdateTasks(data, idtask)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteTaskProcess = createAsyncThunk(
    "Task/deleteTask", 
    async(id, thunkAPI)=>{
        try {
            const res =  await TasksService.DeleteTasks(id)
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
        builder.addCase(GetAllTaskProcess.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(GetAllTaskProcess.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllTaskProcess.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetTaskByIdProcess.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(GetTaskByIdProcess.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetTaskByIdProcess.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddTaskProcess.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La tarea se ha agregado correctamente"
        })
        .addCase(AddTaskProcess.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateTaskProcess.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateTaskProcess.fulfilled,(state, {payload}) => {
            state.Task = payload;
            state.success = true
            state.message =  "La tarea se ha agregado correctamente"
        })
        .addCase(UpdateTaskProcess.rejected, (state) => {
            state.Task = null;
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(DeleteTaskProcess.pending, (state) => {
            state.loading = true
            state.Task = null;
        })
        .addCase(DeleteTaskProcess.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Task = payload;
            state.success = true
            state.message =  `La tarea  se ha eliminado correctamente`
        })
        .addCase(DeleteTaskProcess.rejected, (state) => {
            state.loading = false
            state.Task = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = TaskSlice;
export default reducer;