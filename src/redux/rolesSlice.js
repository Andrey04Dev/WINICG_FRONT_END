import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import RolesService from "../services/roles.services";

export const GetAllRoles = createAsyncThunk(
    "Roles/getAllRoles", 
    async(_, thunkAPI)=>{
        try {
            const res =  await RolesService.GetAllRoles()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetCountRoles = createAsyncThunk(
    "Roles/getCountRoles", 
    async(_, thunkAPI)=>{
        try {
            const res =  await RolesService.GetCountRoles()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetRolesById = createAsyncThunk(
    "Roles/getRolesById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await RolesService.GetRolesById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddRoles = createAsyncThunk(
    "Roles/addRoles", 
    async(data, thunkAPI)=>{
        try {
            const res =  await RolesService.AddRoles(data)
            console.log("Lo que se obtiene el creatasync thunk roles", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateRoles = createAsyncThunk(
    "Roles/updateRoles", 
    async(data, thunkAPI)=>{
        try {
            const {id} =  data
            const res =  await RolesService.UpdateRoles(data, id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteRoles = createAsyncThunk(
    "Roles/deleteRoles", 
    async(id, thunkAPI)=>{
        try {
            const res =  await RolesService.DeleteRoles(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {Roles:null, loading: false, success:false, error:false, message:""};

const RolesSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllRoles.pending, (state) => {
            state.loading = true
            state.Roles = null;
        })
        .addCase(GetAllRoles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Roles = payload;
            state.success = true
            state.message = "Se han obtenido todas los roles."
        })
        .addCase(GetAllRoles.rejected, (state) => {
            state.loading = false
            state.Roles = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetCountRoles.pending, (state) => {
            state.loading = true
            state.Roles = null;
        })
        .addCase(GetCountRoles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Roles = payload;
            state.success = true
            state.message = "Se han obtenido todas los roles."
        })
        .addCase(GetCountRoles.rejected, (state) => {
            state.loading = false
            state.Roles = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetRolesById.pending, (state) => {
            state.loading = true
            state.Roles = null;
        })
        .addCase(GetRolesById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Roles = payload;
            state.success = true
            state.message = `Se obtuvo la información del ${payload.id}`
        })
        .addCase(GetRolesById.rejected, (state) => {
            state.loading = false
            state.Roles = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddRoles.pending, (state) => {
            state.success = false
            state.loading =  true
            state.message =  ""
        })
        .addCase(AddRoles.fulfilled,(state, {payload}) => {
            state.success = true
            state.loading =  false
            state.message =  "El role se ha agregado correctamente"
        })
        .addCase(AddRoles.rejected, (state) => {
            state.success = false
            state.loading =  false
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateRoles.pending,(state, {payload}) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateRoles.fulfilled,(state, {payload}) => {
            state.Roles = payload;
            state.success = true
            state.loading =  false
            state.message =  "Se actualizó la información correctamente."
        })
        .addCase(UpdateRoles.rejected, (state) => {
            state.Roles = null;
            state.loading =  false
            state.success = false
            state.message =  "Ocurrio un error al actualizar."
        })
        .addCase(DeleteRoles.pending, (state) => {
            state.loading = true
            state.Roles = null;
        })
        .addCase(DeleteRoles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Roles = payload;
            state.success = true
            state.message =  `El rol se ha eliminado correctamente. Presione si para volver la tabla de roles`
        })
        .addCase(DeleteRoles.rejected, (state) => {
            state.loading = false
            state.Roles = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = RolesSlice;
export default reducer;