import React from "react";
import Grid from "@material-ui/core/Grid";
import {ThemeProvider} from "../theme/ThemeProvider";
import {useIsDarkModeEnabled} from "../theme/useIsDarkModeEnabled";
import {DarkModeToggle} from "../components/DarkModeToggle";


type Props = {
    children: React.ReactNode;
}


export const SbDecorator = (props: Props)=>{

    const {children} = props;
    const {isDarkModeEnabled} = useIsDarkModeEnabled();

    return(
        <ThemeProvider isDarkModeEnabled={isDarkModeEnabled}>
            <Grid>
                <DarkModeToggle />
                {children}
            </Grid>
        </ThemeProvider>



    )
    
}


