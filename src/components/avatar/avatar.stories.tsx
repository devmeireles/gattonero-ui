import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Avatar from '.';
import { generateTailwindColorClasses } from '../../../.storybook/utils/colors';

const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  args: {
    onClick: fn(),
  },
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('bg'),
    },
    textColor: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('text'),
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://thispersondoesnotexist.com/',
    alt: 'John Doe',
  },
};
