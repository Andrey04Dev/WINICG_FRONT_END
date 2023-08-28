import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import PositionService from "../services/position.services";

export const GetAllPositions = createAsyncThunk(
    "Positions/getAllPositions", 
    async(_, thunkAPI)=>{
        try {
            const res =  await PositionService.GetAllPosition()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const GetPositionById = createAsyncThunk(
    "Positions/getPositionById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await PositionService.GetPositionById(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddPosition = createAsyncThunk(
    "Positions/addPosition", 
    async(data, thunkAPI)=>{
        try {
            const res =  await PositionService.AddPosition(data)
            console.log("Lo que se obtiene del creayasyntunk en add:", res)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const UpdatePosition = createAsyncThunk(
    "Positions/updatePosition", 
    async(data, thunkAPI)=>{
        try {
            const {idPosition} =  data
            const res =  await PositionService.UpdatePosition(data, idPosition)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeletePosition = createAsyncThunk(
    "Positions/deletePosition", 
    async(id, thunkAPI)=>{
        try {
            const res =  await PositionService.DeletePosition(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {Positions:null, loading: false, success:false, error:false, message:""};

const PositionSlice = createSlice({
    name: "posicion",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetAllPositions.pending, (state) => {
            state.loading = true
            state.Positions = null;
        })
        .addCase(GetAllPositions.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Positions = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetAllPositions.rejected, (state) => {
            state.loading = false
            state.Positions = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetPositionById.pending, (state) => {
            state.loading = true
            state.Positions = null;
        })
        .addCase(GetPositionById.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Positions = payload;
            state.success = true
            state.message = `La obtuvo la información del ${payload.id}`
        })
        .addCase(GetPositionById.rejected, (state) => {
            state.loading = false
            state.Positions = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(AddPosition.fulfilled,(state, {payload}) => {
            console.log("Entro al createslice",payload );
            state.success = true
            state.message =  "La posición se ha agregado correctamente"
        })
        .addCase(AddPosition.rejected, (state) => {
            state.success = false
            state.loading =  true
            state.message =  "No se pudo agregar la información."
        })
        .addCase(UpdatePosition.pending,(state, {payload}) => {
            state.success = true
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(UpdatePosition.fulfilled,(state, {payload}) => {
            state.Positions = payload;
            state.success = true
            state.message =  "La posición se ha agregado correctamente"
        })
        .addCase(UpdatePosition.rejected, (state) => {
            state.Positions = null;
            state.success = false
            state.message =  "No se pudo actualizar la información."
        })
        .addCase(DeletePosition.pending, (state) => {
            state.loading = true
            state.Positions = null;
        })
        .addCase(DeletePosition.fulfilled,(state, {payload}) => {
            state.loading = false
            state.Positions = payload;
            state.success = true
            state.message =  `La posición se ha eliminado correctamente`
        })
        .addCase(DeletePosition.rejected, (state) => {
            state.loading = false
            state.Positions = null;
            state.message =  "No se pudo borrar la información, porque no encontramos el ID."
        })
    },
    reducers: {}
});

const { reducer } = PositionSlice;
export default reducer;