import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './common/palette';
// import storage from 'redux-persist/lib/storage';
// import { persistStore } from 'redux-persist';

import './App.css';

import Main from './components/Main';
import Dashboard from './pages/Dashboard/Dashboard';
import UserPage from './pages/UserPage/UserPage';
import Items from './components/Items/Items';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';

import store from './redux/store';

import registerServiceWorker from './registerServiceWorker';

class Root extends React.Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Router>
              <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/users/:id" component={UserPage} />
                <Route exact path="/items" component={Items} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignupPage} />
              </Switch>
            </Router>
          </MuiThemeProvider>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
