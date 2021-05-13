import { useEffect, useState } from 'react';
import { Container, Divider, Grid, Icon, Segment } from 'semantic-ui-react';

import { getAllOps } from '../../services/operationService';

import OperationBalance from './OperationBalance';
import OperationItem from './OperationItem';
import NoItem from './NoItem';

const OperationList = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getAllOps().then(data => {
      setList(data);
    });
  }, []);

  const listToShow = list
    .sort((a, b) => (a.date > b.date ? -1 : b.date > a.date ? 1 : 0))
    .map(el => <OperationItem key={el.id} item={el} />);

  return (
    <Container style={{ paddingTop: 30 }}>
      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>
            <Icon name='circle outline' />
          </Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <OperationBalance list={list} />
            </Grid.Column>

            <Grid.Column>
              <h3>Last 10 operations</h3>
              {listToShow.length ? listToShow.splice(0, 10) : <NoItem />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default OperationList;
