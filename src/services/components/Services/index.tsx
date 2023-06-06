import { useDialog } from "@/common/hooks";
import { ServicesProps } from "@/services/types";
import { Add, Delete } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

/**
 * Таблица с отображением всех сервисов
 * @returns Component
 */
function Services(props: ServicesProps) {

    const [removeDialog, [openRemoveDialog, closeRemoveDialog]] = useDialog(false);

    const columns: GridColDef[] = [
        { field: 'name', headerName: 'API Name', width: 200 },
        { field: 'url', headerName: 'External URL', flex: 1 }
    ]

    const onRemove = () => {
        closeRemoveDialog();
        props.onRemove?.();
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
        </>
    );
}

export default Services;