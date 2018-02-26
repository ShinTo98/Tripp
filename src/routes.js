import React from 'react';
import { Route, IndexRoute } from 'react-router';
import MainWithHeader from './components/MainWithHeader';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/about/AboutPage';
import GuideSignupInfo from './components/GuideSignupInfo';

export default (
  <div>
    <Route path="/" component={WelcomePage} />
    <Route path="/about" component={MainWithHeader}>
      <IndexRoute component={AboutPage} />
      <Route path="/GuideSignupInfo" component={GuideSignupInfo} />
    </Route>
  </div>
);
