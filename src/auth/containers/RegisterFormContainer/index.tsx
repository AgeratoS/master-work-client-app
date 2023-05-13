import RegisterForm from "@/auth/components/RegisterForm";
import { RegisterFormProps } from "@/auth/types";

function RegisterFormContainer() {

    const onSubmit: RegisterFormProps['onSubmit'] = (data) => {
        console.log(data);
    }

    return (
        <RegisterForm onSubmit={onSubmit} />
    );
}

export default RegisterFormContainer;