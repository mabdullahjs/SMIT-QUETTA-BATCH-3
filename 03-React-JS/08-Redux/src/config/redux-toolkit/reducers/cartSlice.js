import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: []
    },
    reducers: {
        addItem: (state , action)=>{
            const index = state.cart.findIndex(item => item.id === action.payload.product.id)

            if(index === -1){
                state.cart.push({...action.payload.product , quantity: 1})
            } else {
                state.cart[index].quantity += 1
            }
        },
        deleteItem: (state , action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.product.id)

            state.cart.splice(index , 1)
        }

        
    }
})



export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;