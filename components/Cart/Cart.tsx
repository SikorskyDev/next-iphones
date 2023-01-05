import { Button, Modal, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItems from "./CartItems/CartItems";

const Cart: React.FC = () => {
    const [showCart, setShowCart] = useState(false);
    const quantity = useSelector((state: RootState) =>
        state.CartSlice.items.reduce((sum, item) => sum + item.count, 0)
    );

    return (
        <div className="flex md:order-2">
            <Button
                color="dark"
                pill={true}
                label={quantity}
                onClick={() => setShowCart(!showCart)}
            >
                <HiShoppingCart className="mr-2 h-5 w-5" />
            </Button>
            <Modal
                show={showCart}
                size="7xl"
                onClose={() => setShowCart(!showCart)}
            >
                <Modal.Header>Корзина</Modal.Header>
                <Modal.Body>
                    <CartItems />
                </Modal.Body>
            </Modal>
            <Navbar.Toggle />
        </div>
    );
};

export default Cart;
