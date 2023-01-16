import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import stl from "./formStyle.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { AiOutlineClose } from "react-icons/ai";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

interface InputCustomerDataProps {
    open: boolean;
    setOpen: (value: boolean | ((open: boolean) => boolean)) => void;
}

interface formData {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
}

export default function InputCustomerData({
    open,
    setOpen,
}: InputCustomerDataProps) {
    const { items } = useSelector((state: RootState) => state.CartSlice);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
    } = useForm<formData>({
        mode: "onBlur",
    });

    const onSubmit = handleSubmit((data) => {
        alert(JSON.stringify({ data, items }));
        reset();
    });

    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={stl.formContainer}>
                    <div className={stl.close} onClick={handleClose}>
                        <AiOutlineClose />
                    </div>
                    <form onSubmit={onSubmit}>
                        <label>
                            Ім'я:
                            <input
                                placeholder="Степан"
                                {...register("firstName", {
                                    required: "поле обов'язкове для заповнення",
                                    minLength: {
                                        value: 2,
                                        message: "мінімум два символа",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "не більше 20-ти символів",
                                    },
                                })}
                            />
                        </label>
                        <div style={{ height: 20 }}>
                            {errors?.firstName && (
                                <p>
                                    {errors?.firstName?.message || "Помилка!"}
                                </p>
                            )}
                        </div>
                        <label>
                            Прізвище:
                            <input
                                placeholder="Бандера"
                                {...register("lastName", {
                                    required: "поле обов'язкове для заповнення",
                                    minLength: {
                                        value: 2,
                                        message: "мінімум два символа",
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: "не більше 20-ти символів",
                                    },
                                })}
                            />
                        </label>
                        <div style={{ height: 20 }}>
                            {errors?.lastName && (
                                <p>{errors?.lastName?.message || "Помилка!"}</p>
                            )}
                        </div>
                        <label>
                            Номер телефону:
                            <input
                            placeholder="0931234567"
                                type="number"
                                {...register("phone", {
                                    required: "поле обов'язкове для заповнення",
                                    minLength: {
                                        value: 10,
                                        message: "не вірно",
                                    },
                                    maxLength: {
                                        value: 13,
                                        message: "не вірно",
                                    },
                                })}
                            />
                        </label>
                        <div style={{ height: 20 }}>
                            {errors?.phone && (
                                <p>{errors?.phone?.message || "Помилка!"}</p>
                            )}
                        </div>
                        <label>
                            Пошта:
                            <input
                            placeholder="stepan@gmail.com"
                                {...register("email", {
                                    required: "поле обов'язкове для заповнення",
                                    minLength: {
                                        value: 5,
                                        message: "мінімум 5 символів",
                                    },
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: "вкажіть вірну адресу",
                                    },
                                })}
                            />
                        </label>
                        <div style={{ height: 20 }}>
                            {errors?.email && (
                                <p>{errors?.email?.message || "Помилка!"}</p>
                            )}
                        </div>
                        {/* <input type="reset" value="ОЧИСТИТИ" /> */}
                        <input
                            type="submit"
                            value="КУПИТИ"
                            disabled={!isValid}
                        />
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
