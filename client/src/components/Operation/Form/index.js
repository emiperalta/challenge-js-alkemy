import { useEffect, useState } from 'react';
import { Button, Container, Dropdown, Form, Header, Input } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';

import useOperation from 'hooks/useOperation';
import useUser from 'hooks/useUser';

import 'react-datepicker/dist/react-datepicker.css';
import './OperationForm.css';

const OperationForm = ({ currentId, setCurrentId }) => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState(1);
  const [message, setMessage] = useState('');

  const { addNewOp, operations, updateOpe } = useOperation();
  const { token, isLogged } = useUser();

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
      ? updateOpe(currentId, { concept, amount, date, typeId: type }, token).catch(
          err => {
            setMessage(err.message);
            setTimeout(() => setMessage(''), 4000);
          }
        )
      : addNewOp({ concept, amount, date, typeId: type }, token).catch(err => {
          setMessage(err.message);
          setTimeout(() => setMessage(''), 4000);
        });
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
      <Form size='big' onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field>
            <label>Concept</label>
            <Input
              name='concept'
              onChange={handleConceptChange}
              placeholder='Concept'
              value={concept}
              readOnly={isLogged ? false : true}
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
              readOnly={isLogged ? false : true}
            />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              dateFormat='dd/MM/yyyy'
              onChange={handleDateChange}
              selected={date}
              readOnly={isLogged ? false : true}
            />
          </Form.Field>
          <Form.Field>
            <label>Type</label>
            <Dropdown
              disabled={!isLogged || currentId ? true : false}
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
            icon={currentId ? 'edit outline' : 'plus'}
            secondary
            type='submit'
            disabled={isLogged ? false : true}
          />
          {message && <p className='error'>{message}</p>}
          {!isLogged && (
            <p className='warning'>You need to sign in to add a new operation!</p>
          )}
          {currentId && <Button content='Cancel' onClick={handleCancel} />}
        </Form.Field>
      </Form>
    </Container>
  );
};

export default OperationForm;
