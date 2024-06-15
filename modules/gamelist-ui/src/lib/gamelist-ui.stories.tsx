import type { Meta, StoryObj } from '@storybook/react';

import { GamelistUi } from './gamelist-ui';

const meta: Meta<typeof GamelistUi> = {
  component: GamelistUi,
  title: 'GamelistUi',
};

export default meta;
type Story = StoryObj<typeof GamelistUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
