import Conditional from "@/common/components/Conditional";
import { ServiceDto, ServiceFormBaseProps } from "@/services/types";
import { Box, Button, CircularProgress, Grid, MenuItem, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-mui";
/**
 * Базовый компонент, отвечающий за отображение формы добавления/редактирования сервиса
 * @param props Props
 * @returns Component
 */
function ServiceFormBase<T extends ServiceDto>(props: ServiceFormBaseProps<T>) {

    return (
        <Conditional
            data={!props.loading}
            onTrue={() => (
                <Formik<T>
                    onSubmit={props.onSubmit}
                    initialValues={props.initialData}
                >
                    {({ submitForm, isSubmitting }) => (
                        <Form>
                            <Grid container spacing={4}>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="name"
                                        label="Label"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="externalUrl"
                                        label="External URL"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="appId"
                                        label="Application ID"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={TextField}
                                        name="apiKey"
                                        label="API key"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        component={Select}
                                        name="serviceSolutionId"
                                        label="Service solution"
                                        fullWidth
                                    >
                                        {props.serviceSolutions.map((item) => (
                                            <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                        ))}
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack
                                        direction={'row'}
                                        spacing={2}
                                    >
                                        <Button
                                            variant="text"
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="submit"
                                        >
                                            Save
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            )}
            onFalse={() => (
                <CircularProgress />
            )}
        />
    );
}

export default ServiceFormBase;