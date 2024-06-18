"use client";
import AgencyLogo from "@/components/UI/AgencyLogo";
import { setUser } from "@/store/user";
import { Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./loginForm.module.scss";

interface ILoginData {
    email: string;
    password: string;
}

const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const LoginForm: FC = () => {
    const { replace } = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm<ILoginData>({ mode: "onChange" });

    const onSubmit: SubmitHandler<ILoginData> = (data) => {
        setUser(data);
        replace("/");
        reset();
    };

    return (
        <div className={styles.loginForm}>
            <div className={styles.logo}>
                <AgencyLogo />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Typography component="h1" variant="h5">
                    Вход в Личный кабинет
                </Typography>
                <TextField
                    {...register("email", {
                        required: "Поле Email обязательно для заполнения",
                        pattern: {
                            value: EMAIL_REGEXP,
                            message: "Введите корректный Email"
                        }
                    })}
                    error={!!errors.email}
                    id="outlined-required-error-helper-text"
                    label="Email"
                    color="warning"
                    autoComplete="email"
                    helperText={errors.email?.message || " "}
                />
                <TextField
                    {...register("password", {
                        required: 'Поле "Пароль" обязательно для заполнения',
                        minLength: {
                            value: 8,
                            message: "Минимальное количество символов - 8"
                        }
                    })}
                    error={!!errors.password}
                    id="outlined-required-password-input"
                    label="Пароль"
                    color="warning"
                    type="password"
                    autoComplete="current-password"
                    helperText={errors.password?.message || " "}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="warning"
                    disabled={!isValid}
                >
                    Вход
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
