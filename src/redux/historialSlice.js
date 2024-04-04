import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import HistorialServices from "../services/historial.services"

export const GetHistorialByIdModule = createAsyncThunk(
    "history/getHistoryById", 
    async(data, thunkAPI)=>{
        try {
            const {idmodule} = data
            const res =  await HistorialServices.GetHistorialbyIdModule(idmodule)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const AddHistorial = createAsyncThunk(
    "history/addHistory", 
    async(data, thunkAPI)=>{
        try {
            console.log("Data en el slice de historial", data)
            const res =  await HistorialServices.AddHistorial(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const initialState= {historial:null, loading: false, success:false, error:false, message:""};

const HistorialSlice = createSlice({
    name: "historial",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetHistorialByIdModule.pending, (state) => {
            state.loading = true
            state.historial = null;
        })
        .addCase(GetHistorialByIdModule.fulfilled,(state, {payload}) => {
            state.loading = false
            state.historial = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetHistorialByIdModule.rejected, (state) => {
            state.loading = false
            state.historial = [];
            state.message = "La lista esta vacia"
        })
        .addCase(AddHistorial.pending, (state) => {
            state.loading = true
            state.historial = null;
        })
        .addCase(AddHistorial.fulfilled,(state, {payload}) => {
            state.loading = false
            state.historial = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `Se agrego el historial`
        })
        .addCase(AddHistorial.rejected, (state) => {
            state.loading = false
            state.historial = null;
            state.message = "No se pudo obtener la información."
        })
    },
    reducers: {}
});

const { reducer } = HistorialSlice;
export default reducer;