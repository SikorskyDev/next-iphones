import { Button, Table } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";
import { removeAllItem } from "../../../store/cart/cartSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import CartItem from "./CartItem/CartItem";
import InputCustomerData from "./CartItem/InputCustomerData/InputCustomerData";
import stl from "./CartItems.module.scss";

const CartItems = () => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useAppDispatch();
    const { items, totalPrice } = useSelector(
        (state: RootState) => state.CartSlice
    );

    const handleTotalBuy = () => {setOpen(true)};
    const handleClearCart = () => {
        dispatch(removeAllItem());
    };

    return (
        <>
            {totalPrice > 0 ? (
                <Table striped={true}>
                    <Table.Head>
                        <Table.HeadCell>Назва</Table.HeadCell>
                        <Table.HeadCell>Колір</Table.HeadCell>
                        <Table.HeadCell>Пам'ять</Table.HeadCell>
                        <Table.HeadCell>Кількість</Table.HeadCell>
                        <Table.HeadCell>Ціна</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {items.map((phone) => {
                            return (
                                <CartItem
                                    id={phone.id}
                                    title={phone.title}
                                    subtitle={phone.subtitle}
                                    color={phone.color}
                                    memory={phone.memory}
                                    price={phone.price}
                                    count={phone.count}
                                    key={phone.id}
                                />
                            );
                        })}
                    </Table.Body>
                </Table>
            ) : (
                <h2>Корзина пуста</h2>
            )}

            {totalPrice > 0 && (
                <>
                    <div className={stl.totalCost}>
                        <div className={stl.totalCost__title}>
                            Загальна вартість:
                        </div>
                        <div className={stl.totalCost__cost}>
                            {totalPrice} ₴
                        </div>
                    </div>
                    <div className={stl.cleanAndBuy}>
                        <div className={stl.clean}>
                            <Button
                                gradientMonochrome="failure"
                                size={"sm"}
                                onClick={handleClearCart}
                            >
                                ОЧИСТИТИ КОРЗИНУ
                            </Button>
                        </div>
                        <div className={stl.totalBuy}>
                            <Button
                                gradientMonochrome="success"
                                size={"sm"}
                                onClick={handleTotalBuy}
                            >
                                ПРИДБАТИ ВИБРАНІ ТОВАРИ
                            </Button>
                        </div>
                    </div>
                    <InputCustomerData open={open} setOpen={setOpen} />
                </>
            )}
        </>
    );
};

export default CartItems;
