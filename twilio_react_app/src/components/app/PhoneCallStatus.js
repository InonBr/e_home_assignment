import { useContext } from 'react';
import { TwilioContext } from '../../context/TwilioContext';
const { Device } = require('twilio-client');

const PhoneCallStatus = () => {
  const { twilioTokens } = useContext(TwilioContext);
  const device = new Device();

  if (twilioTokens) {
    device.setup(twilioTokens.token, { debug: true });
  }

  console.log(device);

  return <h1>placeholder for call status...</h1>;
};

export default PhoneCallStatus;
