import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonServices {
  personsChanged = new Subject<string[]>();

  /* code before api
  persons: string[] = ['Max', 'Manuel', 'Anna'];
  */

  persons: string[];

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http
      .get<any>('https://pokeapi.co/api/v2/pokemon')
      .pipe(
        map((resData) => {
          return resData.results.map((pokemon) => pokemon.name);
        })
      )
      .subscribe((transformedData) => {
        this.personsChanged.next(transformedData);
      });
  }

  // The code below was before implementing the API
  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons);
  }

  removePerson(name: string) {
    // the method will filter the persons array and if the name passed to the method
    // is equals to the one from the filter() method, it returns false, so the name gets omitted.
    this.persons = this.persons.filter((person) => {
      return person !== name;
    });

    this.personsChanged.next(this.persons);
  }
}
