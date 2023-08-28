import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FlagService from "../services/flag.services";

export const GetAllFlags = createAsyncThunk(
    "flags/getAllflags", 
    async(_, thunkAPI)=>{
        try {
            const res =  await FlagService.GetAllFlag()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetFlagsById = createAsyncThunk(
    "flags/getFlagsById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await FlagService.GetFlagById(id)
            console.log(res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddFlags = createAsyncThunk(
    "flags/addFlags", 
    async(data, thunkAPI)=>{
        try {
            const res =  await FlagService.AddFlag(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdateFlags = createAsyncThunk(
    "flags/updateFlags", 
    async(data, thunkAPI)=>{
        try {
            const {idflags} =  data
            const res =  await FlagService.UpdateFlag(data, idflags)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteFlags = createAsyncThunk(
    "flags/deleteFlags", 
    async(id, thunkAPI)=>{
        try {
            const res =  await FlagService.DeleteFlag(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {flags:null, loading: false, success:false, error:false, message:""};

const FlagsSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllFlags.pending, (state) => {
            state.loading = true
            state.flags = null;
        })
        .addCase(GetAllFlags.fulfilled,(state, {payload}) => {
            state.loading = false
            state.flags = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllFlags.rejected, (state) => {
            state.loading = false
            state.flags = null;
            state.message = "La lista esta vacia"
        })
        .addCase(GetFlagsById.pending, (state) => {
            state.loading = true
            state.flags = null;
        })
        .addCase(GetFlagsById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.flags = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetFlagsById.rejected, (state) => {
            state.loading = false
            state.flags = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddFlags.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "El indicador se ha agregado correctamente"
        })
        .addCase(AddFlags.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdateFlags.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateFlags.rejected,(state) => {
            state.flags = null;
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdateFlags.fulfilled, (state, {payload}) => {
            state.flags = payload;
            state.success = true
            state.message =  "El indicador se ha agregado correctamente"
        })
        .addCase(DeleteFlags.pending, (state) => {
            state.loading = true
            state.flags = null;
        })
        .addCase(DeleteFlags.fulfilled,(state, {payload}) => {
            state.loading = false
            state.flags = payload;
            state.success = true
            state.message =  `El indicador se ha eliminado correctamente`
        })
        .addCase(DeleteFlags.rejected, (state) => {
            state.loading = false
            state.flags = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = FlagsSlice;
export default reducer;