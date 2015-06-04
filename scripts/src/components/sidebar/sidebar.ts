import {Component, View} from 'angular2/angular2';
import { _settings } from '../../settings'

@Component({ 
  selector: 'sidebar'
})
@View({
	templateUrl : _settings.buildPath + "/components/sidebar/sidebar.html"
})
// Component controller
export class Sidebar {
  constructor() {
  }
}    

