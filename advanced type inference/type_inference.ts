interface IAbRequired {
  a: number;
  b: number;
} 
 
type WeakInterface<T> = {
  [K in keyof T]?: T[K];
}

let allOptional: WeakInterface<IAbRequired> = {}

type PickCustom<T, P extends keyof T> = {
  [K in P]: T[K]
}

let obj1: PickCustom<IAbRequired, 'a' | 'b'> = { a:1, b:2 }

type RecordCustom<P extends keyof any, T> = {
  [K in P]: T
} 

type TypeAB = RecordCustom<'a' | 'b', string> & RecordCustom<'c', number>;

let objab: TypeAB = {
  a: 'a',
  b: 'b',
  c: 1
}

interface NoIdClient {
  name: string;
  email: string
}

interface IdClient {
  id: number;
  name: string;
  email: string
}

type WithId<T, K> = 'id' extends keyof T ? {
  [A in keyof T]: A extends 'id' ? K : T[A]
} : {
  id: K
} & T;

let obj: WithId<NoIdClient, number> = {
  id: 2,
  name: 'fede',
  email: 'email'
}

let obj2: WithId<IdClient, string> = {
  id: 'a',
  name: 'fede',
  email: 'email'
}

type inferFromProperty<T> =  
  T extends { id: infer U } ? U : never

let a: inferFromProperty<IdClient>

type inferFormFnParam<T> =
  T extends (a: infer U) => void ? U : never;

let t: inferFormFnParam<(a: number) => void>

type inferFormFnReturn<T> =
  T extends () => infer U ? U : never;

let ta: inferFormFnReturn<() => string>

type inferFromArray<T> = 
  T extends (infer U)[] ? U : never;

let arr: inferFromArray<string[]>

type ExcludeStringAndNumber = Exclude<
  string | number | boolean,
  string | number>;
let boolValue: ExcludeStringAndNumber = true;

type StringOrNumber = Extract<
  string | boolean | never,
  string | number>;
let stringValue: StringOrNumber = "test";