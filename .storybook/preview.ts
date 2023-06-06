import type { Preview } from "@storybook/react";
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import React from "react";

import { themes } from '@storybook/theming';

const withMuiTheme = (Story) => {
  return React.createElement(ThemeProvider, {
    theme,
    children: [
      React.createElement(CssBaseline),
      React.createElement(Story)
    ]
  })
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export const decorators = [withMuiTheme];

export default preview;
