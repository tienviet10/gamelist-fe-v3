import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
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
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    expect(canvas.getByText(/Welcome to GamelistUi!/gi)).toBeTruthy();
  },
};
