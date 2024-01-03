import { createSlice } from "@reduxjs/toolkit";


const initialState={
    showAmount:'',
    showimg:false,
    img:''
}

const resultSlice=createSlice({
    name:'result',
    initialState,
    reducers: {
        setShowAmount:(state,action)=>{
            state.showAmount=action.payload
        },
        setImg:(state,action)=>{
            state.img=action.payload
        },
        setShowImg:(state,action)=>{
            state.showimg=action.payload;
        }
    }
})

export const {setShowAmount,setImg,setShowImg}=resultSlice.actions;
export default resultSlice.reducer;