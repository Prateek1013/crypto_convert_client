import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showloader:false,
    data:[]
}


const loaderSlice=createSlice({
    name:'loader',
    initialState,
    reducers:{
        showLoader: (state,action)=>{
            state.showloader=action.payload
        },
        fetchData:(state,action)=>{
            state.data=action.payload
        } 
    }
})

export const {showLoader,fetchData} = loaderSlice.actions;

export default loaderSlice.reducer;