import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  // this method will handle the event emitter that came from the child component, and then was bound
  // to the method onPersonCreate via the app.component.html
  // The method receives a parameter, which is the name input in the text box
  // onPersonCreated(name: string){
  //   this.persons.push(name);
  // }

}
