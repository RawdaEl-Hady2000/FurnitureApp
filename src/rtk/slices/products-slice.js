import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts= createAsyncThunk("productsSlices/fetchProducts",async()=>{
   const res= await fetch("https://mocki.io/v1/817b77d2-52d1-492b-8877-13141306875d");
   const data=await res.json();
   return data;
})



const productsSlice= createSlice({
    initialState:[],
    name: "productsSlice",
    reducers:{
        // actions which doing at slices
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})

export const {}=productsSlice.actions;
export default productsSlice.reducer;