import { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../styles/form.css';

const PhoneInputField = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleChange = (number) => {
    setPhoneNumber(number);
    props.handleFunc(number);
  };

  return (
    <PhoneInput
      defaultCountry='IL'
      placeholder='Enter phone number'
      value={phoneNumber}
      onChange={(number) => handleChange(number)}
      className='number-input'
    />
  );
};

export default PhoneInputField;
