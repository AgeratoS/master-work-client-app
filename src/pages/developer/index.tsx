import { ReactElement } from "react";
import Layout from "../../common/components/Layout";

function DeveloperPage() {

    return (
        <>
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