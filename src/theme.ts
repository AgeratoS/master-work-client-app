import { createTheme } from "@mui/material";
import type { } from '@mui/x-data-grid/themeAugmentation';
import { red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: '#66BB6A',
            contrastText: '#F5F5F5',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#222831",
            paper: "#222831",
        },
        text: {
            primary: '#F5F5F5',
            secondary: '#F5F5F5',
        },
        common: {
            black: '#222831',
            white: '#F5F5F5',
        },
    },

    typography: {

    },

    spacing: 4,

    components: {
        MuiSvgIcon: {
            defaultProps: {
                htmlColor: '#F5F5F5',
            }
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled',
            },
            styleOverrides: {
                root: {
                    "& .MuiFilledInput-root, & .MuiFilledInput-root:hover, & .MuiFilledInput-root:active, & .MuiFilledInput-root:focus": {
                        background: 'transparent',
                    },
                    "& .MuiFilledInput-root::before": {
                        borderBottomColor: '#F5F5F5',
                    }
                }
            }
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            }
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: 'transparent'
                }
            }
        },
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    border: 'none',
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: 'none'
                    }
                }
            }
        }
    },
});

export default theme;