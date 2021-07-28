import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInputField from './PhoneInput';
import '../styles/form.css';

const FormPhoneNumber = () => {
  const [phoneNumber, setphoneNumber] = useState('');

  const handlePhoneInput = (number) => {
    setphoneNumber(number);
  };

  console.log(phoneNumber);

  return (
    <Form className='m-5 form-width'>
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
