import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../cartItems';

const initialState = {
    cartItems: cartItems,
    amount:4,
    total:0,
    isLoading: true
}
// with redux tool kit, actions and reducers setup is not required
//we r creating reducers in the slice and redux tool kit uses immer library to mutate state directly
const cartSlice =  createSlice({
    name:'cart',
    initialState,
    reducers: {
        clearCart:(state)=>{
          state.cartItems=[];
        
        },
        removeItem:(state,action)=>{
           const itemId = action.payload;
           state.cartItems=state.cartItems.filter((item)=> item.id != itemId);
        },
        increaseQuantity: (state,{payload}) =>{
           const cartItem = state.cartItems.find((item)=>item.id === payload.id);
           cartItem.quantity = cartItem.quantity + 1;
        },
        decreaseQuantity: (state,{payload}) =>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id);
            cartItem.quantity = cartItem.quantity - 1;
         },
         calculateTotals: (state) =>{
           let qunatity =0;
           let total = 0;
           state.cartItems.forEach((item)=>{
               qunatity += item.quantity;
               total += item.quantity * item.price;
           })
           state.quantity = qunatity;
           state.total = total;
         }
    }
})
//if we see console log by default it creates action and we can export and  use action
// console.log(cartSlice); 

export const {clearCart,removeItem,increaseQuantity,decreaseQuantity,calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;