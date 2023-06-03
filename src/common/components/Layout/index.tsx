import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import { ReactElement } from "react";
import AppMenu from "../AppMenu";
import CustomAppBar from "../CustomAppBar";

/**
 * Базовый шаблон для отображения страниц
 * @param param0 Страница
 * @returns Component
 */
function Layout({ children }: { children: ReactElement }) {

    const DRAWER_WIDTH = 320;

    return (
        <Box sx={{ display: 'flex' }}>
            <CustomAppBar leftRender={() => <Typography variant="h2">Side</Typography>} sx={{
                width: `calc(100% - ${DRAWER_WIDTH}px)`
            }} />
            <Box>
                <Drawer
                    variant="permanent"
                    open
                    sx={{
                        width: `${DRAWER_WIDTH}px`,
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: `${DRAWER_WIDTH}px`
                        }
                    }}
                >
                    <AppMenu />
                </Drawer>
            </Box>
            <Box>
                <Box component="main">
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default Layout;