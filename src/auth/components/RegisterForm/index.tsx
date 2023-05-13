import { RegisterData, RegisterFormProps, SessionData } from "@/auth/types";
import { Box, Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";

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

                        <Box>
                            <Field
                                component={TextField}
                                name="repeatPassword"
                                label="Repeat password"
                                type="password"
                            />
                        </Box>

                        <Button
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                            onClick={submitForm}
                        >
                            Sign up
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default RegisterForm;