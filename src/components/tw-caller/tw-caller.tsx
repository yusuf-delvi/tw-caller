import { Component, Host, h, State, Prop, getAssetPath, EventEmitter, Event } from '@stencil/core';

function formatTime(time) {
  return time <= 9 ? `0${time}` : time;
}

@Component({
  tag: 'tw-caller',
  styleUrl: 'tw-caller.css',
  shadow: true,
  assetsDirs: [
    'assets'
  ]
})
export class TwCaller {

  // state
  @State()
  callStatus = ""

  @State()
  isOpen = false;

  @State()
  callTime = 0;


  @Event()
  opened: EventEmitter;
  @Event() closed: EventEmitter;

  // props
  @Prop({
    mutable: true,
    reflect:true
  })
  avatarSrc = "https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png";

  @Prop({
    mutable: true,
    reflect: true
  })
  calleName = "The Company";

  @Prop({
    mutable: true,
    reflect: true
  })
  callEndpoint = "";

  @Prop({
    mutable: true,
    reflect: true
  })
  hideCloseBtn = false;

  @Prop({
    mutable: true,
    reflect: true
  })
  btnText = "Call Us Now!"




  // methods
  open = () => {
    this.isOpen = true;
    this.opened.emit();
    this.startCall()
  };

  close = () => {
    this.isOpen = false;
    this.closed.emit();
    this.endCall();
  };

  timeIntervalId;

  startCall() {
    const startedAt = Date.now();

    this.timeIntervalId = setInterval(() => {
      this.callTime = Date.now() - startedAt;
    }, 1000)
  }

  endCall() {
    clearInterval(this.timeIntervalId);
    this.callTime = 0;
  }

  render() {
    const time = new Date(this.callTime);
    const minutes = formatTime(time.getUTCMinutes())
    const seconds = formatTime(time.getUTCSeconds());
    return (
      <Host>
             <div class="container">
          <div class={`modal ${this.isOpen ? 'modal--show' : ''}`}>
            {!this.hideCloseBtn && (
              <div data-id="close-btn" class="close-modal" onClick={this.close}>
                <span>&times;</span>
              </div>
            )}
            <div data-id="content" class="modal__content">
              <div class="content_header">
                <img src={this.avatarSrc} />
                <div>
                  <h3>{this.calleName}</h3>
                </div>
              </div>
              <div class="content_body">
                <div class="call-time">
                  {minutes }<span class="blink">:</span>{seconds}
                </div>
                <div>{this.callStatus}</div>
              </div>
              <div class="content_footer">
                {/* <div class="call-mute" title={this.muted ? 'Unmute' : 'Mute'} onClick={this.toggleMute}>
                  <img src={getAssetPath(`./assets/${this.muted ? 'mute-' : ''}microphone.png`)} />
                </div> */}
                <div onClick={this.close} title="End call" class="call-end">
                  <img src={getAssetPath(`./assets/hang-up.png`)} />
                </div>
              </div>
            </div>
          </div>
          <div data-id="overlay" onClick={this.close} class="overlay"></div>
          <div data-id="open-btn" onClick={this.open}>
            <slot name="open-btn">
              <button class="btn btn--open">{this.btnText}</button>
            </slot>
          </div>
        </div>
      </Host>
    );
  }

}


