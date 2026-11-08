import type { Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      options: {
        dark: 'hsl(0, 0%, 7%)',
        light: '#ffffff',
      },
    },
  },
};

export default preview;