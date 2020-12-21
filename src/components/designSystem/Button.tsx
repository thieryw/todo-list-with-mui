import React from "react";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import type {ButtonClassKey} from "@material-ui/core/Button";
import type {Id} from "evt/tools/typeSafety";


export type Props = {
    children: React.ReactNode;
    disabled: boolean;
    onClick: ()=> void;
};


const useStyle = makeStyles(
    theme=> createStyles<Id<ButtonClassKey, "root">, Required<Props>>({
        "root": ({disabled})=>({
            "backgroundColor": (()=>{
                if(disabled){
                    if(theme.palette.type === "dark"){
                        return theme.palette.grey[800];
                    }

                    return theme.palette.grey[300];
                }

                if(theme.palette.type === "dark"){
                    return theme.palette.primary.dark;
                }

                return theme.palette.primary.light;

            })()
        })
    })
)




export const MyButton = (props: Props)=>{
    const {children, onClick, disabled} = props;
    const classes = useStyle(props);

    return (
        <Button disabled={disabled} classes={classes} onClick={onClick}>{children}</Button>
    )
}