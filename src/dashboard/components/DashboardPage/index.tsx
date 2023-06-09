import { DashboardPageProps } from "@/dashboard/types";
import { Box, Typography } from "@mui/material";

/**
 * Компонент, представляющий главную страницу системы
 * @param props Properties
 * @returns Component
 */
function DashboardPage(props: DashboardPageProps) {


    return (
        <Box>
            <Box>
                <Typography variant="h3">Common statistic</Typography>
            </Box>

            <Box>
                
            </Box>
        </Box>
    );
}

export default DashboardPage;