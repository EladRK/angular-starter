// Angular2
import {bootstrap} from 'angular2/angular2';
// Angular2 Router
import {routerInjectables} from 'angular2/router';

import {MyApp} from './components/app/app';

// Second parameter provides a set of additional bindings 
// that will be used by Component (in our case application)
// read more here: https://angular.io/docs/js/latest/api/core/bootstrap-function.html
bootstrap(MyApp, [routerInjectables]);  
