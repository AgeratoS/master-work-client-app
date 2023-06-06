import { Meta, StoryObj } from "@storybook/react";
import CustomPaperComponent from ".";
import SessionForm from "@/auth/components/SessionForm";
import { SessionData, FormMode } from "@/auth/types";

const meta: Meta<typeof CustomPaperComponent> = {
    title: 'CustomPaper',
    component: CustomPaperComponent,
    tags: ['autodocs']
}

export default meta;

export const CustomPaperTextContent: StoryObj<typeof CustomPaperComponent> = {
    args: {
        children: <p>Какой-то текстовый контент</p>
    }
}

export const CustomPaperFormContent: StoryObj<typeof CustomPaperComponent> = {
    args: {
        children: <SessionForm onSubmit={function (data: SessionData, formMode: FormMode): void {
            throw new Error("Function not implemented.");
        }} />
    }
}