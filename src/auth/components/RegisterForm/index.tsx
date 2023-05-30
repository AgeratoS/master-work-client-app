import { RegisterData, RegisterFormProps } from "@/auth/types";
import { Box, Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import PasswordField from "@/common/components/PasswordField";

/**
 * Форма регистрации: показывается, если пользователь не имеет доступа к системе
 * @param props Параметры для передачи компоненту, см. описание типа
 * @returns Компонент
 */
function RegisterForm(props: RegisterFormProps) {

    const { onSubmit } = props;

    const initialValues: RegisterData = {
        login: '',
        password: '',
        repeatPassword: '',
    }

    return (
        <Box>
            <Formik<RegisterData>
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>

                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <Field
                                    component={TextField}
                                    name="login"
                                    label="Login"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    component={PasswordField}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sx={{
                                marginBottom: 4,
                            }}>
                                <Field
                                    component={PasswordField}
                                    name="repeatPassword"
                                    label="Repeat password"
                                    type="password"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={submitForm}
                                >
                                    Sign up
                                </Button>
                            </Grid>
                            <Grid item xs={6} display='flex' justifyContent={'flex-end'}>
                                <Button variant="text"
                                    onClick={props.onChangeToAuth}
                                >
                                    I've already an account
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default RegisterForm;