import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInputField from './PhoneInput';
import { makeCall } from '../../lib/api';
import '../styles/form.css';

const FormPhoneNumber = () => {
  const [phoneNumber, setphoneNumber] = useState('');

  const handlePhoneInput = (number) => {
    setphoneNumber(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    makeCall({ phone_number: phoneNumber }).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <Form className='m-5 form-width' onSubmit={(event) => handleSubmit(event)}>
      <Form.Group as={Row} className='mb-3' controlId='formPlaintextEmail'>
        <Form.Label column sm='2'>
          Phone Number:
        </Form.Label>

        <Col sm='8'>
          <PhoneInputField handleFunc={handlePhoneInput} />
        </Col>

        <Col sm='2'>
          <Button variant='primary' type='submit'>
            Call Now!
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
};

export default FormPhoneNumber;
