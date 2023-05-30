import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AuthForm from "@/auth/components/AuthForm";
import RegisterForm from "@/auth/components/RegisterForm";
import { FormMode, SessionFormProps } from "@/auth/types";
import { isAuthMode, isRegisterMode } from "@/auth/utils";

/**
 * Компонент, сочетающий в себе переключение между формой регистрации и аутентификации
 * @param props Параметры для передачи компоненту, см. описание типа
 * @returns Компонент
 */
function SessionForm(props: SessionFormProps) {

    const [formMode, setFormMode] = useState<FormMode>(FormMode.AUTH);

    const toggleMode = () => {
        if (isAuthMode(formMode)) {
            setFormMode(FormMode.REGISTER);
        }
        else {
            setFormMode(FormMode.AUTH);
        }
    }

    if (isAuthMode(formMode)) {
        return (
            <Stack spacing={8}>
                <Typography variant="h4">Log in to system</Typography>
                <AuthForm {...props} onChangeToRegister={toggleMode} onSubmit={(data) => props.onSubmit(data, formMode)} />
            </Stack>
        )
    }

    else if (isRegisterMode(formMode)) {
        return (
            <Stack spacing={8}>
                <Typography variant="h4">Register to system</Typography>
                <RegisterForm {...props} onChangeToAuth={toggleMode} onSubmit={(data) => props.onSubmit(data, formMode)} />
            </Stack>
        )
    }

    return null;
}

export default SessionForm;