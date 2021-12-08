import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from './logger.service';

fdescribe('CalculatorService', () => {
  // let calculator: CalculatorService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(CalculatorService);
  // });

  it('should add two numbers', () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
  });

  it('should subtract two number', () => {
    const calculator = new CalculatorService(new LoggerService());
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
  });
});
