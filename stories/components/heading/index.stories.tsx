import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Heading from "./index";
import { StorybookProvider } from "../../storyBookProvider";

export default {
  title: "Heading",
  component: Heading,
} as Meta;

export const H1: Story = () => (
  <StorybookProvider>
    <Heading type="h1">Heading 1.</Heading>
  </StorybookProvider>
);

export const H2: Story = () => (
  <StorybookProvider>
    <Heading type="h2">Heading 2.</Heading>
  </StorybookProvider>
);

export const H3: Story = () => (
  <StorybookProvider>
    <Heading type="h3">Heading 3.</Heading>
  </StorybookProvider>
);

export const H4: Story = () => (
  <StorybookProvider>
    <Heading type="h4">Heading 4.</Heading>
  </StorybookProvider>
);

export const H5: Story = () => (
  <StorybookProvider>
    <Heading type="h5">Heading 5.</Heading>
  </StorybookProvider>
);

export const H6: Story = () => (
  <StorybookProvider>
    <Heading type="h6">Heading 6.</Heading>
  </StorybookProvider>
);
