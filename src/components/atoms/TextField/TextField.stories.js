import { withKnobs } from '@storybook/addon-knobs'

const styles = {
  padding: '20px',
}

export default {
  title: 'Atoms|TextField',
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: 'List of Text Field section',
    // docs: {
    //   page: mdx,
    // },
  },
}

export const simple = () =>
`<label class="mdc-text-field">
<div class="mdc-text-field__ripple"></div>
<input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id">
<span class="mdc-floating-label" id="my-label-id">Hint text</span>
<div class="mdc-line-ripple"></div>
</label>`;
