import { useState, useContext } from 'react';
import { TwilioContext } from '../../context/TwilioContext';
import { Form, Button, Row, Col } from 'react-bootstrap';
import PhoneInputField from './PhoneInput';
import { makeCall } from '../../lib/api';
import '../styles/form.css';

const FormPhoneNumber = () => {
  const { setTwilioTokens } = useContext(TwilioContext);
  const [phoneNumber, setphoneNumber] = useState('');
  const [fromErr, setFromErr] = useState(null);

  const handlePhoneInput = (number) => {
    setphoneNumber(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFromErr(null);

    makeCall({ phone_number: phoneNumber })
      .then((response) => {
        setTwilioTokens({ sid: response.data.sid, token: response.data.token });
      })
      .catch((error) => {
        let errprMsg;

        if (error.response.data.validation_error) {
          errprMsg = error.response.data.validation_error.body_params[0].msg;
        } else if (error.response.data.msg) {
          errprMsg = error.response.data.msg;
        } else {
          console.error(error);
        }

        setFromErr(errprMsg);
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
      <Form.Group className='err-color'>{fromErr}</Form.Group>
    </Form>
  );
};

export default FormPhoneNumber;
