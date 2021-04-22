import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'call-btn',
  styleUrl: 'call-btn.css',
  shadow: true,
})
export class CallBtn {

  @Prop()
  text: string = "Call Now!"

  render() {
    return (
      <Host>
        <div>
          <slot name="button">
            <button class="btn btn--open">{this.text}</button>
          </slot>
        </div>
      </Host>
    );
  }
}
