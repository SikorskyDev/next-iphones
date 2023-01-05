import { Table } from "flowbite-react";
import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { CartItemType } from "../../../../store/cart/types";
import stl from "./CartItem.module.scss";
import {
    minusItem,
    plusItem,
    removeItem,
} from "../../../../store/cart/cartSlice";
import { useAppDispatch } from "../../../../store/store";

const CartItem = ({
    color,
    count,
    id,
    memory,
    price,
    subtitle,
    title,
}: CartItemType) => {
    const dispatch = useAppDispatch();
    const handleMinus = () => {
        if (count > 1) {
            dispatch(minusItem(id));
        }
    };
    const handlePlus = () => {
        dispatch(plusItem(id));
    };

    const handleRemove = () => {
        dispatch(removeItem(id));
    };

    return (
        <>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {title} {subtitle}
                </Table.Cell>
                <Table.Cell>{color}</Table.Cell>
                <Table.Cell>{memory}</Table.Cell>
                <Table.Cell>
                    <div className={stl.counter}>
                        <div className={stl.minus} onClick={handleMinus}>
                            <AiOutlineMinusCircle size={20} />
                        </div>
                        <div className={stl.count}>{count}</div>
                        <div className={stl.plus} onClick={handlePlus}>
                            <AiOutlinePlusCircle size={20} />
                        </div>
                    </div>
                </Table.Cell>
                <Table.Cell>{price * count} ₴</Table.Cell>
                <Table.Cell>
                    <div className={stl.remove} onClick={handleRemove}>
                        <RiDeleteBin5Fill size={20} />
                    </div>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default CartItem;
