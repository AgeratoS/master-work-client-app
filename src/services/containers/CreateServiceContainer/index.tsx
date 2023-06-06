import ServiceFormBase from "@/services/components/ServiceFormBase";
import { CreateServiceDto, CreateServiceProps } from "@/services/types";


function CreateServiceContainer() {

    const onSubmit: CreateServiceProps['onSubmit'] = (data) => {

    }

    const initialData: CreateServiceProps['initialData'] = {
        name: '',
        url: '',
    }


    return (
        <ServiceFormBase<CreateServiceDto>
            onSubmit={onSubmit}
            initialData={initialData}
        />
    );
}

export default CreateServiceContainer;