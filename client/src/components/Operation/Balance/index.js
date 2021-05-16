import { Icon, Statistic } from 'semantic-ui-react';

const OperationBalance = ({ list }) => {
  let balance = 0;

  list.forEach(el => {
    el.typeId === 1 && (balance += el.amount);
    el.typeId === 2 && (balance -= el.amount);
  });

  return (
    <div>
      <Statistic>
        <Statistic.Label>
          <Icon name='money bill alternate outline' size='huge' />
        </Statistic.Label>
        <Statistic.Label>Balance</Statistic.Label>
        <Statistic.Value>${balance}</Statistic.Value>
      </Statistic>
    </div>
  );
};

export default OperationBalance;
