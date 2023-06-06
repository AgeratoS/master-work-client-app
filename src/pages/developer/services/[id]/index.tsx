import CustomHead from "@/common/components/CustomHead";
import Layout from "@/common/components/Layout";
import { useRouter } from "next/router";
import { ReactElement } from "react";

function ServicePage() {

    const router = useRouter();

    return (
        <>
            <CustomHead title={`CloudSphere | Сервис #${router.query.id}`} />
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