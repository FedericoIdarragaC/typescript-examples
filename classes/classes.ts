class SimpleClass {
  id: number | undefined;
  print(): void {
    console.log(`SimpleClass.id = ${this.id}`)
  }
}

let mySimpleClass = new SimpleClass()
mySimpleClass.id = 12
mySimpleClass.print()

interface IPrint {
  print(): void;
}

class ClassA implements IPrint {
  print(): void {
    console.log('Class A print')
  }
}

class ClassB implements IPrint {
  print(): void {
    console.log('Class B print')
  }
}

function printClass(a: IPrint) {
  a.print();
}

let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);

class SimpleClassWithConstructor {
  id: number;
  constructor(id: number){
    this.id = id;
  }
}

class ClassWithCtorMods {
  constructor(public id: number, private name: string) {
  }
}
let myClassMod = new ClassWithCtorMods(1, "test");
console.log(`myClassMod.id = ${myClassMod.id}`);
// console.log(`myClassMod.name = ${myClassMod.name}`);

class ClassWithAccessors {
  private _id: number = 0;
  get id(): number {
    console.log('get id')
    return this._id;
  }
  set id(value: number){
    console.log('set id')
    this._id = value;
  }
}

let classWithAccessors = new ClassWithAccessors();
classWithAccessors.id = 10;
console.log(`classWithAccessors.id = ${classWithAccessors.id}`);

class ClassWithStatic {
  static printTwo(){
    console.log('2')
  }
}

ClassWithStatic.printTwo()