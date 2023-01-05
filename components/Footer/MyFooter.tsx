import React from "react";
import styles from "./MyFooter.module.scss";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";

const MyFooter: React.FC = () => {
    return (
        <>
            <Footer className={styles.footer}>
                <Footer.Copyright
                    href="#"
                    by="NextPhones™"
                    year={2022}
                    className="text-white"
                />
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Footer.Icon icon={BsFacebook} />
                    <Footer.Icon href="#" icon={BsInstagram} />
                    <Footer.Icon href="#" icon={BsTwitter} />
                    <Footer.Icon href="#" icon={BsGithub} />
                </div>
            </Footer>
        </>
    );
};

export default MyFooter;
