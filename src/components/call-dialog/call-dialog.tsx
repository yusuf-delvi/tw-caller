import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

function formatTime(time) {
  return time <= 9 ? `0${time}` : time;
}


@Component({
  tag: 'call-dialog',
  styleUrl: 'call-dialog.css',
  shadow: true,
})
export class CallDialog {

  @Prop()
  isOpen: boolean = false;
  @Prop()
  logoSrc: string;
  @Prop()
  callDuration: number;

  @Event()
  close: EventEmitter;

  handleClose = () => {
    this.close.emit();
  }

  render() {
     const time = new Date(this.callDuration);
    const minutes = formatTime(time.getUTCMinutes());
    const seconds = formatTime(time.getUTCSeconds());
    return (
      <Host>
       <div class={`modal ${this.isOpen ? 'modal--show' : ''}`}>
            <div data-id="content" class="modal__content">
              <div class="logo">
                <img src={this.logoSrc} />
                <span class="status-online"></span>
              </div>
              <div class="timer">
                <div class="time">
                  {minutes} <span class="blink">:</span> {seconds}
                </div>
                <div class="text">Call Duration</div>
              </div>
              <div class="call-options">
                <div class="call-end" onClick={this.handleClose}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25 0C38.8069 0 50 11.1927 50 25C50 38.8073 38.8069 50 25 50C11.1931 50 0 38.8073 0 25C0 11.1931 11.1931 0 25 0Z"
                      fill="#F53333"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M36.6102 28.0741C34.2954 27.9508 32.039 27.5433 32.039 27.5433C32.039 27.5433 30.2313 27.2587 30.2268 25.9083C30.2241 25.0178 29.7662 23.348 28.9995 23.2078C28.2327 23.0676 20.6517 23.2078 20.6517 23.2078C20.6517 23.2078 19.8238 23.2633 19.6696 23.6989C19.5154 24.1344 18.9335 26.3996 18.9335 26.3996C18.9335 26.3996 18.5439 27.1865 17.4601 27.3815C16.3661 27.5784 13.0586 28.2484 13.0586 28.2484C13.0586 28.2484 11.7797 28.1018 11.5474 27.0756C11.3154 26.0495 11.3115 23.5648 11.3115 23.5648C11.3115 23.5648 11.4711 22.7379 12.8524 21.8859C14.2332 21.0345 17.466 19.0469 24.6186 19.045C31.2332 19.0438 37.1381 22.0391 37.1381 22.0391C37.1381 22.0391 38.0188 22.7087 38.2375 23.8703C38.456 25.0321 38.8273 28.1924 36.6102 28.0741Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
       <div data-id="overlay" onClick={this.handleClose} class="overlay"></div>
      </Host>
    );
  }

}
