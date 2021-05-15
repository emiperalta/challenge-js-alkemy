import { useState } from 'react';
import { Button, Container, Dropdown, Form, Header, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

import useOperation from 'hooks/useOperation';

import 'react-datepicker/dist/react-datepicker.css';
import './OperationForm.css';

const OperationForm = () => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(0);

  const { addNewOp } = useOperation();

  const options = [
    { key: 'i', text: 'Income', value: '1' },
    { key: 'e', text: 'Expense', value: '2' },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    addNewOp({ concept, amount, date, typeId: type });
  };

  const handleConceptChange = e => setConcept(e.target.value);
  const handleAmountChange = e => setAmount(e.target.value);
  const handleDateChange = e => setDate(e);
  const handleTypeChange = (e, data) => setType(data.value);

  return (
    <Container>
      <div className='title'>
        <Header as='h2'>New operation</Header>
      </div>
      <Form size='large' onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Concept</label>
            <Input
              name='concept'
              placeholder='Concept'
              onChange={handleConceptChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Amount</label>
            <Input
              icon='dollar'
              iconPosition='left'
              min='0'
              name='amount'
              onChange={handleAmountChange}
              placeholder='Amount'
              type='number'
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DatePicker selected={date} onChange={handleDateChange} />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <Dropdown
              placeholder='Select type'
              fluid
              selection
              options={options}
              onChange={handleTypeChange}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field className='submit-button'>
          <Button content='Add' icon='plus' secondary type='submit' />
        </Form.Field>
      </Form>
    </Container>
  );
};

export default OperationForm;
