import { useDialog } from "@/common/hooks";
import { ServiceDto, ServicesProps } from "@/services/types";
import { Add, Delete } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ServiceFormBase from "../ServiceFormBase";
import CreateServiceContainer from "@/services/containers/CreateServiceContainer";

/**
 * Таблица с отображением всех сервисов
 * @returns Component
 */
function Services(props: ServicesProps) {

    const [removeDialog, [openRemoveDialog, closeRemoveDialog]] = useDialog(false);
    const [addDialog, [openAddDialog, closeAddDialog]] = useDialog(false);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'API Name', width: 200 },
        { field: 'externalUrl', headerName: 'External URL', flex: 1 }
    ]

    const onRemove = () => {
        closeRemoveDialog();
        props.onRemove?.();
    }

    const onAdd = () => {
        closeAddDialog();
        props.onAdd?.();
    }

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
                        onClick={openAddDialog}
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
                        onClick={openRemoveDialog}
                        disabled={props.removeDisabled}
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
                onRowSelectionModelChange={props.onChangeSelect}
                disableRowSelectionOnClick
                rows={props.services}
            />

            {/* Dialog for removing */}
            <Dialog
                open={removeDialog}
                onClose={closeRemoveDialog}
            >
                <DialogTitle>
                    Are you sure to remove these services?
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        This action can't be undone
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button onClick={onRemove}>OK</Button>
                    <Button onClick={closeRemoveDialog} variant="text">Cancel</Button>
                </DialogActions>
            </Dialog>

            {/* Dialog for add service */}
            <Dialog
                open={addDialog}
                onClose={closeAddDialog}
            >
                <DialogTitle>
                    Adding service
                </DialogTitle>

                <DialogContent>
                    <CreateServiceContainer
                        onAdd={onAdd}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}

export default Services;