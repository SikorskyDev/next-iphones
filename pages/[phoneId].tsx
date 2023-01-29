import { Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next/types";
import React from "react";
import { addItem } from "../store/cart/cartSlice";
import { CartItemType } from "../store/cart/types";
import { useAppDispatch } from "../store/store";
import {
    fetchedData,
    fetchedDataForSearch,
} from "../types/fetchedDataForPages";

interface PhoneIdProps {
    data: fetchedDataForSearch;
}

const PhoneId: NextPage<PhoneIdProps> = ({ data }) => {
    const dispatch = useAppDispatch();

    const handleBuy = () => {
        const item: CartItemType = {
            id: data.id,
            color: data.color,
            count: 0,
            memory: data.memory,
            price: data.price,
            subtitle: data.subtitle,
            title: data.title,
        };
        dispatch(addItem(item));
    };

    return (
        <>
            <div className="phoneDesc">
                <div className="phoneDesc__wrapper">
                    <div className="phoneDesc__top">
                        <div className="phoneDesc__top-image">
                            {data.imgUrl && (
                                <Image
                                    src={data.imgUrl}
                                    width={400}
                                    height={400}
                                    alt="phone"
                                />
                            )}
                        </div>
                        <div className="phoneDesc__top-body">
                            <div className="phoneDesc__top-body-title">
                                {data.title} {data.subtitle}
                            </div>
                            <div className="phoneDesc__top-body-price">
                                Ціна: <b>{data.price}</b> ₴
                            </div>
                            <div className="phoneDesc__top-line" />
                            <div className="phoneDesc__top-body-memory">
                                Пам'ять: {data.memory} GB
                            </div>
                            <div className="phoneDesc__top-body-color">
                                Колір: {data.color}
                            </div>
                            <div className="phoneDesc__top-line" />
                            <div className="phoneDesc__top-body-btn">
                                <Link href="#phoneDesc">
                                    <Button
                                        gradientMonochrome="info"
                                        size={"xl"}
                                    >
                                        ХАРАКТЕРИСТИКИ
                                    </Button>
                                </Link>
                                <Button
                                    gradientMonochrome="success"
                                    size={"xl"}
                                    id="phoneDesc"
                                    onClick={handleBuy}
                                >
                                    КУПИТИ
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="phoneDesc__bottom">
                        <h2 className="phoneDesc__bottom-desc">
                            Основні характеристики:
                        </h2>
                        <div className="phoneDesc__bottom-field">
                            <div className="phoneDesc__bottom-field-title">
                                Камера
                            </div>
                            <div className="phoneDesc__bottom-field-dotes">
                                ...............................................................................................................................................................................................................................
                            </div>
                            <div className="phoneDesc__bottom-field-text">
                                <ul className="phoneDesc__bottom-field-list">
                                    {data.description.camera
                                        .split(";")
                                        .map((value, index) => {
                                            return (
                                                <li key={index}>{value};</li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="phoneDesc__bottom-field">
                            <div className="phoneDesc__bottom-field-title">
                                Дисплей
                            </div>
                            <div className="phoneDesc__bottom-field-dotes">
                                ...............................................................................................................................................................................................................................
                            </div>
                            <div className="phoneDesc__bottom-field-text">
                                <ul className="phoneDesc__bottom-field-list">
                                    {data.description.display
                                        .split(";")
                                        .map((value, index) => {
                                            return (
                                                <li key={index}>{value};</li>
                                            );
                                        })}
                                </ul>
                            </div>
                        </div>
                        <div className="phoneDesc__bottom-field">
                            <div className="phoneDesc__bottom-field-title">
                                Батарея
                            </div>
                            <div className="phoneDesc__bottom-field-dotes">
                                ...............................................................................................................................................................................................................................
                            </div>
                            <div className="phoneDesc__bottom-field-text">
                                {data.description.battery}
                            </div>
                        </div>
                        <div className="phoneDesc__bottom-field">
                            <div className="phoneDesc__bottom-field-title">
                                Процесор
                            </div>
                            <div className="phoneDesc__bottom-field-dotes">
                                ...............................................................................................................................................................................................................................
                            </div>
                            <div className="phoneDesc__bottom-field-text">
                                {data.description.processor}
                            </div>
                        </div>
                        <div className="phoneDesc__bottom-field">
                            <div className="phoneDesc__bottom-field-title">
                                Розміри
                            </div>
                            <div className="phoneDesc__bottom-field-dotes">
                                ...............................................................................................................................................................................................................................
                            </div>
                            <div className="phoneDesc__bottom-field-text">
                                <ul className="phoneDesc__bottom-field-list">
                                    <li>Довжина: {data.description.length}</li>
                                    <li>Товщина: {data.description.thickness}</li>
                                    <li>Ширина: {data.description.width}</li>
                                </ul>
                            </div>
                        </div>
                        {data.description.protection && (
                            <>
                                <div className="phoneDesc__bottom-field">
                                    <div className="phoneDesc__bottom-field-title">
                                        Захист
                                    </div>
                                    <div className="phoneDesc__bottom-field-dotes">
                                        ...............................................................................................................................................................................................................................
                                    </div>
                                    <div className="phoneDesc__bottom-field-text">
                                        {data.description.protection}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PhoneId;

export const getStaticProps: GetStaticProps = async (ctx: any) => {
    const { params } = ctx;
    const res = await fetch("https://next-phones.vercel.app/api/next-phones");
    const dataPhone: fetchedData[] = await res.json();
    const nestedArray = dataPhone.map((phone) =>
        phone.colors.map((phoneByColor, index) => {
            return {
                title: phone.title,
                subtitle: phone.subtitle,
                imgUrl: phone.imgUrl[index],
                color: phone.colors[index],
                memory: phone.memory,
                price: phone.price,
                description: phone.description,
                id: `${phone.id}${phone.colors[index]}`,
            };
        })
    );

    const dataArr = nestedArray.flat();

    const data = dataArr.find((obj) => obj.id === params.phoneId);

    return {
        props: {
            data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch("https://next-phones.vercel.app/api/next-phones");
    const dataPhone: fetchedData[] = await res.json();
    const nestedArray = dataPhone.map((phone) =>
        phone.colors.map((phoneByColor, index) => {
            return {
                title: phone.title,
                subtitle: phone.subtitle,
                imgUrl: phone.imgUrl[index],
                color: phone.colors[index],
                memory: phone.memory,
                price: phone.price,
                description: phone.description,
                id: `${phone.id}${phone.colors[index]}`,
            };
        })
    );

    const dataArr = nestedArray.flat();
    const paths = dataArr.map((phone: fetchedDataForSearch) => {
        return {
            params: {
                phoneId: `${phone.id}`,
            },
        };
    });

    return {
        paths,
        fallback: true,
    };
};
