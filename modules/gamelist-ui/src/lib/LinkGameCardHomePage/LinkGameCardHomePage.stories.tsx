import type { Meta, StoryObj } from '@storybook/react';
import LinkGameCardHomePage from '.';

const meta = {
  title: 'LinkGameCardHomePage',
  component: LinkGameCardHomePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LinkGameCardHomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const NotSelected: Story = {
//   // args: {
//   //   text: 'Followers',
//   // },
// };

// export const Default: Story = {
//   // args: {
//   //   text: 'Followings',
//   // },
// };
