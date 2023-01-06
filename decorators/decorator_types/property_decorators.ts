function propertyDec(target: any, propertyName: string) {
  console.log(`target : ${target}`);
  console.log(`target.constructor : ${target.constructor}`);
  console.log(`propertyName : ${propertyName}`);
}

class ClassWithPropertyDec {
  @propertyDec
  nameProperty: string | undefined = 'a';
}