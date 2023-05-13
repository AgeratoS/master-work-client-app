import type { AuthFormProps, SessionData } from "@/auth/types";
import { Box, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";

function AuthForm(props: AuthFormProps) {

    const { data, onSubmit } = props;

    const initialData: SessionData = {
        login: '',
        password: '',
    }

    return (
        <Box>
            <Formik<SessionData>
                initialValues={data ?? initialData}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {({ submitForm, isSubmitting }) => (
                    <Form>
                        <Box>
                            <Field
                                component={TextField}
                                name="login"
                                label="Login"
                            />
                        </Box>

                        <Box>
                            <Field
                                component={TextField}
                                name="password"
                                label="Password"
                                type="password"
                            />
                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Log in
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default AuthForm;