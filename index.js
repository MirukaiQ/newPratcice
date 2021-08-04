"use strict";
class MyArray {
  constructor(...argument) {
    this.length = 0;
    this.push(...argument);
  }
  static isMyArray(arg) {
    if (arg instanceof MyArray) {
      return true;
    }
    return false;
  }
  push(...rest) {
    for (let i = 0; i < rest.length; i++) {
      this[this.length++] = rest[i];
    }
  }
  pop() {
    const deleted = this[this.length - 1];
    delete this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }
    return deleted;
  }
  forEach(func) {
      for (let i = 0; i < this.length; i++) {func(this[i], i, this);
    }
  }
  map (func) {
    
  }
}

const array1 = new MyArray(15, 20, 40);

