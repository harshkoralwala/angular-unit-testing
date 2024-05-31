import { AppComponent } from "./app.component";

describe('AppComponent', () => { //test group
  it('should component initialized', () => {
    const component = new AppComponent(); //SAME CODE,Not good way
    expect(component).toBeTruthy();
  });

  // Testcase for add method
  it('should return 10', () => {
    const component = new AppComponent();//SAME CODE,Not good way
    const total = component.add(5, 5);
    expect(total).toEqual(10);
  });

  it('should return -5', () => {
    const component = new AppComponent(); //SAME CODE,Not good way
    const total = component.add(-10, 5);
    expect(total).toEqual(-5);
  });

  it('should return \'Invalid Numbers\'', () => {
    const component = new AppComponent(); //SAME CODE,Not good way
    const total = component.add(-10, "A");
    expect(total).toEqual("Invalid Numbers");
  });

  it('should return \'Invalid Numbers\' for Undefined Value', () => {
    const component = new AppComponent(); //SAME CODE,Not good way
    const total = component.add(undefined, "A");
    expect(total).toEqual("Invalid Numbers");
  });

});
