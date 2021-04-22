import { newSpecPage } from '@stencil/core/testing';
import { TwCaller } from '../tw-caller';

describe('tw-caller', () => {
  it('default render', async () => {
    const page = await newSpecPage({
      components: [TwCaller],
      html: `<tw-caller></tw-caller>`,
    });
    expect(page.root).toMatchInlineSnapshot(`
      <tw-caller>
        <mock:shadow-root>
          <div class="container">
            <call-dialog callduration="0"></call-dialog>
            <div data-id="open-btn">
              <slot name="open-btn">
                <button class="btn btn--open">
                  Call Us Now!
                </button>
              </slot>
            </div>
          </div>
        </mock:shadow-root>
      </tw-caller>
    `);
  });
});
