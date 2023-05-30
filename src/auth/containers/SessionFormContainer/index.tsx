import SessionForm from "@/auth/components/SessionForm";
import { Mutation, Query } from "@/auth/graphql";
import { SessionFormProps } from "@/auth/types";
import { isAuthMode, isRegisterMode } from "@/auth/utils";
import { useLazyQuery, useMutation } from "@apollo/client";

function SessionFormContainer() {

    const [register, { data, loading, error }] = useMutation(Mutation.createDeveloper);
    const [login] = useLazyQuery(Query.verifyDeveloper);

    const onAuth: SessionFormProps['onSubmit'] = (data) => {
        login({
            variables: data
        });
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