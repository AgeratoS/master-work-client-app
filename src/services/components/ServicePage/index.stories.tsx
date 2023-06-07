import ServicePageComponent from '.';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ServicePageComponent> = {
    title: 'Service page',
    component: ServicePageComponent,
    tags: ['autodocs']
}

export default meta;

export const ServicePage: StoryObj<typeof ServicePageComponent> = {
    args: {
        service: {
            id: 1,
            name: "Service 1",
            url: "http://localhost:5123/1"
        }
    }
}