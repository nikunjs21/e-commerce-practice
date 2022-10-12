import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalItems: 0,
    grandTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.items = action.payload.items;
            if (state.items === undefined || state.items === null)
                state.items = [];
            state.totalItems = action.payload.totalItems;
            state.grandTotal = action.payload.grandTotal;
        },
        addItemToCart(state, action) {
            const item = action.payload;
            if (state.items.length === 0) {
                state.items.push(item);
            } else {
                const existedItem = state.items.find(i => i.id === item.id);
                //if index not found, index will be -1
                if (!existedItem) {
                    state.items.push(item);
                } else {
                    existedItem.qty += Number.parseInt(item.qty);
                }
            }
            state.totalItems += Number.parseInt(item.qty);
            state.grandTotal = 0;
            state.items.forEach(i => {
                state.grandTotal += (+i.qty * +i.price);
            })
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existedItem = state.items.find(i => i.id === id);
            state.totalItems--;
            if (existedItem.qty === 1) {
                state.items = state.items.filter(i => i.id !== id);
            } else {
                existedItem.qty--;
            }
            state.grandTotal = 0;
            state.items.forEach(i => {
                state.grandTotal += (+i.qty * +i.price);
            })
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;