import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from './person.service';
import { Observable } from 'rxjs';

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  allPerson: IPerson[] = []
  @Output() data = new EventEmitter();
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.test();
  }

  getAllPerson() {
    return this.allPerson;
  }

  getPersonById(id: number) {
    return this.allPerson.find(t => t.id === id);
  }

  addPerson(obj: IPerson) {
    this.allPerson.push(obj);
  }

  updatePerson(obj: IPerson) {
    let person = this.allPerson.find(t => t.id === obj.id);
    if (person) {
      person.firstName = obj.firstName;
      person.lastName = obj.lastName;
      person.age = obj.age;
    }
  }

  deletePerson(id: number) {
    this.allPerson = this.allPerson.filter(t => t.id !== id);
  }

  deleteAllData() {
    this.allPerson = [];
  }


  emitToParent() {
    this.data.emit(true);
  }
  //#region API

  getAllServerObjects(): Observable<any> {
    return this.personService.getAllServerObjects();
  }

  getServerObjectById(id: number): Observable<any> {
    return this.personService.getServerObjectById(id);
  }

  addObject(data: any): Observable<any> {
    return this.personService.addObject(data);
  }

  deletObject(id: number): Observable<any> {
    return this.personService.deletObject(id);
  }

  //#endregion API
} 
