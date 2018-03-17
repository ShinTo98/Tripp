/*eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Link, Router, browserHistory } from 'react-router';
import 'babel-polyfill';
import configureStore from './store/configureStore';
import routes from './routes';
import {loadGuides} from './actions/guideActions';
import {loadChat} from './actions/chatActions';
import {loadSchedule} from './actions/scheduleActions';
import {loadProgress} from './actions/progressActions';

import './styles/styles.css'; //Webpack can import CSS files too!
import './styles/general.css';
import './styles/signup.css';
import './styles/guide_signup.css';
import './styles/profile.css';
import './styles/login.css';
import { loadProfile } from './actions/profileActions';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadGuides());

store.dispatch(loadChat());
store.dispatch(loadSchedule());
store.dispatch(loadProgress());

store.dispatch(loadProfile());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
