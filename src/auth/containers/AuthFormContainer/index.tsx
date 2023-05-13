import AuthForm from "@/auth/components/AuthForm";
import { AuthFormProps } from "@/auth/types";

function AuthFormContainer() {

    const onSubmit: AuthFormProps['onSubmit'] = (data) => {
        // TODO: Реализовать логику
        console.log(data);
    }

    return (
        <AuthForm onSubmit={onSubmit} />
    );
}

export default AuthFormContainer;