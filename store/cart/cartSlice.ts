import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { CartSliceState, CartItemType } from './types';


const initialState: CartSliceState = {
    totalPrice: 0,
    items: []
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItemType>) => {
            const findItem = state.items.find((obj) =>
                obj.id === action.payload.id
            )
            if (findItem) {
                findItem.count++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        plusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) =>
                obj.id === action.payload
            )
            if (findItem) {
                findItem.count++
            }
            state.totalPrice = calcTotalPrice(state.items);

        },
        minusItem: (state, action: PayloadAction<string>) => {
            const findItem = state.items.find((obj) =>
                obj.id === action.payload
            )
            if (findItem) {
                findItem.count--
            }
            state.totalPrice = calcTotalPrice(state.items);

        },
        removeItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeAllItem: (state) => {
            state.items = [];
            state.totalPrice = calcTotalPrice(state.items);
        },
    }
})

export const { addItem, minusItem, plusItem, removeItem, removeAllItem } = CartSlice.actions;
export default CartSlice.reducer;
