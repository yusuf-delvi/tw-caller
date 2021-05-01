import { Component, Host, h, Prop } from '@stencil/core';

// const fonts = ["Arial", "Georgia", "Helvetica", "Verdana", "Open Sans", "Roboto"];

@Component({
  tag: 'call-btn',
  styleUrl: 'call-btn.css',
  shadow: true,
})
export class CallBtn {
  @Prop()
  text: string = 'Call Now!';
  @Prop()
  color: string = '';
  @Prop()
  fontStyle: 'Arial' | 'Georgia' | 'Helvetica' | 'Verdana' | 'Open Sans' | 'Roboto' = 'Arial';
  @Prop()
  fontWeight: 'normal' | 'bold' | 'bolder';
  @Prop()
  fontSize: string;
  @Prop()
  padding: string = `5px`;
  @Prop()
  height: string = `30px`;
  @Prop()
  width: string = `120px`;
  @Prop()
  borderRadius: string = 'sharp';
  @Prop()
  bgColor: string = '';
  @Prop()
  borderColor: string = '';

  render() {
    return (
      <Host>
        <div>
          <slot name="button">
            <button
              style={{
                fontFamily: this.fontStyle,
                fontWeight: this.fontWeight,
                color: this.color,
                borderRadius: `${this.borderRadius == "round" ? '24px' : '0px'}`,
                border: `1px solid ${this.borderColor}`,
                backgroundColor: this.bgColor,
                fontSize: this.fontSize,
                height: this.height,
                width: this.width,
                padding: this.padding,
              }}
              class="btn btn--open"
            >
              {this.text}
            </button>
          </slot>
        </div>
      </Host>
    );
  }
}
