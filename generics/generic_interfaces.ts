interface IPrint {
  print(): void;
}

interface ILogInterface<T extends IPrint>{
  logToConsole(iPrintObject: T): void;
}

class LogClass<T extends IPrint> implements ILogInterface<T> {
  logToConsole(iPrintObject: T): void {
    iPrintObject.print();
  }
}

class ClassA {
}

function createClassInstance<T>
  (arg1: { new():T }): T 
{
  return new arg1();
}