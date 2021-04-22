import { Component, Host, h, Prop } from '@stencil/core';

// const fonts = ["Arial", "Georgia", "Helvetica", "Verdana", "Open Sans", "Roboto"];

@Component({
  tag: 'call-btn',
  styleUrl: 'call-btn.css',
  shadow: true,
})
export class CallBtn {

  @Prop()
  text: string = "Call Now!"
  @Prop()
  textColor: string = "";

  @Prop()
  font: "Arial" | "Georgia" | "Helvetica" | "Verdana" | "Open Sans" | "Roboto" = "Arial"
  @Prop()
  fontWeight: "normal" | "bold" | "bolder";
  @Prop()
  fontSize: string;
  @Prop()
  opacity: string;

  @Prop()
  rounded: boolean = false;

  @Prop()
  bgColor: string = "";

  @Prop()
  borderColor: string = "";

  render() {
    return (
      <Host>
        <div>
          <slot name="button">
            <button style={{
              fontFamily: this.font,
              fontWeight: this.fontWeight,
              color: this.textColor,
              borderRadius: this.rounded ? "24px" : "0",
              border: `1px solid ${this.borderColor}`,
              backgroundColor: this.bgColor,
              fontSize: this.fontSize,
              opacity: this.opacity,
            }} class="btn btn--open">{this.text}</button>
          </slot>
        </div>
      </Host>
    );
  }
}
