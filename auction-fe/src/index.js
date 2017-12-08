import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import Main from './components/Main';
import UserListPage from './pages/UserListPage/UserListPage';
import UserPage from './pages/UserPage/UserPage';
import Items from './components/Items/Items';

import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/users" component={UserListPage} />
          <Route path="/users/:id" component={UserPage} />
          <Route path="/items" component={Items} />
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
