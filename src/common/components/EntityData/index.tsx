import { ReactElement } from "react";
import { isString } from "formik";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { EntityDataProps } from "@/common/types";
import Conditional from "../Conditional";

/**
 * Компонент, представляющий данные некоторой сущности в гриде
 * в основном в формате "ключ-значение". Значение может быть
 * как строкой, так и в общем случае другим компонентом. 
 * @param props Properties
 * @returns Component
 */
function EntityData(props: EntityDataProps) {

    return (
        <Box>
            <Grid container rowGap={6}>
                {props.data.map((item) => (
                    <Grid
                        item
                        xs={12}
                        sm={item.span ? Math.min(6 + item.span, 12) : 6}
                        lg={item.span ? Math.min(4 + item.span, 12) : 4}>
                        <Stack spacing={2}>
                            <Typography>{item.label}</Typography>
                            <Conditional
                                data={isString(item.content)}
                                onTrue={() => <Typography sx={{ fontWeight: 'bold' }}>{item.content}</Typography>}
                                onFalse={() => item.content as ReactElement}
                            />
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default EntityData;