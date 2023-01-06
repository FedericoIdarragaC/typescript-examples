interface IIdName {
  id: number;
  name: string;
}

interface IDescrValue {
  descr: string;
  value: number;
}

function printNameOrValue(obj: IIdName | IDescrValue) {
  if('id' in obj){
    console.log(`obj.name : ${obj.name}`)
  }
  if('descr' in obj){
    console.log(`obj.value : ${obj.value}`)
  }
}

printNameOrValue({
  id: 1,
  name: "nameValue"
});
printNameOrValue({
  descr: "description",
  value: 2
});

type IdNameProperty = keyof IIdName
const property: IdNameProperty = 'id'