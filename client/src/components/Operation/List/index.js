import { useLocation } from 'react-router-dom';
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
  Table,
} from 'semantic-ui-react';

import useOperation from 'hooks/useOperation';

import OperationItem from './OperationItem';
import NoItem from './NoItem';
import OperationBalance from '../Balance';

import './OperationList.css';

const OperationList = () => {
  const location = useLocation();
  const { operations } = useOperation();

  const path = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const listToShowInHome = operations
    .sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
    .map(el => <OperationItem key={el.id} item={el} />);

  const listToShowInOpTable = operations.sort((a, b) =>
    a.date > b.date ? -1 : b.date > a.date ? 1 : 0
  );

  return (
    <>
      {path === 'home' ? (
        <Container className='title'>
          <Segment placeholder>
            <Grid columns={2} stackable textAlign='center' relaxed='very'>
              <Divider vertical>
                <Icon name='circle outline' />
              </Divider>
              <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                  <OperationBalance list={operations} />
                </Grid.Column>
                <Grid.Column>
                  {listToShowInHome.length ? (
                    <>
                      <Header as='h3'>Last 10 operations</Header>
                      {listToShowInHome.splice(0, 10)}
                    </>
                  ) : (
                    <NoItem />
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
      ) : (
        <Container className='title'>
          <div className='title'>
            <Header as='h2'>All operations</Header>
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Concept</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Type</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {listToShowInOpTable.map(el => {
                return (
                  <Table.Row>
                    <Table.Cell key={el.id}>
                      <p>{el.concept}</p>
                    </Table.Cell>
                    <Table.Cell key={el.id}>
                      <p>{el.amount}</p>
                    </Table.Cell>
                    <Table.Cell key={el.id}>
                      <p>{el.date}</p>
                    </Table.Cell>
                    <Table.Cell key={el.id}>
                      <p>{el.typeId}</p>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </Container>
      )}
    </>
  );
};

export default OperationList;
