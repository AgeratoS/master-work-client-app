import { Meta, StoryObj } from "@storybook/react";
import AppMenuComponent from ".";

const meta: Meta<typeof AppMenuComponent> = {
    title: 'AppMenu',
    component: AppMenuComponent,
}

export default meta;

export const AppMenu: StoryObj<typeof AppMenuComponent> = {
    args: {

    }
}