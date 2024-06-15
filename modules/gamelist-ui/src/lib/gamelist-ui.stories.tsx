import type { Meta, StoryObj } from '@storybook/react';
import { GamelistUi } from './gamelist-ui';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to GamelistUi!/gi)).toBeTruthy();
  },
};
