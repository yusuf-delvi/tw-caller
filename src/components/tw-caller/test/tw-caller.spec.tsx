import { newSpecPage } from '@stencil/core/testing';
import { TwCaller } from '../tw-caller';

describe('tw-caller', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TwCaller],
      html: `<tw-caller></tw-caller>`,
    });
    expect(page.root).toEqualHtml(`
      <tw-caller>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </tw-caller>
    `);
  });
});
