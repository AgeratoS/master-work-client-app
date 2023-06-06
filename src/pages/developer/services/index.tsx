import CustomHead from "@/common/components/CustomHead";
import Layout from "@/common/components/Layout";
import ServicesContainer from "@/services/containers/ServicesContainer";
import { ReactElement } from "react";

function ServicesPage() {


    return (
        <>
            <CustomHead title="CloudSphere | Все сервисы" />
            <ServicesContainer />
        </>
    );
}

ServicesPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ServicesPage;