import CustomPaper from "@/common/components/CustomPaper";
import { StatProps } from "@/common/types";
import { Stack, Typography, useTheme } from "@mui/material";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
/**
 * Компонент, представляющий график некоторого значения в
 * виде ломаных линий
 * @param props Properties
 * @returns Component
 */
function StatLine<T>(props: StatProps<T>) {

    const theme = useTheme();

    return (
        <CustomPaper>
            <Stack spacing={9}>
                <Typography fontSize={18}>{props.name}</Typography>
                <ResponsiveContainer width="100%" height={210}>
                    <LineChart data={props.data}>
                        <XAxis dataKey={props.xAxisKey} stroke={theme.palette.statistic.axisColor} padding={{ left: 20, right: 60 }} tick={{ fill: theme.palette.common.white }} />
                        <YAxis orientation="right" stroke={theme.palette.statistic.axisColor} axisLine={false} tickLine={false} tick={{ fill: theme.palette.common.white }} />
                        <CartesianGrid vertical={false} stroke={theme.palette.statistic.gridLine} />
                        {props.lines.map((line) => (
                            <Line stroke={theme.palette.statistic.orange} strokeWidth={2} {...line} />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </Stack>
        </CustomPaper>
    );
}

export default StatLine;