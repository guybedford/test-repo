import { SubClass } from './subclass-module';

export class MyClass extends SubClass {
  constructor() {
    super();
    this.newMethod();
  }
  newMethod() {
  }
}
