import ServiceFormBase from "@/services/components/ServiceFormBase";
import { UpdateServiceProps } from "@/services/types";

function UpdateServiceContainer() {

    const onSubmit: UpdateServiceProps['onSubmit'] = (data) => {

    }

    const initialData: UpdateServiceProps['initialData'] = {
        id: 123,
        name: '',
        url: '',
    }

    return (
        <ServiceFormBase
            onSubmit={onSubmit}
            initialData={initialData}
        />
    );
}

export default UpdateServiceContainer;