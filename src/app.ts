import { IoCContainer } from "./ioc-container";

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

class ConcreteA implements IDepA {
  a = "a";
  doA(): void {
    console.log(`Doing ${this.a}`);
  }
}

class ConcreteB implements IDepB {
  b = "b";

  doB(): void {
    console.log(`Doing ${this.b}`);
  }
}

class ConcreteC implements IDepC {
  constructor(private _concreteA: IDepA, private _concreteB: IDepB) {}

  doC(): void {
    this._concreteA.doA();
    this._concreteB.doB();
    console.log("Doing C");
  }
}

let container = IoCContainer.instance;
container.register("IDepA", [], ConcreteA);
container.register("IDepB", [], ConcreteB);
container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);

let c = container.resolve<IDepC>("IDepC");
c.doC();
