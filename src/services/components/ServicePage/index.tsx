import EntityData from "@/common/components/EntityData";
import { useDialog } from "@/common/hooks";
import { ServicePageProps } from "@/services/types";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from "@mui/material";

/**
 * Представляет компонент-страницу для вывода конкретного сервиса
 * @param props Properties
 * @returns Component
 */
function ServicePage(props: ServicePageProps) {

    const { service } = props;

    const [editModal, [openEditModal, closeEditModal]] = useDialog(false);

    const onEdit = () => {
        closeEditModal();
        props.onEdit?.(undefined);
    }

    return (
        <Box>
            <Box>
                <Stack direction="row" spacing={2.25}>
                    <Typography variant="h4">Common settings</Typography>
                    <Button variant="text" onClick={openEditModal}>Edit</Button>
                </Stack>
            </Box>

            <Box>
                <Typography variant="h4">Stats</Typography>
                <EntityData
                    data={[
                        {
                            label: "Label",
                            content: service.name
                        },
                        {
                            label: "External URL",
                            content: service.url
                        },
                        {
                            label: "Internal URL",
                            content: service.url
                        },
                        {
                            label: "Status",
                            content: "Unknown"
                        }
                    ]}
                />
            </Box>

            {/* Edit service dialog */}
            <Dialog
                open={editModal}
                onClose={closeEditModal}
            >
                <DialogTitle>
                    Edit service
                </DialogTitle>

                <DialogContent>
                    Here will be service edit form
                </DialogContent>

                <DialogActions>
                    <Button onClick={onEdit}>OK</Button>
                    <Button onClick={closeEditModal} variant="text">Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default ServicePage;