import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logger: LoggerService) { }

  add(n1: number, n2: number){
    this.logger.log("addition operation called: ");
    return n1 + n2;
  }

  subtract(n1: number, n2: number){
    this.logger.log("subtraction operation called: ");
    return n1 - n2;
  }
}