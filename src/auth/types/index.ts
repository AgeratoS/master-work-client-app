export type SessionData = {
    login: string;
    password: string;
}

export type RegisterData = SessionData & {
    repeatPassword: string;
}

export type AuthFormProps = {
    data?: SessionData;
    onSubmit: (data: SessionData) => void;
}

export type RegisterFormProps = {
    onSubmit: (data: SessionData) => void;
}