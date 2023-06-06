import { Meta, StoryObj } from "@storybook/react";
import ServiceFormBaseComponent from ".";

const meta: Meta<typeof ServiceFormBaseComponent> = {
    title: 'ServiceFormBase',
    component: ServiceFormBaseComponent
}

export default meta;

export const ServiceFormBase: StoryObj<typeof ServiceFormBaseComponent> = {
    args: {
        initialData: {
            name: '',
            url: ''
        }
    }
}