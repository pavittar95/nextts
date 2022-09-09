import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Card from "./index";
import { StorybookProvider } from "../../storyBookProvider";

export default {
  title: "organisms/Card",
  component: Card,
} as Meta;

export const CardStory: Story = () => (
  <StorybookProvider>
    <Card />
  </StorybookProvider>
);
