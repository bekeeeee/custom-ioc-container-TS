"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_container_1 = require("./ioc-container");
var ConcreteA = /** @class */ (function () {
    function ConcreteA() {
        this.a = "a";
    }
    ConcreteA.prototype.doA = function () {
        console.log("Doing " + this.a);
    };
    return ConcreteA;
}());
var ConcreteB = /** @class */ (function () {
    function ConcreteB() {
        this.b = "b";
    }
    ConcreteB.prototype.doB = function () {
        console.log("Doing " + this.b);
    };
    return ConcreteB;
}());
var ConcreteC = /** @class */ (function () {
    function ConcreteC(_concreteA, _concreteB) {
        this._concreteA = _concreteA;
        this._concreteB = _concreteB;
    }
    ConcreteC.prototype.doC = function () {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log("Doing C");
    };
    return ConcreteC;
}());
var container = ioc_container_1.IoCContainer.instance;
container.register("IDepA", [], ConcreteA);
container.register("IDepB", [], ConcreteB);
container.register("IDepC", ["IDepA", "IDepB"], ConcreteC);
var c = container.resolve("IDepC");
c.doC();
