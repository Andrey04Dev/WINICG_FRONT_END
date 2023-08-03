import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../services/users.services";

const User =   JSON.parse(localStorage.getItem('user') || "{}")

export const GetAllUser = createAsyncThunk(
    "User/getAllUser", 
    async(_, thunkAPI)=>{
        try {
            const res =  await UserService.GetAllUser()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetUserById = createAsyncThunk(
    "User/getUserById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await UserService.GetUserById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddUser = createAsyncThunk(
    "User/addUser", 
    async(data, thunkAPI)=>{
        try {
            const res =  await UserService.AddUser(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateUser = createAsyncThunk(
    "User/updateUser", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await UserService.UpdateUser(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteUser = createAsyncThunk(
    "User/deleteUser", 
    async(id, thunkAPI)=>{
        try {
            const res =  await UserService.DeleteUser(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState = User=== ""
? { isLoggedIn: true, User, loading: false, success: false, message : ""}
: { isLoggedIn: false, user: null, loading: false, success: false, message : "" };

const UserSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllUser.pending, (state) => {
            state.loading = true
            state.isLoggedIn = false;
            state.User = null;
        })
        .addCase(GetAllUser.fulfilled,(state, {payload}) => {
            state.loading = false
            state.User = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllUser.rejected, (state) => {
            state.loading = false
            state.User = null;
            state.isLoggedIn = false;
            state.message = "La lista esta vacia"
        })
        .addCase(GetUserById.pending, (state) => {
            state.loading = true
            state.isLoggedIn = false;
            state.User = null;
        })
        .addCase(GetUserById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.User = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.isLoggedIn = false;
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetUserById.rejected, (state) => {
            state.loading = false
            state.User = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddUser.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "EL usuario se ha agregado correctamente"
        })
        .addCase(AddUser.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.isLoggedIn = false;
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateUser.pending,(state, {payload}) => {
            state.success = true
            state.isLoggedIn = false;
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateUser.fulfilled,(state, {payload}) => {
            state.User = payload;
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateUser.rejected, (state) => {
            state.User = null;
            state.isLoggedIn = false;
            state.success = false
            state.message =  "El usuario se ha agregado correctamente"
        })
        .addCase(DeleteUser.pending, (state) => {
            state.loading = true
            state.User = null;
            state.isLoggedIn = false;
        })
        .addCase(DeleteUser.fulfilled,(state, {payload}) => {
            state.loading = false
            state.User = payload;
            state.success = true
            state.message =  `El usuario con el id ${payload.id} se ha eliminado correctamente`
        })
        .addCase(DeleteUser.rejected, (state) => {
            state.loading = false
            state.User = null;
            state.isLoggedIn = false;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = UserSlice;
export default reducer;