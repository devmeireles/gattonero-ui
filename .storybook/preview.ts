import type { Preview } from '@storybook/react';
import '../src/shared/global.css';
import { generateTailwindColorClasses } from './utils/colors';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('bg'),
    },
    backgroundColorHover: {
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
    textColorHover: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('text'),
    },
    borderColor: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('border'),
    },
    borderColorHover: {
      control: {
        type: 'select',
      },
      options: generateTailwindColorClasses('border'),
    },
  },
};

export default preview;
