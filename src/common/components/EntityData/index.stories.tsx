import { Meta, StoryObj } from "@storybook/react";
import EntityDataComponent from ".";
import { Button, Stack, Typography } from "@mui/material";

const meta: Meta<typeof EntityDataComponent> = {
    title: 'EntityData',
    component: EntityDataComponent,
    tags: ['autodocs']
}

export default meta;

export const EntityDataExample1: StoryObj<typeof EntityDataComponent> = {
    args: {
        data: [
            {
                label: "Label",
                content: "Cloud service 1"
            },
            {
                label: "External URL",
                content: "http://localhost:1234/4"
            },
            {
                label: "Internal URL",
                content: "https://some-service.com/abcd"
            },
            {
                label: "Status",
                content: (
                    <Stack direction='row' alignItems='baseline' spacing={7.25}>
                        <Typography color='error' sx={{ fontWeight: 'bold' }}>Error</Typography>
                        <Button variant="text">Check log...</Button>
                    </Stack>
                )
            }
        ]
    }
}

export const EntityDataExample2: StoryObj<typeof EntityDataComponent> = {
    args: {
        data: [
            {
                label: "Name",
                content: "Alexey"
            },
            {
                label: "Surname",
                content: "Matveev"
            },
            {
                label: "Patronymic",
                content: "Alexandrovich"
            },
            {
                label: "Age",
                content: "24",
                span: 4,
            },
            {
                label: "Gender",
                content: "Male"
            },
            {
                label: "University",
                content: 'VSTU'
            },
            {
                label: 'Course',
                content: '2'
            },
            {
                label: 'Speciality',
                content: 'Informatics and Computer Science'
            },
            {
                label: 'Contacts',
                span: 12,
                content: (
                    <EntityDataComponent data={[{
                        label: 'Telephone',
                        content: '+7 950 775 39 18'
                    }, {
                        label: 'Email',
                        content: 'leshka99514@gmail.com'
                    }, {
                        label: 'Telegram',
                        content: '@elsolcansado'
                    }]}
                    />
                )
            }
        ]
    }
}