import { ServiceDto, ServiceFormBaseProps } from "@/services/types";
import { Box, Button, Grid, Stack } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
/**
 * Базовый компонент, отвечающий за отображение формы добавления/редактирования сервиса
 * @param props Props
 * @returns Component
 */
function ServiceFormBase<T extends ServiceDto>(props: ServiceFormBaseProps<T>) {

    return (
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
                                name="url"
                                label="Internal link"
                                fullWidth
                            />
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
    );
}

export default ServiceFormBase;