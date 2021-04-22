import { newSpecPage } from '@stencil/core/testing';
import { CallBtn } from '../call-btn';

describe('call-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CallBtn],
      html: `<call-btn></call-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <call-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </call-btn>
    `);
  });
});
