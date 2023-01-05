import { CartItemType } from '../store/cart/types';
export const calcTotalPrice = (cartItems: CartItemType[]) => {
    return cartItems.reduce((sum, obj) => (obj.price * obj.count) + sum, 0)
}