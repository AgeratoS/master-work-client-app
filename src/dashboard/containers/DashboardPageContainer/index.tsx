import DashboardPage from "@/dashboard/components/DashboardPage";
import { DashboardPageProps } from "@/dashboard/types";

/**
 * Компонент-контейнер: представляет собой страницу дэшборда
 * @returns Component
 */
function DashboardPageContainer() {

    const requestsCount: DashboardPageProps['requestsCount'] = [];
    const requestsPerHourStat: DashboardPageProps['requestsPerHourStat'] = [];

    return (
        <DashboardPage
            requestsCount={requestsCount}
            requestsPerHourStat={requestsPerHourStat}
        />
    );
}

export default DashboardPageContainer;