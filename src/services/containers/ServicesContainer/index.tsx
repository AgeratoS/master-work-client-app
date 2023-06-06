import Services from "@/services/components/Services";
import { fakeServices } from "@/services/mocks";
import { Service } from "@/services/types";

function ServicesContainer() {

    const services: Service[] = fakeServices

    return (
        <Services services={services} />
    );
}

export default ServicesContainer;