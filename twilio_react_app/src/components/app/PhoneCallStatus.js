const { Device } = require('twilio-client');

const PhoneCallStatus = () => {
  const device = new Device();
  console.log(device);
  device.setup(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImN0eSI6InR3aWxpby1mcGE7dj0xIn0.eyJqdGkiOiI4MWNlM2MxMDdiZGI5ZmYxNzQ0N2Q3NzIxNjNjYzljMi0xNjI3NTQ1MDYwIiwiZ3JhbnRzIjp7ImNoYXQiOnsic2VydmljZV9zaWQiOiJBQ2E4MjJlMjRkNjZlYmNlZTFiMzQ4MTRhNmQxZjViOGEwIn0sImlkZW50aXR5IjoiQUNhODIyZTI0ZDY2ZWJjZWUxYjM0ODE0YTZkMWY1YjhhMCJ9LCJpc3MiOiI4MWNlM2MxMDdiZGI5ZmYxNzQ0N2Q3NzIxNjNjYzljMiIsImV4cCI6MTYyNzU0ODY2MCwibmJmIjoxNjI3NTQ1MDYwLCJzdWIiOiJTSzZkZDhlN2E5MGVkMGJkZDUwNDNlYzkxZjM0MjJkYTQyIn0.hG1u9r4cywuioOGR3JPNpBUdD__xN6yV6K-sovqNvAY',
    { debug: true }
  );

  console.log(device);

  return <h1>hello world</h1>;
};

export default PhoneCallStatus;
