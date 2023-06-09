import CustomHead from "@/common/components/CustomHead";
import Layout from "@/common/components/Layout";
import DashboardPageContainer from "@/dashboard/containers/DashboardPageContainer";
import { ReactElement } from "react";

function DashboardPage() {

    return (
        <>
            <CustomHead title="CloudSphere | Главная" />
            <DashboardPageContainer />
        </>
    );
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default DashboardPage;