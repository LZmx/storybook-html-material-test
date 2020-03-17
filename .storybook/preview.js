import { configure, addParameters, addDecorator } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { initDsm } from '@invisionapp/dsm-storybook';
import { withHTML } from '@whitespace/storybook-addon-html/html';

import '../src/assets/scss/app.scss'

addDecorator(withHTML);

addParameters({
  backgrounds: [
    { name: 'bg 1', value: '#F4F7F6' }
  ],
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

