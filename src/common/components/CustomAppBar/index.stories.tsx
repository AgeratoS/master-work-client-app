import { Meta, StoryObj } from "@storybook/react";
import AppBarComponent from ".";
import { Typography } from "@mui/material";

const meta: Meta<typeof AppBarComponent> = {
    title: 'CustomAppBar',
    component: AppBarComponent
}

export default meta;

export const CustomAppBar: StoryObj<typeof AppBarComponent> = {
    args: {}
}

export const CustomAppBarWithTitle: StoryObj<typeof AppBarComponent> = {
    args: {
        leftRender: () => <Typography variant='h2'>Title</Typography>
    }
}