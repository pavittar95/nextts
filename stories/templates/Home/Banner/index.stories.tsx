import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import HomeBanner from "./index";
import { StorybookProvider } from "../../../storyBookProvider";

export default {
  title: "organisms/Layout",
  component: HomeBanner,
} as Meta;

export const LayoutStory: Story = () => (
  <StorybookProvider>
    <HomeBanner />
  </StorybookProvider>
);
