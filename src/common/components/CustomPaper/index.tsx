import { Paper, PaperProps } from "@mui/material";

function CustomPaper(props: PaperProps) {

    return (
        <Paper {...props} elevation={8} sx={{
            padding: 4
        }}>
            {props.children}
        </Paper>
    );
}

export default CustomPaper;