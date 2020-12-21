import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles} from "@material-ui/core/styles";
import type {Id} from "evt/tools/typeSafety";
import type {TypographyClassKey} from "@material-ui/core/Typography";

export type Props = {
    children: React.ReactNode;
    type: Id<TypographyClassKey, "h1" | "h2" | "body1">;

}

const useStyle = makeStyles(
    ()=> createStyles<Id<TypographyClassKey, "root">, Props>({
        "root" : ({type})=>({
            "textAlign": (type === "h1" || type === "h2") ? "center" : "unset"
        })

    })
)

export const Text = (props: Props)=>{
    const {children, type} = props;
    const classes = useStyle(props);

    return(
        <Typography classes={classes} variant={type}>{children}</Typography>
    )

}