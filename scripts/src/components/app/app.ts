import {Component, View} from 'angular2/angular2';
import {Router, RouteConfig, RouterLink, RouterOutlet} from 'angular2/router';
import { Inject} from 'angular2/di';

import { _settings } from '../../settings'
import {Sidebar} from '../sidebar/sidebar'
import {Home} from '../home/home'
import {About} from '../about/about'

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: _settings.buildPath + '/components/app/app.html',
  directives: [Sidebar, RouterLink, RouterOutlet]
})

// This is one way of configuring an application router
// The second way is shown bellow, inside MyApp controller
// @RouteConfig([
//  { path: '/', as: 'home', component: Home },
//  { path: '/about', as: 'about', component: About }
// ])
// Component controller
export class MyApp {
  name: string;
  constructor(@Inject(Router) router: Router) {
    this.name = 'Alice';
    // here is the socond way of configuring router
    // simply inject router and configure from within a constructor or helper function 
    router.config([
      { path: '', as: 'home', component: Home },
      { path: '/about', as: 'about', component: About }
    ]);
  }
}    

