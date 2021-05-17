import Helmet from 'react-helmet';

import useOperation from 'hooks/useOperation';

import LastTenList from 'components/Operation/List/LastTenList';

const Home = () => {
  const { operations, orderedList } = useOperation();

  return (
    <div>
      <Helmet>
        <title>Home | Challenge-JS</title>
        <meta name='description' content='Home page Challenge-JS' />
      </Helmet>

      <LastTenList listToShow={orderedList} operations={operations} />
    </div>
  );
};

export default Home;
