import type { AuthFormProps, SessionData } from "@/auth/types";
import { Box, Button, Grid, IconButton, InputAdornment } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from "react";
import { useToggle } from "@/common/hooks";
import PasswordField from "@/common/components/PasswordField";

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