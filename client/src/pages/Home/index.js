import Helmet from 'react-helmet';

import useOperation from 'hooks/useOperation';

import OperationList from 'components/Operation/List';

import './Home.css';

const Home = () => {
  const { operations } = useOperation();

  return (
    <div>
      <Helmet>
        <title>Home | Challenge-JS</title>
        <meta name='description' content='Home page Challenge-JS' />
      </Helmet>

      <OperationList operations={operations} />
    </div>
  );
};

export default Home;
