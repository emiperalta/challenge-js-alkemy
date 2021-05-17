import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  List,
  Segment,
} from 'semantic-ui-react';

import OperationBalance from 'components/Operation/Balance';
import OperationItem from './OperationItem';
import NoItem from './NoItem';

const LastTenList = ({ listToShow, operations }) => {
  return (
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
              <List celled>
                {listToShow.length ? (
                  <>
                    <Header as='h3'>Last 10 operations</Header>
                    {listToShow.slice(0, 10).map(el => (
                      <OperationItem key={el.id} item={el} />
                    ))}
                  </>
                ) : (
                  <NoItem />
                )}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default LastTenList;
