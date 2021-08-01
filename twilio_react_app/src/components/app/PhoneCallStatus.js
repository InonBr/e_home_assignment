import { useContext } from 'react';
import { TwilioContext } from '../../context/TwilioContext';
const { Device } = require('twilio-client');

const PhoneCallStatus = () => {
  const { twilioTokens } = useContext(TwilioContext);
  const device = new Device();

  device.setup(twilioTokens.token, { debug: true });

  console.log(device);

  return <h1>hello world</h1>;
};

export default PhoneCallStatus;
