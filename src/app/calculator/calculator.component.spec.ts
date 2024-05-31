
import { CalculatorService } from './calculator.service';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let calc: CalculatorService;

  //You can write Object creation outside of beforeEach,if one test case has not impact on other test cases
  // let calc = new CalculatorService(); 
  // let component = new CalculatorComponent(calc);
  beforeEach(() => {
    calc = new CalculatorService();
    component = new CalculatorComponent(calc);
    console.log('CalculatorComponent ::: ', 'I will be called before each test-case')
  });

  // Testcase for subtract method
  it('should return 0', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(5, 5);
    expect(total).toEqual(0);
  });

  it('should return 5', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(10, 5);
    expect(total).toEqual(5);
  });

  it('should return -10', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(10, 20);
    expect(total).toEqual(-10);
  });


  it('should return Invalid Numbers', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(10, "A");
    expect(total).toEqual("Invalid Numbers");
  });

  it('should be grater than 1', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(5, 1);
    expect(total).toBeGreaterThanOrEqual(1)
  });

  it('should be less  than 5', () => {
    // const component = new CalculatorComponent();
    const total = component.subtract(2, 1);
    expect(total).toBeLessThan(5)
  });

  it('should Call Calculator Service\'s Subtract Method', () => {
    // const component = new CalculatorComponent();
    spyOn(calc, 'subtract');
    const total = component.subtract(2, 1);
    expect(calc.subtract).toHaveBeenCalledWith(2, 1)
  });

  it('should Change component variable value', () => {
    // const component = new CalculatorComponent();
    component.ngOnInit();
    expect(component.name).toEqual("Working")
  });
});
