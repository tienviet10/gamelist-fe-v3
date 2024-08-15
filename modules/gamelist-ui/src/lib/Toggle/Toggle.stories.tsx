import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: ['Test'],
  },
};
