import { Device } from 'twilio-client';

class TwilioDevice {
  device: Device;

  async init(api_key) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetch(`https://89b9a8d4f39e.ngrok.io/browser-call-widget/us-central1/call/generateToken?api_key=${api_key}`);
        const { token } = await data.json();
        const device = new Device(token);
        device.on('ready', () => {
          this.device = device;
          resolve(device);
        });

        device.on('error', reject);
      } catch (e) {
        reject();
      }
    });
  }

  async call() {
    if (this.device) this.device.connect();
  }

  async hangUp() {
    if (this.device) this.device.destroy();
  }
}

export default TwilioDevice;
