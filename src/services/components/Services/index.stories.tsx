import { Meta, StoryObj } from "@storybook/react";
import ServicesComponent from ".";
import { Service } from "@/services/types";

const meta: Meta<typeof ServicesComponent> = {
    title: 'Services',
    component: ServicesComponent
}

export default meta;

const fakeServices: Service[] = [
    {
        id: 1,
        name: 'API 1',
        url: 'http://localhost:1234/1'
    },
    {
        id: 2,
        name: 'API 2',
        url: 'http://localhost:1234/2'
    },
    {
        id: 3,
        name: 'Cloud service 1',
        url: 'http://localhost:1234/3'
    },
    {
        id: 4,
        name: 'Cloud service 2',
        url: 'http://localhost:1234/4'
    },
    {
        id: 5,
        name: 'Cloud service 3',
        url: 'http://localhost:1234/5'
    },
    {
        id: 6,
        name: 'API 3',
        url: 'http://localhost:1234/6'
    },
    {
        id: 7,
        name: 'Cloud service 4',
        url: 'http://localhost:1234/7'
    },
    {
        id: 8,
        name: 'Cloud service 5',
        url: 'http://localhost:1234/8'
    },
    {
        id: 9,
        name: 'API 4',
        url: 'http://localhost:1234/9'
    },
    {
        id: 10,
        name: 'API 5',
        url: 'http://localhost:1234/10'
    },
]

export const ServicesWithData: StoryObj<typeof ServicesComponent> = {
    args: {
        services: fakeServices
    }
}