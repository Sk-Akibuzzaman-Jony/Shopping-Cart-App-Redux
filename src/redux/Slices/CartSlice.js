import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        total: 0.00
    },
    reducers: {
        add: (state, action) => {
            state.products.push(action.payload);
            state.total = parseFloat((state.total + action.payload.price).toFixed(2));
        },
        remove: (state, action) => {
            const removedProductIndex = state.products.findIndex(product => product.id === action.payload.id);
            if (removedProductIndex !== -1) {
                const removedProduct = state.products[removedProductIndex];
                state.products.splice(removedProductIndex, 1);
                state.total = parseFloat((state.total - removedProduct.price).toFixed(2));
            }
        },
    }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
