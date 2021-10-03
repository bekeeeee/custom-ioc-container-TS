"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const ioc_container_1 = require("./ioc-container");
let ConcreteA = class ConcreteA {
    constructor() {
        this.a = "a";
    }
    doA() {
        console.log(`Doing ${this.a}`);
    }
};
ConcreteA = __decorate([
    ioc_container_1.Register("IDepA", [])
], ConcreteA);
let ConcreteB = class ConcreteB {
    constructor() {
        this.b = "b";
    }
    doB() {
        console.log(`Doing ${this.b}`);
    }
};
ConcreteB = __decorate([
    ioc_container_1.Register("IDepB", [])
], ConcreteB);
let ConcreteC = class ConcreteC {
    constructor(_concreteA, _concreteB) {
        this._concreteA = _concreteA;
        this._concreteB = _concreteB;
    }
    doC() {
        this._concreteA.doA();
        this._concreteB.doB();
        console.log("Doing C");
    }
};
ConcreteC = __decorate([
    ioc_container_1.Register("IDepC", ["IDepA", "IDepB"]),
    __metadata("design:paramtypes", [Object, Object])
], ConcreteC);
let container = ioc_container_1.IoCContainer.instance;
let c = container.resolve("IDepC");
c.doC();
