import { Component, Host, h, State, Prop, EventEmitter, Event, Listen } from '@stencil/core';
import TwilioDevice from '../../twilio';


@Component({
  tag: 'tw-caller',
  styleUrl: 'tw-caller.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class TwCaller {
  // state
  @State()
  callStatus = '';

  @State()
  isOpen = false;

  @State()
  callTime = 0;

  @Event()
  opened: EventEmitter;
  @Event()
  closed: EventEmitter;

  // props
  @Prop()
  logoSrc = 'https://tppwebsolutions.com/wp-content/uploads/logo-demo3.png';

  @Prop()
  apiKey = "api-key";

  // methods
  open = () => {
    this.isOpen = true;
    this.opened.emit();
    this.startCall();
  };

  close = () => {
    this.isOpen = false;
    this.closed.emit();
    this.endCall();
  };

  timeIntervalId;
  twilio: TwilioDevice;
  async startCall() {
    this.twilio = new TwilioDevice();
    await this.twilio.init(this.apiKey);
    this.twilio.call();

    this.twilio.device.activeConnection().on('disconnect', () => {
      console.log('the call has ended');
      this.close();
    });

    const startedAt = Date.now();
    this.timeIntervalId = setInterval(() => {
      this.callTime = Date.now() - startedAt;
    }, 1000);
  }

  endCall() {
    clearInterval(this.timeIntervalId);
    this.callTime = 0;

    this.twilio.hangUp();
  }

  @Listen('keydown')
  handleEscape(ev: KeyboardEvent) {
    if (ev.key == 'Escape') {
      this.close();
    }
  }

  render() {
    return (
      <Host>
        <div class="container">
          <call-dialog logoSrc={this.logoSrc} isOpen={this.isOpen} callDuration={this.callTime} onClose={this.close} />
          <div onClick={this.open}>
            <slot name="call-btn">
              <call-btn />
            </slot>
          </div>
        </div>
      </Host>
    );
  }
}
