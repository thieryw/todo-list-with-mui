import type {Story, Meta} from "@storybook/react/types-6-0";
import type {Props} from "../../components/designSystem/Button";
import {MyButton} from "../../components/designSystem/Button";
import {SbDecorator} from "../../decorators/SbDecorator";

export default {
    "title": "Button",
    "component": MyButton,
    "decorators": [story => <SbDecorator>{story()}</SbDecorator>]
} as Meta

const Template: Story<Props> = args => <MyButton {...args}>{args.children}</MyButton>

export const Primary = Template.bind({});

Primary.args = {
    "children": "My Button",
    "onClick": ()=> console.log("clicked"),
    "disabled": false,
}