// Domain types

import { GridRowSelectionModel } from "@mui/x-data-grid";

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
    url: string;
    metric?: ServiceMetric;
    logs?: ServiceLog[]
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

export type CreateServiceDto = Pick<Service, 'name' | 'url'>;
export type UpdateServiceDto = Pick<Service, 'id' | 'name' | 'url'>;

export type ServiceDto = CreateServiceDto | UpdateServiceDto;

export type ServiceFormBaseProps<T> = {
    onSubmit: (data: T) => void;
    initialData: T;
}

export type CreateServiceProps = ServiceFormBaseProps<CreateServiceDto>;
export type UpdateServiceProps = ServiceFormBaseProps<UpdateServiceDto>;