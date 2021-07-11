function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class MiSuperClass {
  constructor(public miProperty: string = "123456789") {}
  imprimir() {
    console.log("What's up people");
  }
}

const myClass = new MiSuperClass();

console.log(myClass);
console.log(myClass.miProperty);
