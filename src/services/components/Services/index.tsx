import { ServicesProps } from "@/services/types";
import { Add, Delete } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

/**
 * Таблица с отображением всех сервисов
 * @returns Component
 */
function Services(props: ServicesProps) {

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'API Name', width: 200 },
        { field: 'url', headerName: 'External URL', flex: 1 }
    ]

    return (
        <>
            <Stack
                direction='row'
            >
                <Stack
                    direction='row'
                    spacing={2}
                >
                    <Button
                        variant="text"
                        onClick={props.onAdd}
                        startIcon={
                            <Add
                                color='primary'
                            />
                        }
                    >
                        Add service
                    </Button>

                    <Button
                        variant="text"
                        startIcon={
                            <Delete
                                color='primary'
                            />
                        }
                    >
                        Remove service
                    </Button>
                </Stack>
            </Stack>
            <DataGrid
                columns={columns}
                checkboxSelection
                disableRowSelectionOnClick
                rows={props.services}
            />
        </>
    );
}

export default Services;