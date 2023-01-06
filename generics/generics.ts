function printGeneric<T>(value:T){
  console.log(`typeof T: ${typeof value}`)
  console.log(`value: ${value}`)
}

// printGeneric(1);
// printGeneric("test");
// printGeneric(true);
// printGeneric(() => { });
// printGeneric({ id: 1 });

class Concatenator<T extends Array<string> | Array<number>>{
  public concatenateArray(items: T): string {
    let returnString = "";
    for (let i = 0; i < items.length; i++) {
      returnString += i > 0 ? "," : "";
      returnString += items[i].toString();
    }
    return returnString;
  }
}

let concator = new Concatenator();
let concatResult = concator.concatenateArray([
  "first", "second", "third"
]);
console.log(`concatResult = ${concatResult}`);

concatResult = concator.concatenateArray([
  1000, 2000, 3000
]);
console.log(`concatResult = ${concatResult}`);

function printProperty<T, K extends keyof T>(object: T, key: K){
  let propertyValue = object[key];
  console.log(`object[${String(key)}] = ${propertyValue}`);
}

let obj1 = {
  id: 1,
  name: "myName",
  print() { console.log(`${this.id}`) }
}
printProperty(obj1, "id");
printProperty(obj1, "name");
// printProperty(obj1, "surname");