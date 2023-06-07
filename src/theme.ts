import { createTheme } from "@mui/material";
import type { } from '@mui/x-data-grid/themeAugmentation';
import { red } from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Palette {
        statistic: {
            blue: React.CSSProperties['color'],
            orange: React.CSSProperties['color'],
            red: React.CSSProperties['color'],
            purple: React.CSSProperties['color'],
            green: React.CSSProperties['color'],
            yellow: React.CSSProperties['color'],
            gridLine: React.CSSProperties['color'],
            axisColor: React.CSSProperties['color'],
        }
    }

    interface PaletteOptions {
        statistic?: {
            blue?: React.CSSProperties['color'],
            orange?: React.CSSProperties['color'],
            red?: React.CSSProperties['color'],
            purple?: React.CSSProperties['color'],
            green?: React.CSSProperties['color'],
            yellow?: React.CSSProperties['color'],
            gridLine?: React.CSSProperties['color'],
            axisColor?: React.CSSProperties['color'],
        }
    }
}

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
        statistic: {
            blue: '#2196F3',
            orange: '#FF9800',
            red: '#F44336',
            purple: '#9C27B0',
            green: '#4CAF50',
            yellow: '#FFEB3B',
            gridLine: 'rgba(255, 255, 255, .13)',
            axisColor: 'rgba(255, 255, 255, .24)'
        }
    },

    typography: {

    },

    spacing: 4,

    components: {
        MuiSvgIcon: {
            defaultProps: {
                htmlColor: '#F5F5F5',
            },
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
            },
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