import axios from "axios";

export const http =  axios.create({baseURL: process.env.REACT_API_SERVICE})