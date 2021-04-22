import { newE2EPage } from '@stencil/core/testing';

describe('call-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<call-dialog></call-dialog>');

    const element = await page.find('call-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
