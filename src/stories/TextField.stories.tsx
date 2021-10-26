import { Story, Meta } from "@storybook/react/types-6-0";
import React from "react";

import { TextFieldProps, TextField } from "../components/textfield/TextField";

export default {
  title: "Example/TextField",
  component: TextField,
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
  <TextField {...args}></TextField>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
