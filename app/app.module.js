import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import ngRedux from 'ng-redux';
import ngReduxUiRouter from 'redux-ui-router';

import AppComponent from './app.component';
import { Form, Posts } from './components';
import config from './app.config';

export default angular.module('app', [
    uiRouter,
    ngRedux,
    ngReduxUiRouter
])
    .config(config)
    .component('interviewApp', AppComponent)
    .component('postsComponent', Posts)
    .component('formComponent', Form)
    .name;