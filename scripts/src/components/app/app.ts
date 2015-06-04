import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'
import {Sidebar} from '../sidebar/sidebar'

@Component({ 
  selector: 'my-app'
})
@View({
  templateUrl: _settings.buildPath + '/components/app/app.html',
  directives: [Sidebar]
})
// Component controller
export class MyApp {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}    

