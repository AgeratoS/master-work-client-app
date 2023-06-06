import { CustomAppBarProps } from "@/common/types";
import { Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Box, IconButton, Stack, Toolbar, Typography } from "@mui/material";
/**
 * Представляет шапку всего приложения
 * @param props Properties
 * @returns Component
 */
function CustomAppBar(props: CustomAppBarProps) {

    return (
        <AppBar {...props}>
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