import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotSelected: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: ['Test'],
  },
};

export const Default: Story = {
  args: {
    variant: 'default',
    children: ['Test'],
  },
};
