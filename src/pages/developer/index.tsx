import { ReactElement } from "react";
import Layout from "../../common/components/Layout";
import CustomHead from "@/common/components/CustomHead";
import DashboardPageContainer from "@/dashboard/containers/DashboardPageContainer";

function DeveloperPage() {

    return (
        <>
            <CustomHead title="CloudSphere | Разработчик" />
            <DashboardPageContainer />
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