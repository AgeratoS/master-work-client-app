// Domain types

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
    onRemove?: (servicesId: number[]) => void;
    onClickService?: (serviceId: number) => void;
}