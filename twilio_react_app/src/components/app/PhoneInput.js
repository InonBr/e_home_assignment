import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../styles/form.css';

const PhoneInputField = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInput = () => {
    props.handleFunc(phoneNumber);
  };

  return (
    <PhoneInput
      defaultCountry='IL'
      placeholder='Enter phone number'
      value={phoneNumber}
      onChange={setPhoneNumber}
      onInput={() => handleInput()}
      className='number-input'
    />
  );
};

export default PhoneInputField;
