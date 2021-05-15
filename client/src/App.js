import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { OperationContextProvider } from 'context/OperationContext';

import Home from 'pages/Home';
import Operation from 'pages/Operation';
import Navbar from 'components/Navbar';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Router>
      <OperationContextProvider>
        <Navbar />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/operation'>
            <Operation />
          </Route>
        </Switch>
      </OperationContextProvider>
    </Router>
  );
};

export default App;
