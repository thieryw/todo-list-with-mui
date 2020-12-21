


import React, { useCallback } from "react";
import Switch from "@material-ui/core/Switch";
import { useIsDarkModeEnabled } from "theme/useIsDarkModeEnabled";

export function DarkModeToggle() {

    const {isDarkModeEnabled, setIsDarkModeEnabled} = useIsDarkModeEnabled();

    return (
        <Switch
            checked={isDarkModeEnabled}
            onChange={useCallback(
                () => setIsDarkModeEnabled({ "isDarkModeEnabled": !isDarkModeEnabled }),
                [isDarkModeEnabled, setIsDarkModeEnabled]
            )}
        />
    );
}
