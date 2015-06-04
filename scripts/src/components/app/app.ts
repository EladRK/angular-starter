import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'

@Component({ 
  selector: 'my-app'
})
@View({
  templateUrl: _settings.buildPath + '/components/app/app.html'
})
// Component controller
export class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}    

