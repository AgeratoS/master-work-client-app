import { Meta, StoryObj } from "@storybook/react";
import AuthFormComponent from ".";

const meta: Meta<typeof AuthFormComponent> = {
    title: 'AuthForm',
    component: AuthFormComponent,
    tags: ['autodocs']
}

export default meta;

export const AuthForm: StoryObj<typeof AuthFormComponent> = {
    args: {
        onSubmit: () => { },
        data: {
            login: '',
            password: ''
        }
    }
}