import {Component, View, NgFor} from 'angular2/angular2';
import { _settings } from '../../settings';
import {DummyService} from '../../services/dummyService';
import {Inject} from 'angular2/di';
import { Http, httpInjectables} from 'angular2/http';

var dummyServiceMap = new WeakMap<Sidebar, DummyService>();

@Component({
  selector: 'sidebar',
  injectables: [DummyService, Http]
})
@View({
	templateUrl : _settings.buildPath + "/components/sidebar/sidebar.html",
  directives: [NgFor]
})
// Component controller
export class Sidebar {
	myStrings : Array<string>;
	value: string;
  achievements: Array<any>;
  
  constructor(@Inject(DummyService) dummyService: DummyService) {
    this.myStrings = ['123','456','789'];
    this.value="Message";
	  // 
	  console.log(dummyService.getSomeData());
    
    dummyServiceMap.set(this, dummyService);
    
    this.getAchievements('major');
    
    setTimeout(() => {
      this.value = dummyService.getServerData().name;
      this.getAchievements('medium');
    }, 1000);
    
    setTimeout(() => {
        this.getAchievements('minor');
    }, 3000);
  }
  
  getAchievements(type: string){
    dummyServiceMap.get(this).getAchievements(type)
                   .map(r => r.json())
                   .subscribe(a => {
                      if(!this.achievements || this.achievements.length === 0){
                        this.achievements = a;
                      }
                      else{
                        this.achievements.push(...a);
                      }
                    });
  }
}    
 