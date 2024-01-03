import { createSlice } from "@reduxjs/toolkit";


const initialState={
    showAmount:'',
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
        }
    }
})

export const {setShowAmount,setImg}=resultSlice.actions;
export default resultSlice.reducer;