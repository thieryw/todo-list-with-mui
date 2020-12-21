

//NOTE: This is not scoped
//https://material-ui.com/components/typography/#install-with-npm
import "fontsource-roboto/300.css";
import "fontsource-roboto/400.css";
import "fontsource-roboto/500.css";
import "fontsource-roboto/700.css";

import React, { useMemo } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
//import type { Theme } from "@material-ui/core/styles/createMuiTheme";

function createTheme(
    params: {
        isDarkModeEnabled: boolean;
    }
) {

    const { isDarkModeEnabled } = params;

    console.log(isDarkModeEnabled);

    const theme = createMuiTheme({ // https://material-ui.com/customization/palette/#using-a-color-object
        "palette": {
            "type": isDarkModeEnabled ? "dark" : "light",
            "primary": {
                "light": "#2f60b5",
                "main": "#4962b8",
                "contrastText": "#F5F5F5",
                "dark": "#a31515"
            },
            "secondary": {
                "light": "#525966",
                "main": "#2C323F",
                "contrastText": "#F5F5F5"
            }
            
        },
      
    });

    return { theme };

};


export function ThemeProvider(
    props: {
        isDarkModeEnabled: boolean;
        children: React.ReactNode;
    }
) {

    const {
        isDarkModeEnabled,
        children
    } = props;

    const { theme } = useMemo(
        () => createTheme({ isDarkModeEnabled }),
        [isDarkModeEnabled]
    );

    return (
        <MuiThemeProvider theme={theme}>
            <ScopedCssBaseline>
                {children}
            </ScopedCssBaseline>
        </MuiThemeProvider>
    );


}

