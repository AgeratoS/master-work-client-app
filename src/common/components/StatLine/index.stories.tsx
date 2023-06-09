import { Meta, StoryObj } from "@storybook/react";
import StatLineComponent from ".";

const meta: Meta<typeof StatLineComponent> = {
    title: 'StatLine',
    component: StatLineComponent,
    tags: ['autodocs']
}

export default meta;

export const ServiceStat: StoryObj<typeof StatLineComponent<{
    time: string;
    requests: number;
}>> = {
    args: {
        name: 'Requests count',
        data: [{
            time: '20:00',
            requests: 58
        }, {
            time: '22:00',
            requests: 80
        }, {
            time: '24:00',
            requests: 84
        }, {
            time: '02:00',
            requests: 85
        }, {
            time: '04:00',
            requests: 89
        }, {
            time: '06:00',
            requests: 64
        }],
        xAxisKey: 'time',
        lines: [{
            name: 'Requests',
            type: 'linear',
            dataKey: 'requests',
        }]
    }
}