import SessionForm from "@/auth/components/SessionForm";
import { SessionFormProps } from "@/auth/types";

function SessionFormContainer() {

    const onSubmit: SessionFormProps['onSubmit'] = (data) => {
        console.log(data);
    }

    return (
        <SessionForm onSubmit={onSubmit} />
    );
}

export default SessionFormContainer;