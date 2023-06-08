import EntityData from "@/common/components/EntityData";
import { useDialog } from "@/common/hooks";
import { RequestsCountStat, RequestsPerHourStat, ServicePageProps } from "@/services/types";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Stack, Typography } from "@mui/material";
import ServiceStat from "../ServiceStat";
import Conditional from "@/common/components/Conditional";

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
        // props.onEdit?.(undefined);
    }

    return (
        <Stack spacing={11}>
            <Stack spacing={6}>
                <Stack direction="row" spacing={2.25} alignItems='center'>
                    <Typography variant="h4">Common settings</Typography>
                    <Button variant="text" onClick={openEditModal}>Edit</Button>
                </Stack>

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
            </Stack>

            <Box>
                <Typography variant="h4" mb={4}>Stats</Typography>
                <Grid container spacing={3}>
                    <Conditional
                        data={props.statistics?.requestsCount !== undefined}
                        onTrue={() => (
                            <Grid item xs={12} md={6}>
                                <ServiceStat<RequestsCountStat> data={props.statistics!.requestsCount!} xAxisKey={'time'} name="Requests count" lines={[
                                    {
                                        name: 'Requests',
                                        type: 'linear',
                                        dataKey: 'requests'
                                    }
                                ]} />
                            </Grid>
                        )}
                        onFalse={() => (
                            <Grid item xs={12} md={6}>
                                <ServiceStat<RequestsCountStat> data={[]} xAxisKey={'time'} name="Requests count" lines={[
                                    {
                                        name: 'Requests',
                                        type: 'linear',
                                        dataKey: 'requests'
                                    }
                                ]} />
                            </Grid>
                        )}
                    />
                    <Conditional
                        data={props.statistics?.requestsPerHour !== undefined}
                        onTrue={() => (
                            <Grid item xs={12} md={6}>
                                <ServiceStat<RequestsPerHourStat> data={props.statistics!.requestsPerHour!} xAxisKey={'time'} name="Requests per hour" lines={[
                                    {
                                        name: 'Requests per hour',
                                        type: 'linear',
                                        dataKey: 'requests'
                                    }
                                ]} />
                            </Grid>
                        )}
                        onFalse={() => (
                            <Grid item xs={12} md={6}>
                                <ServiceStat<RequestsPerHourStat> data={[]} xAxisKey={'time'} name="Requests per hour" lines={[
                                    {
                                        name: 'Requests per hour',
                                        type: 'linear',
                                        dataKey: 'requests'
                                    }
                                ]} />
                            </Grid>
                        )}
                    />
                </Grid>
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
        </Stack>
    );
}

export default ServicePage;