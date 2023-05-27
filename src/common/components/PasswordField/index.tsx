import { useToggle } from "@/common/hooks";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { FieldAttributes } from "formik";
import { TextField } from "formik-mui";

function PasswordField(props: FieldAttributes<any>) {

    const [showPassword, togglePasswordVisible] = useToggle(false);

    return (
        <TextField
            {...props}
            type={showPassword ? 'text' : 'password'}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                    <IconButton
                        onClick={togglePasswordVisible}
                    >
                        {!showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            }}
        />
    );
}

export default PasswordField;