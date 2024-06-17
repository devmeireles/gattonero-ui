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
};

export default preview;
