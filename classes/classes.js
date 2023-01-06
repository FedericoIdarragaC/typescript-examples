"use strict";
class SimpleClass {
    print() {
        console.log(`SimpleClass.id = ${this.id}`);
    }
}
let mySimpleClass = new SimpleClass();
mySimpleClass.id = 12;
mySimpleClass.print();
class ClassA {
    print() {
        console.log('Class A print');
    }
}
class ClassB {
    print() {
        console.log('Class B print');
    }
}
function printClass(a) {
    a.print();
}
let classA = new ClassA();
let classB = new ClassB();
printClass(classA);
printClass(classB);
