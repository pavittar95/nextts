import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Button from "./index";
import { StorybookProvider } from "../../storyBookProvider";

export default {
  title: "atoms/Button",
  component: Button,
} as Meta;

export const Primary: Story = () => (
  <StorybookProvider>
    <Button type="primary">Primary</Button>
  </StorybookProvider>
);

export const Secondary: Story = () => (
  <StorybookProvider>
    <Button type="secondary">Secondary</Button>
  </StorybookProvider>
);


export const Round: Story = () => (
  <StorybookProvider>
    <Button type="primary" round>Round</Button>
  </StorybookProvider>
);

export const Disabled: Story = () => (
  <StorybookProvider>
    <Button type="primary" disabled>Disabled</Button>
  </StorybookProvider>
);

