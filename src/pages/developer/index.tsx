import { ReactElement } from "react";
import Layout from "../../common/components/Layout";
import CustomHead from "@/common/components/CustomHead";

function DeveloperPage() {

    return (
        <>
            <CustomHead title="CloudSphere | Разработчик" />
            <p>Developer page</p>
        </>
    );
}

DeveloperPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default DeveloperPage;