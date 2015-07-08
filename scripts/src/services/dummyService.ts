import {Component, View} from 'angular2/angular2';
import { Inject} from 'angular2/di';
import {Http} from 'angular2/http';

var httpMap = new WeakMap<DummyService, Http>();
export class DummyService
{
	myData : Array<string>;
	serverData: any;
	
	constructor(@Inject(Http) http:Http){
		this.myData = new Array<string>();
		
		this.myData.push('milk');
		this.myData.push('honey');
		this.myData.push('cheese');
		
		httpMap.set(this, http);
		
		http.get('/api/sample')
            .map(response => response.json())
            .subscribe(data => {
				this.serverData = data;
				});
	}
	
	getSomeData() : Array<string> 
	{
		return this.myData;
	}
	
	getServerData(): any{
		return this.serverData;
	}
	
	getAchievements(type: string): any{
		var path = '/api/achievements/' + type;
		console.log(path);
		return httpMap.get(this).get(path);
	}
}