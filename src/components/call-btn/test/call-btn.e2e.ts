import { newE2EPage } from '@stencil/core/testing';

describe('call-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<call-btn></call-btn>');

    const element = await page.find('call-btn');
    expect(element).toHaveClass('hydrated');
  });
});
