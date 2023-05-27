import { useState } from "react";
import { Button, Stack, Typography } from "@mui/material";
import AuthForm from "@/auth/components/AuthForm";
import RegisterForm from "@/auth/components/RegisterForm";
import { FormMode, SessionFormProps } from "@/auth/types";
import { isAuthMode, isRegisterMode } from "@/auth/utils";

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
                <AuthForm {...props} onChangeToRegister={toggleMode} />
            </Stack>
        )
    }

    else if (isRegisterMode(formMode)) {
        return (
            <Stack spacing={8}>
                <Typography variant="h4">Register to system</Typography>
                <RegisterForm {...props} onChangeToAuth={toggleMode} />
            </Stack>
        )
    }

    return null;
}

export default SessionForm;