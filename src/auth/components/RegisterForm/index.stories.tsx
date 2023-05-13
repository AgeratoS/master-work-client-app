import { Meta, StoryObj } from "@storybook/react";
import RegisterFormComponent from ".";

const meta: Meta<typeof RegisterFormComponent> = {
    title: 'RegisterForm',
    component: RegisterFormComponent
}

export default meta;

export const RegisterForm: StoryObj<typeof RegisterFormComponent> = {
    args: {
        onSubmit: () => { }
    }
}