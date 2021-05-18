import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { OperationContextProvider } from 'context/OperationContext';
import { UserContextProvider } from 'context/UserContext';

import Home from 'pages/Home';
import Operation from 'pages/Operation';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';

import Navbar from 'components/Navbar';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Navbar />
        <OperationContextProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/operation' component={Operation} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </OperationContextProvider>
      </UserContextProvider>
    </Router>
  );
};

export default App;
