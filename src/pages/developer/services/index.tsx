import Layout from "@/common/components/Layout";
import { ReactElement } from "react";

function ServicesPage() {


    return (
        <>
            <p>Services page</p>
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