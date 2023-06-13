// Domain types

import { GridRowSelectionModel } from "@mui/x-data-grid";
import { CurveType } from "recharts/types/shape/Curve";
import { DataKey } from "recharts/types/util/types";

export type ServiceLog = {
    id: number;
    serviceId: number;
    time: Date;
    log?: string;
}

export type ServiceMetric = {
    id: number;
    serviceId: number;
    requests: number;
}

export type Service = {
    id: number;
    name: string;
    desc?: string;
    externalUrl: string;
    appId?: string;
    apiKey?: string;
    serviceSolutionId?: number;
}

export type CreateServiceDto = Pick<Service, 'name' | 'externalUrl' | 'apiKey' | 'appId' | 'desc' | 'serviceSolutionId'>;
export type UpdateServiceDto = Service;

export type ServiceDto = CreateServiceDto | UpdateServiceDto;

export type RequestsCountStat = {
    time: string;
    requests: number;
}

export type RequestsPerHourStat = {
    time: string;
    requests: number;
}

export type ServiceSolution = {
    id: number;
    name: string;
}


// Component types
export type ServicesProps = {
    services: Service[];
    onAdd?: VoidFunction;
    onRemove?: VoidFunction;
    removeDisabled?: boolean;
    onClickService?: (serviceId: number) => void;
    onChangeSelect?: (rowSelectionModel: GridRowSelectionModel) => void;
}

export type ServiceFormBaseProps<T> = {
    serviceSolutions: ServiceSolution[];
    loading: boolean;
    onSubmit: (data: T) => void;
    initialData: T;
}

export type CreateServiceProps = ServiceFormBaseProps<CreateServiceDto>;
export type UpdateServiceProps = ServiceFormBaseProps<UpdateServiceDto>;


export type CreateServiceContainerProps = {
    onAdd?: VoidFunction;
}

export type ServicePageProps = {
    service: Service;
    onEdit?: (service: UpdateServiceDto) => void;
    onCheckLog?: VoidFunction;
    statistics?: {
        requestsCount?: RequestsCountStat[];
        requestsPerHour?: RequestsPerHourStat[];
    }
}

export type ServiceStatLineProp<T> = {
    name: string;
    type: CurveType;
    dataKey: DataKey<T>;
    stroke?: string;
}

export type ServiceStatProps<T> = {
    name: string;
    data: T[];
    xAxisKey: DataKey<T>;
    lines: ServiceStatLineProp<T>[];
}