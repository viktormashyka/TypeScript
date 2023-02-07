// let foo: string;
// let foo: number;
// let foo: object;
// let foo: boolean;
// let foo: null;
// let foo: underfind;
// let foo: [];
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// class Person implements IPerson, ITutor {
//   public firstName: string;
//   public lastName: string;
//   public age: number;
//   public birthDate: Date;
//   public isTutor: true;
//   public course: string;
//   private salary: number;
//   constructor(
//     firstName: string,
//     lastName: string,
//     age: number,
//     birthDate: Date,
//     isTutor: true,
//     course: string,
//     salary: number
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.birthDate = birthDate;
//     this.isTutor = true;
//     this.course = course;
//     this.salary = salary;
//   }
// }
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, birthDate, isTutor, course, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDate = birthDate;
        this.isTutor = isTutor;
        this.course = course;
        this.salary = salary;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, age, birthDate, isTutor, course, salary) {
        return _super.call(this, firstName, lastName, age, birthDate, isTutor, course, salary) || this;
    }
    Programmer.prototype.getSalary = function () {
        return this.salary;
    };
    Programmer.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.getFullName()));
    };
    return Programmer;
}(Person));
var person = new Person("Yulian", "Khomechko", 22, new Date("1/10/1981"), true, "node.js", 9999);
console.log("person: ", person, "person.salary: ", person.salary);
person.getFullName();
var programmer = new Programmer("Yulian", "Khomechko", 22, new Date("1/10/1981"), true, "node.js", 9999);
programmer.greet();
