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
                        <Field
                            component={TextField}
                            name="login"
                            label="Login"
                        />

                        <Field
                            component={TextField}
                            name="password"
                            label="Password"
                            type="password"
                        />

                        <Field
                            component={TextField}
                            name="repeatPassword"
                            label="Repeat password"
                            type="password"
                        />

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