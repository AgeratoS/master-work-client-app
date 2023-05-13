import { Meta, StoryObj } from "@storybook/react";
import SessionFormComponent from ".";

const meta: Meta<typeof SessionFormComponent> = {
    title: 'SessionForm',
    component: SessionFormComponent
}

export default meta;

export const SessionForm: StoryObj<typeof SessionFormComponent> = {
    args: {
        onSubmit: () => { },
        data: {
            login: '',
            password: ''
        }
    }
}