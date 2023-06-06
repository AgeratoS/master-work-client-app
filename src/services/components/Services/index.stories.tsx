import { Meta, StoryObj } from "@storybook/react";
import ServicesComponent from ".";
import { fakeServices } from "@/services/mocks";

const meta: Meta<typeof ServicesComponent> = {
    title: 'Services',
    component: ServicesComponent
}

export default meta;

export const ServicesWithData: StoryObj<typeof ServicesComponent> = {
    args: {
        services: fakeServices
    }
}