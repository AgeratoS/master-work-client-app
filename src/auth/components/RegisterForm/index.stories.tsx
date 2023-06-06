import { Meta, StoryObj } from "@storybook/react";
import RegisterFormComponent from ".";

const meta: Meta<typeof RegisterFormComponent> = {
    title: 'RegisterForm',
    component: RegisterFormComponent,
    tags: ['autodocs']
}

export default meta;

export const RegisterForm: StoryObj<typeof RegisterFormComponent> = {
    args: {
        onSubmit: () => { }
    }
}