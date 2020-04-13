import { Component, Output, EventEmitter } from '@angular/core';
import { PersonServices } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']

})

export class PersonInputComponent{


  // By using Output I can then pass information to the parent component through events.
  // This is how CHILD components talk with PARENT components.
 // @Output() personCreate = new EventEmitter<string>();

  enteredPersonName: string;


  constructor (private _personsService: PersonServices){

  }


  onCreatePerson(): void {
    console.log("Created a person " + this.enteredPersonName);

    // here I emitted and event to the PARENT component passing the person's name
    // Next step is to use the binding "personCreate" on the parent HTML file (app.component.html)
    // in the event I am passing the person's name entered in the input box
    //this.personCreate.emit(this.enteredPersonName);

    //this.enteredPersonName = ""

    this._personsService.addPerson(this.enteredPersonName);

  }
}
