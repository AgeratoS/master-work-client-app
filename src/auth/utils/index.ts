import { FormMode } from "@/auth/types";

export function isAuthMode(value: FormMode): value is FormMode.AUTH {
    return value === FormMode.AUTH;
}

export function isRegisterMode(value: FormMode): value is FormMode.REGISTER {
    return value === FormMode.REGISTER;
}