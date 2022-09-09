import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Header from "./index";
import { StorybookProvider } from "../../storyBookProvider";

export default {
  title: "organisms/Header",
  component: Header,
} as Meta;

export const HeaderStory: Story = () => (
  <StorybookProvider>
    <Header />
  </StorybookProvider>
);
