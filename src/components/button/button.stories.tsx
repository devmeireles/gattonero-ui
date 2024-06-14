import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import React from 'react';
import { FaPlus, FaSave } from 'react-icons/fa';
import { Button } from '.';
import { generateTailwindColorClasses } from '../../../.storybook/utils/colors';

const meta = {
  title: 'Example/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    backgroundColor: 'bg-black',
    backgroundColorHover: 'bg-gray-600',
    textColor: 'text-white',
    textColorHover: 'text-gray-50',
  },
};

export const Bordered: Story = {
  args: {
    children: 'Bordered Button',
    bordered: true,
    backgroundColor: 'bg-black',
    backgroundColorHover: 'bg-white',
    textColor: 'text-white',
    textColorHover: 'text-black',
    borderColorHover: 'border-black',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Outlined Button',
    outlined: true,
    textColor: 'text-black',
    borderColor: 'border-black',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    loading: true,
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const WithAppendIcon: Story = {
  args: {
    children: 'Button',
    appendIcon: <FaPlus />,
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const WithPrependIcon: Story = {
  args: {
    children: 'Button',
    prependIcon: <FaSave />,
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Button',
    prependIcon: <FaSave />,
    appendIcon: <FaPlus />,
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium Button',
    size: 'md',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
  },
};
