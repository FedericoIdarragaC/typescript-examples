"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function simpleDecorator(constructor) {
    console.log('simpleDecorator called');
}
function secondDecorator(constructor) {
    console.log('secondDecorator called');
}
let ClassWithSimpleDecorator = class ClassWithSimpleDecorator {
};
ClassWithSimpleDecorator = __decorate([
    simpleDecorator,
    secondDecorator
], ClassWithSimpleDecorator);
// let inst1 = new ClassWithSimpleDecorator()
// let inst2 = new ClassWithSimpleDecorator()
// console.log(`instance 1: ${JSON.stringify(inst1)}`)
// console.log(`instance 2: ${JSON.stringify(inst2)}`)
function classDecorator(constructor) { }
function propertyDecorator(target, propertyKey) { }
function methodDecorator(target, methodName, descriptor) { }
function parameterDecorator(target, methodName, parameterIndex) { }
let ClassWithAllTypesOfDecorators = class ClassWithAllTypesOfDecorators {
    constructor() {
        this.id = 1;
    }
    print() { }
    setId(id) { }
};
__decorate([
    propertyDecorator
], ClassWithAllTypesOfDecorators.prototype, "id", void 0);
__decorate([
    methodDecorator
], ClassWithAllTypesOfDecorators.prototype, "print", null);
__decorate([
    __param(0, parameterDecorator)
], ClassWithAllTypesOfDecorators.prototype, "setId", null);
ClassWithAllTypesOfDecorators = __decorate([
    classDecorator
], ClassWithAllTypesOfDecorators);
function decoratorFactory(name) {
    return (constructor) => {
        console.log(`decorator called with ${name} `);
    };
}
let ClassWithDecoratorFactory = class ClassWithDecoratorFactory {
};
ClassWithDecoratorFactory = __decorate([
    decoratorFactory('testName')
], ClassWithDecoratorFactory);
