import { IoCContainer, Register } from "./ioc-container";

interface IDepA {
  a: string;
  doA(): void;
}

interface IDepB {
  b: string;

  doB(): void;
}

interface IDepC {
  doC(): void;
}

@Register("IDepA", [])
class ConcreteA implements IDepA {
  a = "a";
  doA(): void {
    console.log(`Doing ${this.a}`);
  }
}
@Register("IDepB", [])
class ConcreteB implements IDepB {
  b = "b";

  doB(): void {
    console.log(`Doing ${this.b}`);
  }
}

@Register("IDepC", ["IDepA", "IDepB"])
class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log("Doing C");

  }
}

let container = IoCContainer.instance;

let c = container.resolve<IDepC>("IDepC");
c.doC();
