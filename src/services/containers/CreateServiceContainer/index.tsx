import ServiceFormBase from "@/services/components/ServiceFormBase";
import { Mutation, Query } from "@/services/graphql";
import { CreateServiceContainerProps, CreateServiceDto, CreateServiceProps } from "@/services/types";
import { useMutation, useQuery } from "@apollo/client";


function CreateServiceContainer(props: CreateServiceContainerProps) {

    const { data, loading } = useQuery(Query.solutions);
    const [createService] = useMutation(Mutation.createService, {
        onCompleted: props.onAdd
    });

    const onSubmit: CreateServiceProps['onSubmit'] = (data) => {

        const serviceSolutionNumber = parseInt((data as any).serviceSolutionId as string);

        createService({
            variables: {
                createServiceInput: { ...data, serviceSolutionId: serviceSolutionNumber }
            }
        });
    }

    const initialData: CreateServiceProps['initialData'] = {
        name: '',
        externalUrl: '',
    }


    return (
        <ServiceFormBase<CreateServiceDto>
            serviceSolutions={data?.solutions ?? []}
            onSubmit={onSubmit}
            loading={loading}
            initialData={initialData}
        />
    );
}

export default CreateServiceContainer;