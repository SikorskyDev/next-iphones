import Link from "next/link";
import React from "react";
import Cart from "../Cart/Cart";
import MySearch from "../MySearch/MySearch";
import styles from "./Header.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function MyHeader() {
    const [showBurger, setShowBurger] = React.useState("flex");
    const [showCloseBurger, setShowCloseBurger] = React.useState("none");
    const [showBurgerContent, setShowBurgerContent] = React.useState("none");

    const handleBurger = () => {
        setShowCloseBurger("block");
        setShowBurger("none");
        setShowBurgerContent("flex");
        if (showCloseBurger === "block" && showBurger === "none") {
            setShowCloseBurger("none");
            setShowBurger("flex");
            setShowBurgerContent("none");
        }
    };

    const handleCloseBurgerAfterClick = () => {
        setShowCloseBurger("none");
        setShowBurger("flex");
        setShowBurgerContent("none");
    };

    return (
        <>
            <div className={styles.header}>
                <Link href="/" className={styles.link}>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        NextPhones
                    </span>
                </Link>

                <MySearch />

                <div className={styles.navLinksContainer}>
                    <Link
                        href="iphone14"
                        className={styles.navLinks}
                        onClick={handleCloseBurgerAfterClick}
                    >
                        <b>iPhone 14</b>
                    </Link>
                    <div className={styles.vertLine} />
                    <Link
                        href="iphone13"
                        className={styles.navLinks}
                        onClick={handleCloseBurgerAfterClick}
                    >
                        <b>iPhone 13</b>
                    </Link>
                    <div className={styles.vertLine} />
                    <Link
                        href="iphone12"
                        className={styles.navLinks}
                        onClick={handleCloseBurgerAfterClick}
                    >
                        <b>iPhone 12</b>
                    </Link>
                    <div className={styles.vertLine} />
                    <Link
                        href="iphone11"
                        className={styles.navLinks}
                        onClick={handleCloseBurgerAfterClick}
                    >
                        <b>iPhone 11</b>
                    </Link>
                    <div className={styles.vertLine} />
                    <Link
                        href="iphonexr"
                        className={styles.navLinks}
                        onClick={handleCloseBurgerAfterClick}
                    >
                        <b>iPhone XR</b>
                    </Link>
                </div>
                <Cart />
                <div className={styles.burger} onClick={handleBurger}>
                    <RxHamburgerMenu
                        style={{ display: `${showBurger}` }}
                        size={25}
                    />
                    <AiOutlineClose
                        style={{ display: `${showCloseBurger}` }}
                        size={25}
                    />
                </div>
            </div>
            <div
                className={styles.burgerList}
                style={{ display: `${showBurgerContent}` }}
            >
                <Link
                    href="iphone14"
                    className={styles.navLinks}
                    onClick={handleCloseBurgerAfterClick}
                >
                    <b>iPhone 14</b>
                </Link>
                <Link
                    href="iphone13"
                    className={styles.navLinks}
                    onClick={handleCloseBurgerAfterClick}
                >
                    <b>iPhone 13</b>
                </Link>
                <Link
                    href="iphone12"
                    className={styles.navLinks}
                    onClick={handleCloseBurgerAfterClick}
                >
                    <b>iPhone 12</b>
                </Link>
                <Link
                    href="iphone11"
                    className={styles.navLinks}
                    onClick={handleCloseBurgerAfterClick}
                >
                    <b>iPhone 11</b>
                </Link>
                <Link
                    href="iphonexr"
                    className={styles.navLinks}
                    onClick={handleCloseBurgerAfterClick}
                >
                    <b>iPhone XR</b>
                </Link>
            </div>
        </>
    );
}

export default MyHeader;
