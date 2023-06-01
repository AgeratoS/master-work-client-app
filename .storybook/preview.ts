import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

const withMuiTheme = (Story) => {
  return React.createElement(ThemeProvider, {
    theme,
    children: [
      React.createElement(CssBaseline),
      React.createElement(Story)
    ]
  })
}

export const decorators = [withMuiTheme]

export default preview;
