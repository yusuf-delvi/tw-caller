import { newE2EPage } from '@stencil/core/testing';

describe('tw-caller', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<tw-caller></tw-caller>');

    const element = await page.find('tw-caller');
    expect(element).toHaveClass('hydrated');
  });
});
