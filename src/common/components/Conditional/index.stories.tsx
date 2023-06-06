import { Meta, StoryObj } from "@storybook/react";
import ConditionalComponent from ".";
import { Typography } from "@mui/material";

const meta: Meta<typeof ConditionalComponent> = {
    title: 'Conditional Component',
    component: ConditionalComponent,
    tags: ['autodocs']
}

export default meta;

export const GreetingExample: StoryObj<typeof ConditionalComponent> = {
    args: {
        data: true,
        onTrue: () => <Typography>Hi, Alexey!</Typography>,
        onFalse: () => <Typography>Hi, unknown!</Typography>
    }
}