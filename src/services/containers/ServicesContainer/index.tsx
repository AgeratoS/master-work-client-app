import Services from "@/services/components/Services";
import { fakeServices } from "@/services/mocks";
import { Service, ServicesProps } from "@/services/types";
import { selectedServicesIds, tempServices } from "@/services/vars";
import { useReactiveVar } from "@apollo/client";

function ServicesContainer() {

    const services: Service[] = useReactiveVar(tempServices);

    const _selectedServices = useReactiveVar(selectedServicesIds);

    const onChangeSelect: ServicesProps['onChangeSelect'] = (model) => {
        selectedServicesIds(model as number[]);
    }

    const onRemove: ServicesProps['onRemove'] = () => {
        // 1. Взять IDs из _selectedServices;
        // 2. Вызвать мутацию удаления;
        // 3. Сбросить выделение

        tempServices(services.filter((item) => !_selectedServices.includes(item.id)));
        selectedServicesIds([]);
    }

    const onAdd: ServicesProps['onAdd'] = () => {
        // Показать модалку добавления
    }

    return (
        <Services services={services} onChangeSelect={onChangeSelect} onRemove={onRemove} removeDisabled={_selectedServices.length === 0} />
    );
}

export default ServicesContainer;