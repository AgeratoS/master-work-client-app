import { AppBarProps } from "@mui/material";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react"

// Utility types

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export type Token = string;

export type UseDialogReturnType = [boolean, [VoidFunction, VoidFunction]];

// Component props types

export type CustomAppBarProps = AppBarProps & {
    leftRender?: () => ReactNode;
}


export type CustomHeadProps = {
    title?: string;
}

export type ConditionalProps = {
    data: boolean;
    onTrue: () => ReactElement;
    onFalse?: () => ReactElement;
}

export type EntityDataItemProps = {
    label: string;
    content: string | ReactElement;
    span?: number;
}

export type EntityDataProps = {
    data: EntityDataItemProps[];
}