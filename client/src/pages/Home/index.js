import Helmet from 'react-helmet';

import OperationList from 'components/Operation/List';

import './Home.css';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Challenge-JS</title>
        <meta name='description' content='Home page Challenge-JS' />
      </Helmet>

      <OperationList />
    </div>
  );
};

export default Home;
