function simpleDecorator(constructor: Function){
  console.log('simpleDecorator called')
}

function secondDecorator(constructor: Function){
  console.log('secondDecorator called')
}

@simpleDecorator
@secondDecorator
class ClassWithSimpleDecorator {

}

// let inst1 = new ClassWithSimpleDecorator()
// let inst2 = new ClassWithSimpleDecorator()

// console.log(`instance 1: ${JSON.stringify(inst1)}`)
// console.log(`instance 2: ${JSON.stringify(inst2)}`)

function classDecorator(
  constructor: Function) {}

function propertyDecorator(
  target: any,
  propertyKey: string) {}

function methodDecorator(
  target: any,
  methodName: string,
  descriptor?: PropertyDescriptor) {}

function parameterDecorator(
  target: any,
  methodName: string,
  parameterIndex: number) {}

@classDecorator
class ClassWithAllTypesOfDecorators {
  @propertyDecorator
  id: number = 1;

  @methodDecorator
  print() { }

  setId(@parameterDecorator id: number) { }
}

function decoratorFactory(name: string){
  return (constructor: Function) => {
    console.log(`decorator called with ${name} `)
  }
}

@decoratorFactory('testName')
class ClassWithDecoratorFactory {

}