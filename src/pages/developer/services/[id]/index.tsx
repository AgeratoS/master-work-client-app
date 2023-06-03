import Layout from "@/common/components/Layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

function ServicePage() {

    const router = useRouter();


    return (
        <>
            <p>It's page of one service</p>
        </>
    );
}

ServicePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default ServicePage;