import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "./Modal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: "Text",
  isOpen: false,
  onClose: () => {},
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Text",
  isOpen: false,
  onClose: () => {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
