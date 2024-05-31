/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPerson, PersonComponent } from './person.component';
import { PersonService } from './person.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


let mockObjects = [{ "id": "1", "name": "Google Pixel 6 Pro", "data": { "color": "Cloudy White", "capacity": "128 GB" } }, { "id": "2", "name": "Apple iPhone 12 Mini, 256GB, Blue", "data": null }, { "id": "3", "name": "Apple iPhone 12 Pro Max", "data": { "color": "Cloudy White", "capacity GB": 512 } }, { "id": "4", "name": "Apple iPhone 11, 64GB", "data": { "price": 389.99, "color": "Purple" } }, { "id": "5", "name": "Samsung Galaxy Z Fold2", "data": { "price": 689.99, "color": "Brown" } }, { "id": "6", "name": "Apple AirPods", "data": { "generation": "3rd", "price": 120 } }, { "id": "7", "name": "Apple MacBook Pro 16", "data": { "year": 2019, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB" } }, { "id": "8", "name": "Apple Watch Series 8", "data": { "Strap Colour": "Elderberry", "Case Size": "41mm" } }, { "id": "9", "name": "Beats Studio3 Wireless", "data": { "Color": "Red", "Description": "High-performance wireless noise cancelling headphones" } }, { "id": "10", "name": "Apple iPad Mini 5th Gen", "data": { "Capacity": "64 GB", "Screen size": 7.9 } }, { "id": "11", "name": "Apple iPad Mini 5th Gen", "data": { "Capacity": "254 GB", "Screen size": 7.9 } }, { "id": "12", "name": "Apple iPad Air", "data": { "Generation": "4th", "Price": "419.99", "Capacity": "64 GB" } }, { "id": "13", "name": "Apple iPad Air", "data": { "Generation": "4th", "Price": "519.99", "Capacity": "256 GB" } }];

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let personService: PersonService;
  let httpCtrl: HttpTestingController;
  const mockData: IPerson = { id: 1, firstName: 'A', lastName: 'Z', age: 5 };
  beforeEach(() => {
    //refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [
        PersonComponent
      ],
      providers: [
        PersonService
      ],
      imports: [
        HttpClientTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    //create component and test fixture
    fixture = TestBed.createComponent(PersonComponent);
    //Open Console to see What fixture holds
    //console.log(fixture);
    //get test component from the fixture
    component = fixture.componentInstance;
    //UserService provided to the TestBed
    personService = TestBed.inject(PersonService);
    httpCtrl = TestBed.inject(HttpTestingController);
    fixture.detectChanges(); //ells Angular to run change-detection
  });

  it('should add person,and return its size as 1', () => {
    component.addPerson(mockData);
    expect(component.getAllPerson()).toHaveSize(1);
  });

  it('should return person with Id 1', () => {
    component.addPerson(mockData);
    expect(component.getPersonById(1)).toEqual(mockData);
  });

  it('should delete person with Id 1', () => {
    component.addPerson(mockData);
    component.deletePerson(1);
    expect(component.getAllPerson()).toEqual([]);
  });

  it('should update person with Id 1', () => {
    component.addPerson(mockData);
    let person = component.getPersonById(1);
    if (person) person.firstName = 'NEW NAME';
    component.updatePerson(person as IPerson);
    expect(component.getPersonById(1)).toEqual(person);
  });

  it('should delete All data', () => {
    component.addPerson(mockData);
    component.addPerson(mockData);
    component.deleteAllData();
    expect(component.getAllPerson()).toEqual([]);
  });

  //f(focus) and x (exclude)
  //f->Include i.e fdescibe,fit
  //x ->exclude
  it('Should emit the value once emitToParent method calling.', () => {
    spyOn(component.data, 'emit');
    component.emitToParent();
    expect(component.data.emit).toHaveBeenCalledWith(true);
  });

  it('should Get all Objects API', () => {
    component.getAllServerObjects().subscribe({
      next: (response) => {
        // console.log(response);
        expect(response).toBeTruthy();
        expect(response.length).toBeGreaterThan(1);
      }
    });

    const mockHttpRequest = httpCtrl.expectOne({ method: 'GET', url: 'https://api.restful-api.dev/objects', });
    mockHttpRequest.flush(mockObjects); //send data through the stream
    //this sort of seems to go against the normal testing pattern where you'd specify the data to be returned before the assertion statement. 
    //flush statement is executed, it sends the mockObjects data through the stream, the subscribe block resolves and our assertion then takes place.
  });


  it('should GET Server Object By ID API', () => {
    let id = 7;
    component.getServerObjectById(id).subscribe({
      next: (response) => {
        // console.log(response);
        expect(response).toBeTruthy();
        expect(response.id).toEqual("1");
        expect(response.name.length).toBeGreaterThan(5);
      }
    });
    const mockHttpRequest = httpCtrl.expectOne({ method: 'GET', url: 'https://api.restful-api.dev/objects/' + id, });
    mockHttpRequest.flush(mockObjects[0]);
  });



  it('should Add Object', () => {
    let addObject = { "name": "Apple MacBook Pro 16", "data": { "year": 2019, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB" } };
    component.addObject(addObject).subscribe({
      next: (response) => {
        console.log(response);
        expect(response).toBeTruthy();
        expect(response.id).toEqual("99");
        expect(response.name.length).toBeGreaterThan(5);
      }
    });
    const mockHttpRequest = httpCtrl.expectOne({ method: 'POST', url: 'https://api.restful-api.dev/objects' });
    mockHttpRequest.flush({ ...addObject, ...{ id: "99" } });
  });


  it('should Delete Object By Id', () => {
    let id = 5
    component.deletObject(5).subscribe({
      next: (response) => {
        console.log(response);
        expect(response).toBeTruthy();
        expect(response.message).toEqual("Object with id =" + id + ", has been deleted.");
      }
    });
    const mockHttpRequest = httpCtrl.expectOne({ method: 'DELETE', url: 'https://api.restful-api.dev/objects/' + id });
    mockHttpRequest.flush({ "message": "Object with id =" + id + ", has been deleted." });
  });
});
