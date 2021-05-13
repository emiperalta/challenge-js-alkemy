import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import List from './pages/List';
import Navbar from './components/Navbar';

import 'semantic-ui-css/semantic.min.css';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
