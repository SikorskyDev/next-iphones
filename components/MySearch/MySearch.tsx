import { Modal, Button } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import styles from "./MySearch.module.scss";
import SelectMemory from "./SelectMemory/SelectMemory";
import SelectColor from "./SelectColor/SelectColor";
import SelectNumber from "./SelectNumber";
import SelectModel from "./SelectModel";
import Link from "next/link";

const MySearch: React.FC = () => {
    const [ScaleSearchIcon, setScaleSearchIcon] = useState(30);
    const [showSearchModal, setShowSearchModal] = useState(false);
    return (
        <div
            className={styles.search}
            onMouseEnter={() => setScaleSearchIcon(35)}
            onMouseLeave={() => setScaleSearchIcon(30)}
        >
            <AiOutlineSearch
                size={ScaleSearchIcon}
                onClick={() => setShowSearchModal(!showSearchModal)}
            />
            <Modal
                show={showSearchModal}
                size="md"
                popup={true}
                onClose={() => setShowSearchModal(!showSearchModal)}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className={`space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 ${styles.searchBody}`}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Пошук iPhone:
                        </h3>
                        <div className={styles.searchName}>
                            <div className={styles.searchName__phoneNumber}>
                                <SelectNumber />
                            </div>
                            <div className={styles.searchName__phoneModel}>
                                <SelectModel />
                            </div>
                        </div>
                        <div>
                            <div className={`${styles.memory__items}`}>
                                <SelectMemory />
                                <SelectColor />
                            </div>
                        </div>
                        <div className="w-full">
                            <Link href="searched" className={styles.btnSearch}>
                                <Button color="dark" size={"xl"} onClick={() => setShowSearchModal(!showSearchModal)}>
                                    ПОШУК
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MySearch;
