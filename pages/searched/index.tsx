import React from "react";
import { GetStaticProps } from "next/types";
import PhoneCard from "../../components/PhoneCard/PhoneCard";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {
    fetchedData,
    fetchedDataForSearch,
} from "../../types/fetchedDataForPages";
import stl from './searched.module.scss'

interface searchedProps {
    data: fetchedDataForSearch[];
}

const searched = ({ data }: searchedProps) => {
    const memorySize: any = useSelector((state: RootState)=> state.SearchSlice.memory);
    const colorPhone: any = useSelector((state: RootState)=> state.SearchSlice.color);
    const phoneNumber: any = useSelector((state: RootState)=> state.SearchSlice.number);
    const phoneModel: any = useSelector((state: RootState)=> state.SearchSlice.model);

    const myFilters = {
        findColor: (obj: { color: string }) => obj.color === colorPhone,
        findMemory: (obj: { memory: number }) =>
            obj.memory === Number(memorySize),
        findNumber: (obj: { title: string }) =>
            obj.title === `Apple iPhone ${phoneNumber}`,
        findModel: (obj: { subtitle: string }) => obj.subtitle === phoneModel,
    };

    const selected: any[] = [];

    if (memorySize !== "") {
        selected.push(myFilters.findMemory);
    }
    if (colorPhone !== "") {
        selected.push(myFilters.findColor);
    }
    if (phoneNumber !== "") {
        selected.push(myFilters.findNumber);
    }
    if (phoneModel !== "") {
        selected.push(myFilters.findModel);
    }

    const findedPhones = data.filter((obj) => selected.every((f) => f(obj)));

    return (
        <>
            <h1 className={stl.h1}>
                {
                    findedPhones.length > 0 ? 'Знайдені телефони:' : "За вказаними параметрами жодного телефону не знайдено"
                }
            </h1>
            <div className="phonePages">
                {findedPhones.map((phone: fetchedDataForSearch) => {
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

export default searched;

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch(
        "https://next-phones.vercel.app/api/next-phones"
    );
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

    const data = nestedArray.flat();

    return {
        props: {
            data,
        },
        revalidate: 5,
    };
};
