import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showloader:false,
}


const loaderSlice=createSlice({
    name:'loader',
    initialState,
    reducers:{
        showLoader: (state,action)=>{
            state.showloader=action.payload
        }
    }
})

export const {showLoader} = loaderSlice.actions;

export default loaderSlice.reducer;