import type { Meta, StoryObj } from '@storybook/react';
import CustomSocialTab from '.';

const meta = {
  title: 'CustomSocialTab',
  component: CustomSocialTab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomSocialTab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Followings',
    onPress: () => console.log('hi'),
    activeStyle: 'active',
  },
};
