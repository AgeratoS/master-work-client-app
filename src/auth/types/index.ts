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
    onChangeToRegister?: VoidFunction;
}

export type RegisterFormProps = {
    onSubmit: (data: SessionData) => void;
    onChangeToAuth?: VoidFunction;
}

export enum FormMode {
    AUTH, REGISTER
}

export type SessionFormProps = AuthFormProps | RegisterFormProps;