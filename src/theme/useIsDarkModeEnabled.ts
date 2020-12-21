import { useState } from "react";
import { Evt } from "evt";
import { useEvt } from "evt/hooks";
import memoize from "memoizee";


const getEvtIsDarkModeEnabled = memoize(() => {

    const key = "isDarkModeEnabled_dXddOm";

    const evtIsDarkModeEnabled = Evt.create(
        (() => {

            const value = localStorage.getItem(key);

            return value === null ? null : value === "true";

        })() ??
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    evtIsDarkModeEnabled.attach(
        isDarkModeEnabled => localStorage.setItem(key, isDarkModeEnabled ? "true" : "false")
    );

    return { evtIsDarkModeEnabled };

});


export function useIsDarkModeEnabled(): {
    isDarkModeEnabled: boolean;
    setIsDarkModeEnabled(params: { isDarkModeEnabled: boolean; }): void;
} {

    const { evtIsDarkModeEnabled } = getEvtIsDarkModeEnabled();

    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(evtIsDarkModeEnabled.state);


    useEvt(ctx =>
        evtIsDarkModeEnabled
            .toStateless(ctx)
            .attach(setIsDarkModeEnabled),
        []
    );

    return {
        isDarkModeEnabled,
        "setIsDarkModeEnabled": ({ isDarkModeEnabled }) =>
            evtIsDarkModeEnabled.state = isDarkModeEnabled
    };



}

