import { useState } from 'react';
import { Button, Container, Form, Header, Input, Select } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './OperationForm.css';

const OperationForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { key: 'i', text: 'Income', value: '1' },
    { key: 'e', text: 'Expense', value: '2' },
  ];

  return (
    <Container>
      <div className='title'>
        <Header as='h2'>New operation</Header>
      </div>
      <Form size='large'>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Concept</label>
            <Input placeholder='Concept' />
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Input
              icon='dollar'
              iconPosition='left'
              placeholder='Amount'
              type='number'
              min='0'
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <Select options={options} placeholder='Type' />
          </Form.Field>
        </Form.Group>
        <Form.Field className='submit-button'>
          <Button content='Add' icon='plus' secondary />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default OperationForm;
