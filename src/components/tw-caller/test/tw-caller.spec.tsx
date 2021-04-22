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
            <div class="modal">
              <div class="modal__content" data-id="content">
                <div class="logo">
                  <img src="https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png">
                  <span class="status-online"></span>
                </div>
                <div class="timer">
                  <div class="time">
                    00
                    <span class="blink">
                      :
                    </span>
                    00
                  </div>
                  <div class="text">
                    Call Duration
                  </div>
                </div>
                <div class="call-options">
                  <div class="call-end">
                    <svg fill="none" height="50" viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
                      <path clip-rule="evenodd" d="M25 0C38.8069 0 50 11.1927 50 25C50 38.8073 38.8069 50 25 50C11.1931 50 0 38.8073 0 25C0 11.1931 11.1931 0 25 0Z" fill="#F53333" fill-rule="evenodd"></path>
                      <path clip-rule="evenodd" d="M36.6102 28.0741C34.2954 27.9508 32.039 27.5433 32.039 27.5433C32.039 27.5433 30.2313 27.2587 30.2268 25.9083C30.2241 25.0178 29.7662 23.348 28.9995 23.2078C28.2327 23.0676 20.6517 23.2078 20.6517 23.2078C20.6517 23.2078 19.8238 23.2633 19.6696 23.6989C19.5154 24.1344 18.9335 26.3996 18.9335 26.3996C18.9335 26.3996 18.5439 27.1865 17.4601 27.3815C16.3661 27.5784 13.0586 28.2484 13.0586 28.2484C13.0586 28.2484 11.7797 28.1018 11.5474 27.0756C11.3154 26.0495 11.3115 23.5648 11.3115 23.5648C11.3115 23.5648 11.4711 22.7379 12.8524 21.8859C14.2332 21.0345 17.466 19.0469 24.6186 19.045C31.2332 19.0438 37.1381 22.0391 37.1381 22.0391C37.1381 22.0391 38.0188 22.7087 38.2375 23.8703C38.456 25.0321 38.8273 28.1924 36.6102 28.0741Z" fill="white" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="overlay" data-id="overlay"></div>
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
