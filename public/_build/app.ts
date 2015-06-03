import {Component, View, bootstrap} from 'angular2/angular2';

// class SomeClass
// {
//   name: string;
//   constructor()
//   {
//     this.name = 'some name';
//     
//   }
// } 


@Component({ 
  selector: 'my-app'
})
@View({
  template: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  name: string;
  
  constructor() {
    this.name = 'Alice';
  }
}    

bootstrap(MyAppComponent);  