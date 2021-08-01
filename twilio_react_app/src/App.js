import { useState } from 'react';
import FormPhoneNumber from './components/app/FormPhoneNumber';
import PhoneCallStatus from './components/app/PhoneCallStatus';
import { TwilioContext } from './context/TwilioContext';
import './App.css';

function App() {
  const [twilioTokens, setTwilioTokens] = useState(null);

  return (
    <div className='App'>
      <TwilioContext.Provider value={{ twilioTokens, setTwilioTokens }}>
        <FormPhoneNumber />
        <PhoneCallStatus />
      </TwilioContext.Provider>
    </div>
  );
}

export default App;
