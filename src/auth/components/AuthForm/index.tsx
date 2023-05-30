import type { AuthFormProps, SessionData } from "@/auth/types";
import { Button, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import PasswordField from "@/common/components/PasswordField";
/**
 * Компонент формы, отвечающий за аутентификацию разработчика в системе
 * @param props Параметры для компонента, см. описание типа
 * @returns Компонент
 */
function AuthForm(props: AuthFormProps) {

    const { data, onSubmit } = props;

    const initialData: SessionData = {
        login: '',
        password: '',
    }

    return (
        <Formik<SessionData>
            initialValues={data ?? initialData}
            onSubmit={onSubmit}
            enableReinitialize
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

                        <Grid item xs={12} sx={{
                            marginBottom: 4,
                        }}>
                            <Field
                                component={PasswordField}
                                name="password"
                                label="Password"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                color="primary"
                                disabled={isSubmitting}
                                onClick={submitForm}
                            >
                                Log in
                            </Button>
                        </Grid>

                        <Grid item xs={6} display='flex' justifyContent={'flex-end'}>
                            <Button
                                variant="text"
                                onClick={props.onChangeToRegister}
                            >
                                I haven't an account
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
}

export default AuthForm;