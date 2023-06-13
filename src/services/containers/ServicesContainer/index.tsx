import Services from "@/services/components/Services";
import { Mutation, Query } from "@/services/graphql";
import { ServicesProps } from "@/services/types";
import { selectedServicesIds } from "@/services/vars";
import { useMutation, useQuery, useReactiveVar } from "@apollo/client";

function ServicesContainer() {

    const { data: services, refetch } = useQuery(Query.services, {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first"
    });

    const [removeServices] = useMutation(Mutation.removeServices, {
        onCompleted: refetch
    });

    const _selectedServices = useReactiveVar(selectedServicesIds);

    const onChangeSelect: ServicesProps['onChangeSelect'] = (model) => {
        selectedServicesIds(model as number[]);
    }

    const onRemove: ServicesProps['onRemove'] = () => {
        // 1. Взять IDs из _selectedServices;
        // 2. Вызвать мутацию удаления;
        // 3. Сбросить выделение

        const servicesIds = _selectedServices.map((item) => parseInt((item as any) as string));

        removeServices({
            variables: {
                servicesIds
            }
        });
        selectedServicesIds([]);
    }

    const onAdd: ServicesProps['onAdd'] = () => {
        refetch();
    }

    return (
        <Services services={services?.serviceAll ?? []} onChangeSelect={onChangeSelect} onRemove={onRemove} removeDisabled={_selectedServices.length === 0} onAdd={onAdd} />
    );
}

export default ServicesContainer;