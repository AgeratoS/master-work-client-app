import SessionForm from "@/auth/components/SessionForm";
import { Mutation, Query } from "@/auth/graphql";
import { SessionFormProps } from "@/auth/types";
import { isAuthMode, isRegisterMode } from "@/auth/utils";
import { authToken } from "@/common/vars";
import { useLazyQuery, useMutation } from "@apollo/client";

function SessionFormContainer() {

    const [register, { data, loading, error }] = useMutation(Mutation.createDeveloper);

    const onAuth: SessionFormProps['onSubmit'] = async (data) => {
        const authResponse = await fetch('http://localhost:3000/auth/login', {
            body: JSON.stringify({
                username: data.login,
                password: data.password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        });
        if (authResponse.body) {
            const jsonResult = await authResponse.json();
            if (jsonResult.accessToken) {
                authToken(jsonResult.accessToken)
            } else {
                console.error("There is no such user")
            }
        } else {
            console.error("There is no such user")
        }
    }

    const onRegister: SessionFormProps['onSubmit'] = (data) => {
        register({
            variables: {
                createDeveloperInput: {
                    login: data.login,
                    password: data.password
                }
            }
        });
    }

    const onSubmit: SessionFormProps['onSubmit'] = (data, formMode) => {
        if (isRegisterMode(formMode)) {
            onRegister(data, formMode);
        }
        else if (isAuthMode(formMode)) {
            onAuth(data, formMode)
        }
    }

    return (
        <SessionForm onSubmit={onSubmit} />
    );
}

export default SessionFormContainer;