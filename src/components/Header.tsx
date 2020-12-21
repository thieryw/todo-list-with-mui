import AppBar from "@material-ui/core/AppBar";
import {MyButton} from "./designSystem/Button";
import {Text} from "./designSystem/Text";


export type Props = {
    isTaskSelected: boolean;
}


export const Header = (props: Props)=>{

    const {isTaskSelected} = props;

    return(
        <AppBar>
            <Text type="h1">React Todo List</Text>
            <MyButton 
                onClick={()=> console.log("clicked")} 
                disabled={isTaskSelected}
            >
                Edit Task
            </MyButton>
            <MyButton onClick={()=> console.log("clicked")} disabled={isTaskSelected}>Delete Task</MyButton>

        </AppBar>
    )

}