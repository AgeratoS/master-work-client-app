import { AppBarProps } from "@/common/types";
import { Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";

function CustomAppBar(props: AppBarProps) {

    return (
        <AppBar>
            <Toolbar>
                {props.leftRender && <Box sx={{ flexGrow: 1 }}>
                    {props.leftRender!()}
                </Box>}
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={5}
                >
                    <IconButton>
                        <Notifications />
                    </IconButton>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={5}
                    >
                        <Avatar alt="John Doe" />
                        <Typography>John Doe</Typography>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;