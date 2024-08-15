import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Test'],
  },
};
