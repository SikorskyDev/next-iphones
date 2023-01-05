import React from "react";
import { Carousel } from "flowbite-react";
import styles from "./Carousele.module.scss";
import Image from "next/image";
import img1 from "../../public/img/carousel/1.webp";
import img2 from "../../public/img/carousel/2.webp";
import img3 from "../../public/img/carousel/3.webp";

const Carousele: React.FC = () => {
    return (
        <>
            <div
                className={`h-56 sm:h-64 xl:h-80 2xl:h-96 ${styles.carousele}`}
            >
                <Carousel>
                    <Image src={img1} alt="..." />
                    <Image src={img2} alt="..." />
                    <Image src={img3} alt="..." />
                </Carousel>
            </div>
        </>
    );
};

export default Carousele;
