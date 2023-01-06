interface IBase {
  id: string | number;
}

interface IDerivedFromBase extends IBase {
  id: number;
  name: string;
}
