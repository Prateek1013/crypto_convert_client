import { createSlice } from "@reduxjs/toolkit";



const initialState={
    cryptos:[],
    currencies:[]
}

const dropdownSlice=createSlice({
    name:'dropdown',
    initialState,
    reducers:{
        fetchCrypto:(state,action)=>{
            state.cryptos=action.payload;
        },
        fetchCurrencies:(state,action)=>{
            state.currencies=action.payload;
        }
    }
})

export const {fetchCrypto,fetchCurrencies} = dropdownSlice.actions;

export default dropdownSlice.reducer;