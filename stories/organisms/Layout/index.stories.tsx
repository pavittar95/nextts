import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Layout from "./index";
import { StorybookProvider } from "../../storyBookProvider";
import Button from "../../atoms/Button";

export default {
  title: "organisms/Layout",
  component: Layout,
} as Meta;

export const LayoutStory: Story = () => (
  <StorybookProvider>
    <Layout>
      <div className="flex items-center justify-center w-10">
        <Button type="primary">Hello</Button>
      </div>
    </Layout>
  </StorybookProvider>
);
