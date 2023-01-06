function calculate(a: number, b: number, c:number): number {
  return (a*b)+c;
}

function printString(a: string): void {
  console.log(a)
}

function printObject(obj: string | number){
  console.log(`obj = ${obj}`)
}

function addWithTypeGuard(
  arg1: string | number,
  arg2: string | number
){
  if(typeof arg1 === "string"){
    return arg1 + arg2
  }
  if (typeof arg1 === "number" && typeof arg2 === "number") {
    return arg1 + arg2;
  }
  return arg1.toString() + arg2.toString();
}

type StringOrNumber = string | number;

function addWithTypeAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
){
  return arg1.toString() + arg2.toString()
}

function testNullOperands(a: number, b: number | null | undefined) {
  let addResult = a + (b ?? 0);
}

function concatValues(a: string, b?: string) {
  console.log(`a + b = ${a + b}`);
}
concatValues("first", "second");
concatValues("third");

function testArguments(...args: string[] | number[]) {
  for (let i in args) {
    console.log(`args[${i}] = ${args[i]}`);
  }
}
testArguments("1");
testArguments(10, 20);

function withCallbackArg(
  message: string,
  callbackFn: (text: string) => void
) {
  console.log(`withCallback called, message : ${message}`);
  callbackFn(`${message} from withCallback"`);
}