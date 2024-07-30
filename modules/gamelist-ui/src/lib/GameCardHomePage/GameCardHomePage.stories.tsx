import type { Meta, StoryObj } from '@storybook/react';
import { GameCardHomePage } from '.';

const meta = {
  title: 'GameCardHomePage',
  component: GameCardHomePage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof GameCardHomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotSelected: Story = {
  args: {
    colorBgContainer: '#ffffff',
    id: '1',
    imgSrc: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1niz.jpg',
    title: 'Game Title',
    titleColor: '#6f7674',
  },
};

export const Default: Story = {
  args: {
    colorBgContainer: '#ffffff',
    id: '2',
    imgSrc: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1niz.jpg',
    title: 'Game Title',
    titleColor: '#1b242b',
  },
};
