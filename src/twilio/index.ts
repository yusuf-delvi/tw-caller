import { Device } from 'twilio-client';

class TwilioDevice {
  device: Device;

  async init(tokenUrl = 'http://localhost:3000/api/twilio/voice-token') {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await fetch(tokenUrl);
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

  async callNumber(number) {
    if (this.device)
      this.device.connect({
        phoneNumber: number,
      });
  }

  async hangUp() {
    if (this.device) this.device.destroy();
  }
}

export default TwilioDevice;
