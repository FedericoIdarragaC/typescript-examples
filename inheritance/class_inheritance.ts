class BaseClass implements IBase {
  id: number = 0;
}

class DerivedFromBaseClass 
extends BaseClass 
implements IDerivedFromBase {
  name: string = 'name';
}

class BaseClassWithCtor {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
}

class DerivedClassWithCtor extends BaseClassWithCtor {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }
}

abstract class EmployeeBase {
  constructor(public id: number, public name: string){
  }
}

class OfficeWorker extends EmployeeBase {}

class OfficeManager extends EmployeeBase {
  public employees: OfficeWorker[] = [];
}