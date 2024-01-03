import { createSlice } from "@reduxjs/toolkit";

const initialState={
    crypto:null,
    currency:'usd',
    amount:0,
}

const selectedSlice=createSlice({
    name:'selected',
    initialState,
    reducers:{
        setCrypto:(state,action)=>{
            state.crypto=action.payload;
        },
        setCurrency:(state,action)=>{
            state.currency=action.payload
        },
        setAmount:(state,action)=>{
            state.amount=action.payload;
        }
    }
})


export const {setCrypto,setCurrency,setAmount} = selectedSlice.actions;

export default selectedSlice.reducer;