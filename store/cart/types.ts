export type CartItemType = {
    id: string;
    title: string;
    subtitle: string;
    color: string;
    memory: number;
    price: number;
    count: number;
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItemType[];
}