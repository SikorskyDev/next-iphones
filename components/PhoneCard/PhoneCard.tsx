import React from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { PhoneCardProps } from "../../types/fetchedDataForPages";
import Link from "next/link";
import { useAppDispatch } from "../../store/store";
import { CartItemType } from "../../store/cart/types";
import { addItem } from "../../store/cart/cartSlice";

const PhoneCard = ({
    title,
    imgUrl,
    color,
    memory,
    price,
    subtitle,
    id,
}: PhoneCardProps) => {
    const dispatch = useAppDispatch();

    const handleBuy = () => {
        const item: CartItemType = {
            id,
            color,
            count: 0,
            memory,
            price,
            subtitle,
            title,
        };
        dispatch(addItem(item));
    };


    return (
        <div className="card">
            <div className="card__img">
                <Link href={`${id}`}>
                    <Image src={imgUrl} alt="11" width="270" height="270" />
                </Link>
            </div>
            <div className="card__title">
                <Link href={`${id}`}>
                    {title} {subtitle} {color} <br /> ({memory} GB)
                </Link>
            </div>
            <div className="card__line" />
            <div className="card__buy">
                <div className="card__price">{price} ₴</div>
                <Button
                    color="dark"
                    className="card__buyBtn"
                    onClick={handleBuy}
                >
                    КУПИТИ
                </Button>
            </div>
        </div>
    );
};

export default PhoneCard;
