import DashboardPageComponent from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DashboardPageComponent> = {
    title: 'Pages/DashboardPage',
    component: DashboardPageComponent,
    tags: ['autodocs']
}

export default meta;

export const DashboardPage: StoryObj<typeof DashboardPageComponent> = {
    args: {}
}