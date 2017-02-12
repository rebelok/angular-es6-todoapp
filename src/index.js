import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import { router } from 'redux-ui-router';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux';

// Core
import addIdMiddleware from './app/middlewares/addId';
import  visibilityFilterReducer  from './app/modules/visibilityFilter';
import todosReducer from './app/modules/todos';

import 'todomvc-app-css/index.css';

import ComponentsModule from './app/components';
import { App } from './app/containers/App';
import  AutoFocus  from './app/directives/auto-focus.directive';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', [ ngRedux, uiRouter, ComponentsModule ])
  .config(routesConfig)
  .config($ngReduxProvider => {
    'ngInject';

    const logger = createLogger({
      level    : 'log',
      collapsed: true
    });

    const reducer = combineReducers({
      visibilityFilter: visibilityFilterReducer,
      todos           : todosReducer,
      router
    });

    $ngReduxProvider.createStoreWith(reducer, [ addIdMiddleware, logger ]);
  })
  .component('app', App)
  .directive('autoFocus', AutoFocus);

