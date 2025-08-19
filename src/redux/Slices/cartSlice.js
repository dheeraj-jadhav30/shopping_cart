import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        add: (state,action) => {
            state.push(action.payload); // whaever input parameter send we have to seen in the action payload
        },
        remove: (state,action) => {
            return state.filter((item)=>item.id !== action.payload ) 
        },
        
    }
});

export const { add, remove } = cartSlice.actions;

// Named export for reducer
export const cartReducer = cartSlice.reducer;
