import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'tw-caller',
  styleUrl: 'tw-caller.css',
  shadow: true,
})
export class TwCaller {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
