import {Component, View, NgFor} from 'angular2/angular2';
import { _settings } from '../../settings';
import {DummyService} from '../../services/dummyService';

@Component({ 
  selector: 'sidebar',
  injectables: [DummyService]
})
@View({
	templateUrl : _settings.buildPath + "/components/sidebar/sidebar.html",
  directives: [NgFor]
})
// Component controller
export class Sidebar {
	myStrings : Array<string>;
	
  constructor() {
    this.myStrings = ['123','456','789'];
	  // 
	  // this.myStrings = dummyService.getSomeData();
  }
}    

 