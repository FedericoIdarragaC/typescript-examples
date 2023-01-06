let myBool: boolean = true;
let myNum: number = 123;
let nyArray: string[] = ['first', 'second'];

enum DoorState {
  Open,
  Closed
}

function checkDoorState(state: DoorState) {
  console.log(`enum value is : ${state}`);
    switch (state) {
    case DoorState.Open:
      console.log(`Door is open`);
    break;
    case DoorState.Closed:
      console.log(`Door is closed`);
    break;
  }
}

checkDoorState(DoorState.Open)
checkDoorState(DoorState.Closed)

enum DoorStateString {
  OPEN = "Open",
  CLOSED = "Closed"
}
console.log(`OPEN = ${DoorStateString.OPEN}`);

let tupleOptional: [string, boolean?]
tupleOptional = ["test", true]
tupleOptional = ["test"]

let tupleRest: [number, ...string[]]
tupleRest = [1]
tupleRest = [1, 'string1']
tupleRest = [1, 'string1', 'string2']