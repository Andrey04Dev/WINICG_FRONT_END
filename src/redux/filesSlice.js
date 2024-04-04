import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import FilesService from "../services/files.services"

export const GetFilesByIdModule = createAsyncThunk(
    "files/getFilesById", 
    async(id, thunkAPI)=>{
        try {
            const res =  await FilesService.GetFilesByIdModule(id)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const GetCountFiles = createAsyncThunk(
    "files/getCuountFiles", 
    async(_, thunkAPI)=>{
        try {
            const res =  await FilesService.GetCountFile()
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const AddFiles = createAsyncThunk(
    "files/addFiles", 
    async(data, thunkAPI)=>{
        try {
            const res =  await FilesService.AddFiles(data)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const DeleteFiles = createAsyncThunk(
    "files/DeleteFiles", 
    async(data, thunkAPI)=>{
        try {
            const {idmodule, idfile} = data
            const res =  await FilesService.DeleteFiles(idmodule,idfile)
            return res
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const initialState= {files:null, loading: false, success:false, error:false, message:""};

const FilesSlice = createSlice({
    name: "files",
    initialState,
    extraReducers: (builder)=> {
        builder.addCase(GetFilesByIdModule.pending, (state) => {
            state.loading = true
            state.files = null;
        })
        .addCase(GetFilesByIdModule.fulfilled,(state, {payload}) => {
            state.loading = false
            state.files = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetFilesByIdModule.rejected, (state) => {
            state.loading = false
            state.files = [];
            state.message = "La lista esta vacia"
        })
        .addCase(GetCountFiles.pending, (state) => {
            state.loading = true
            state.files = null;
        })
        .addCase(GetCountFiles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.files = payload;
            state.success = true
            state.message = "Su petición ha sido concedida."
        })
        .addCase(GetCountFiles.rejected, (state) => {
            state.loading = false
            state.files = [];
            state.message = "La lista esta vacia"
        })
        .addCase(AddFiles.pending, (state) => {
            state.loading = true
            state.files = null;
        })
        .addCase(AddFiles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.files = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `Se agrego los archivos correctamente`
        })
        .addCase(AddFiles.rejected, (state) => {
            state.loading = false
            state.files = null;
            state.message = "No se pudo obtener la información."
        })
        .addCase(DeleteFiles.pending, (state) => {
            state.loading = true
            state.files = null;
        })
        .addCase(DeleteFiles.fulfilled,(state, {payload}) => {
            state.loading = false
            state.files = payload;
            console.log("Returno del slice", payload);
            state.success = true
            state.message = `Se han eliminado los archivos correctamente`
        })
        .addCase(DeleteFiles.rejected, (state) => {
            state.loading = false
            state.files = null;
            state.message = "No se pudo obtener la información."
        })
    },
    reducers: {}
});

const { reducer } = FilesSlice;
export default reducer;