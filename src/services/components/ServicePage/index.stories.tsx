import ServicePageComponent from '.';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ServicePageComponent> = {
    title: 'Service page',
    component: ServicePageComponent,
    tags: ['autodocs']
}

export default meta;

export const ServicePage: StoryObj<typeof ServicePageComponent> = {
    args: {}
}