import React from "react";
import { GetStaticProps } from "next/types";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import { fetchedData, fetchedDataForSearch } from '../../types/fetchedDataForPages';

interface iphone11Props {
    data: fetchedDataForSearch[];
}

const iphone11 = ({ data }: iphone11Props) => {
    return (
        <>
            <div className="phonePages">
                {data.map((phone: fetchedDataForSearch) => {
                        return (
                            <PhoneCard
                                key={phone.id}
                                title={phone.title}
                                imgUrl={phone.imgUrl}
                                color={phone.color}
                                memory={phone.memory}
                                price={phone.price}
                                description={phone.description}
                                subtitle={phone.subtitle}
                                id={phone.id}
                            />
                        );
                })}
            </div>
        </>
    );
};

export default iphone11;

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(
        "https://next-phones.vercel.app/api/next-phones"
    );


    const dataPhone: fetchedData[] = await res.json();

    const dataThisPhone = dataPhone.filter((obj) => obj.title === "Apple iPhone 11");

    const nestedArray = dataThisPhone.map((phone) =>
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

    const data = nestedArray.flat();

    return {
        props: {
            data,
        },
        revalidate: 5,
    };
};
