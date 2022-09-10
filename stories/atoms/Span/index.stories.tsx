import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Span from "./index";
import { StorybookProvider } from "../../storyBookProvider";

export default {
  title: "atoms/Span",
  component: Span,
} as Meta;

export const SpanStory: Story = () => (
  <StorybookProvider>
    <Span size="small">Span</Span>
  </StorybookProvider>
);