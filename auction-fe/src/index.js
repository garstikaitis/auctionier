import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from './common/palette';

import './App.css';

import Main from './components/Main';
import UserListPage from './pages/UserListPage/UserListPage';
import UserPage from './pages/UserPage/UserPage';
import Items from './components/Items/Items';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/users" component={UserListPage} />
            <Route path="/users/:id" component={UserPage} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
