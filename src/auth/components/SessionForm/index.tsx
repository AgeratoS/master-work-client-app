import { useState } from "react";
import { Button } from "@mui/material";
import AuthForm from "../AuthForm";
import RegisterForm from "../RegisterForm";
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
            <>
                <AuthForm {...props} />
                <Button data-testid="ChangeFormLink" onClick={toggleMode}>Sign in</Button>
            </>
        )
    }

    else if (isRegisterMode(formMode)) {
        return (
            <>
                <RegisterForm {...props} />
                <Button data-testid="ChangeFormLink" onClick={toggleMode}>Auth</Button>
            </>
        )
    }

    return null;
}

export default SessionForm;