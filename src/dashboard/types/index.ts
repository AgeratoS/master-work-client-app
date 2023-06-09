export type RequestLineData = {
    source1: number;
    source2: number;
    source3: number;
}

export type RequestsCountStat = {
    time: string;
    data: RequestLineData;
}

export type RequestsPerHourStat = {
    time: string;
    requests: number;
}

export type DashboardPageProps = {
    requestsCount: RequestsCountStat[],
    requestsPerHourStat: RequestsPerHourStat[]
}