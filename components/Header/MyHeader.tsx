import { Navbar } from "flowbite-react";
import Link from "next/link";
import React from "react";
import Cart from "../Cart/Cart";
import MySearch from "../MySearch/MySearch";
import styles from "./Header.module.scss";

function MyHeader() {
    return (
        <>
            <Navbar fluid={true} rounded={true} className={styles.header}>
                <Link href="/" className={styles.link}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        NextPhones
                    </span>
                </Link>

                <MySearch />

                <Cart />

                <Navbar.Collapse>
                    <Link href="iphone14" className={styles.navLinks}>
                        <b>iPhone 14</b>
                    </Link>
                    <Link href="iphone13" className={styles.navLinks}>
                        <b>iPhone 13</b>
                    </Link>
                    <Link href="iphone12" className={styles.navLinks}>
                        <b>iPhone 12</b>
                    </Link>
                    <Link href="iphone11" className={styles.navLinks}>
                        <b>iPhone 11</b>
                    </Link>
                    <Link href="iphonexr" className={styles.navLinks}>
                        <b>iPhone XR</b>
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default MyHeader;
