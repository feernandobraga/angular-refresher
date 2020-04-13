import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonServices } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private personListSubscription: Subscription;

  constructor(private prsService: PersonServices) {}

  ngOnInit() {
    this.personListSubscription = this.prsService.personsChanged.subscribe(
      (persons) => {
        this.personList = persons;
      }
    );
    setTimeout(() => {
      this.prsService.fetchPersons();
    }, 2000);
  }

  // Code Before API implementation
  // ngOnInit(){
  //   this.personList = this.prsService.persons;
  //   this.personListSubscription = this.prsService.personsChanged.subscribe(persons => {
  //     this.personList = persons;
  //   });
  // }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() {
    this.personListSubscription.unsubscribe();
  }
}
