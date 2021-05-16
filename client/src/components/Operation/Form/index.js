import { useEffect, useState } from 'react';
import { Button, Container, Dropdown, Form, Header, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';

import useOperation from 'hooks/useOperation';

import 'react-datepicker/dist/react-datepicker.css';
import './OperationForm.css';

const OperationForm = ({ currentId, setCurrentId }) => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(1);

  const { addNewOp, operations, updateOpe } = useOperation();

  //for operation update
  const operation = currentId ? operations.find(op => op.id === currentId) : null;

  useEffect(() => {
    if (operation) {
      setConcept(operation.concept);
      setAmount(operation.amount);
      setDate(parseISO(operation.date));
      setType(operation.typeId);
    }
  }, [operation]);

  const options = [
    { key: 'i', text: 'Income', value: 1 },
    { key: 'e', text: 'Expense', value: 2 },
  ];

  const handleSubmit = e => {
    e.preventDefault();
    currentId
      ? updateOpe(currentId, { concept, amount, date, typeId: type })
      : addNewOp({ concept, amount, date, typeId: type });
    setConcept('');
    setAmount(0);
    setDate(new Date());
    setType(1);
    setCurrentId('');
  };

  const handleCancel = () => {
    setConcept('');
    setAmount(0);
    setDate(new Date());
    setType(1);
    setCurrentId('');
  };

  const handleConceptChange = e => setConcept(e.target.value);
  const handleAmountChange = e => setAmount(e.target.value);
  const handleDateChange = e => setDate(e);
  const handleTypeChange = (e, data) => setType(data.value);
  return (
    <Container>
      <div className='title'>
        <Header as='h2'>{currentId ? 'Edit operation' : 'New operation'}</Header>
      </div>
      <Form size='large' onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Concept</label>
            <Input
              name='concept'
              onChange={handleConceptChange}
              placeholder='Concept'
              value={concept}
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
              value={amount}
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              dateFormat='dd/MM/yyyy'
              onChange={handleDateChange}
              selected={date}
            />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <Dropdown
              disabled={currentId ? true : false}
              fluid
              options={options}
              onChange={handleTypeChange}
              selection
              value={type}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field className='submit-button'>
          <Button
            content={currentId ? 'Update' : 'Add'}
            icon='plus'
            secondary
            type='submit'
          />
          {currentId && <Button content='Cancel' onClick={handleCancel} />}
        </Form.Field>
      </Form>
    </Container>
  );
};

export default OperationForm;
