import {SbDecorator} from "../../decorators/SbDecorator";
import {Text} from "../../components/designSystem/Text";
import type {Story, Meta} from "@storybook/react/types-6-0";
import type {Props} from "../../components/designSystem/Text";

export default {
    "title": "Text",
    "component": Text,
    "decorators": [story => <SbDecorator>{story()}</SbDecorator>]
} as Meta;


const Template: Story<Props> = args => <Text {...args}>{args.children}</Text>

export const Primary = Template.bind({});

Primary.args={
    "children": "My text",
    "type": "body1"
}