import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../services/users.services";

const user =   JSON.parse(localStorage.getItem('user') || "{}")

export const GetAllUser = createAsyncThunk(
    "User/getAllUser", 
    async(_, thunkAPI)=>{
        try {
            const res =  await UserService.GetAllUser()
            console.log("Devolviendo del slice de usuarios", res)
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
            const {iduser} = data
            const res =  await UserService.UpdateUser(data, iduser)
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

const initialState = user === ""
? { isLoggedIn: true, user, loading: false, success: false, message : ""}
: { isLoggedIn: false, user: null, loading: false, success: false, message : "" };

const UserSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllUser.pending, (state) => {
            state.loading = true
            state.isLoggedIn = false;
            state.user = null;
        })
        .addCase(GetAllUser.fulfilled,(state, {payload}) => {
            state.loading = false
            state.user = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllUser.rejected, (state) => {
            state.loading = false
            state.user = null;
            state.isLoggedIn = false;
            state.message = "La lista esta vacia"
        })
        .addCase(GetUserById.pending, (state) => {
            state.loading = true
            state.isLoggedIn = false;
            state.user = null;
        })
        .addCase(GetUserById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.user = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.isLoggedIn = false;
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetUserById.rejected, (state) => {
            state.loading = false
            state.user = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddUser.pending,(state, {payload}) => {
            state.loading =  true
            state.success = false
            state.message =  "Se esta obteniendo el usuario"
        })
        .addCase(AddUser.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.loading =  false
            state.success = true
            state.message =  "El usuario se ha agregado correctamente"
        })
        .addCase(AddUser.rejected, (state) => {
            state.success = false
            state.loading =  false
            state.isLoggedIn = false;
            state.user = null;
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateUser.pending,(state, {payload}) => {
            state.success = true
            state.isLoggedIn = false;
            state.loading =  true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateUser.fulfilled,(state, {payload}) => {
            state.user = payload;
            state.loading =  false
            state.success = true
            state.message =  "El usuario se ha actualizado correctamente"
        })
        .addCase(UpdateUser.rejected, (state) => {
            state.user = null;
            state.isLoggedIn = false;
            state.success = false
            state.loading =  false
            state.message =  " No se pudo actualizar la información."
        })
        .addCase(DeleteUser.pending, (state) => {
            state.loading = true
            state.user = null;
            state.isLoggedIn = false;
        })
        .addCase(DeleteUser.fulfilled,(state, {payload}) => {
            state.loading = false
            state.user = payload;
            state.success = true
            state.message =  `El usuario se ha eliminado correctamente`
        })
        .addCase(DeleteUser.rejected, (state) => {
            state.loading = false
            state.user = null;
            state.isLoggedIn = false;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = UserSlice;
export default reducer;