import { useContext } from 'react';
import { TwilioContext } from '../../context/TwilioContext';
const { Device } = require('twilio-client');

const PhoneCallStatus = () => {
  const { twilioTokens } = useContext(TwilioContext);
  const device = new Device();

  if (twilioTokens) {
    // my status is offline...
    // not sure how to fix after log time of trial and error
    device.setup(twilioTokens.token, { debug: true });
  }

  return <h1>placeholder for call status...</h1>;
};

export default PhoneCallStatus;
