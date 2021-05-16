import { Container, Divider, Grid, Header, Icon, Segment } from 'semantic-ui-react';

import OperationBalance from 'components/Operation/Balance';
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
              {listToShow.length ? (
                <>
                  <Header as='h3'>Last 10 operations</Header>
                  {listToShow.splice(0, 10)}
                </>
              ) : (
                <NoItem />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
};

export default LastTenList;
