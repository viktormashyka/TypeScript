// let foo: string;
// let foo: number;
// let foo: object;
// let foo: boolean;
// let foo: null;
// let foo: underfind;
// let foo: [];

// foo = "str";
// foo = 12;

// console.log("foo: ", foo);

//type inference
// let bar = 42;
// bar = true;

// let foo: string[];
// let bar: number[];

// foo: ["str", "foo", 123];

// foo.push(12);

// console.log("foo: ", foo);

//function

// function customConcat(): string {
//   return 42;
// }

// function customConcat(arg1: string, arg2: string) {
//   if (Math.random() > 0.5) {
//     return 34;
//   }
//   return "string";
// }

// const result = customConcat();

// result.split();

// const foo 34 | string;

//union type
// let subscription: 'starter' | 'business' | 'pro';
// subscription = 'junior';

// if (typeof result === 'string') {
//     result.toLocaleLowerCase.split('');

// }

// type elias
// type TSubscription = "starter" | "business" | "pro";

// let foo: TSubscription;
// foo = "starter";

//tuple
// const arr: [string, number][]; // [['yulian', 22]]

// interface
// interface IPerson {
//   firstName: string;
//   lastName: string;
//   age: number;
//   getFullName?: () => void; // return nothing // ? is not neccessary
// }

// const person: IPerson = {
//   firstName: "Viktor",
//   lastName: "Mashyka",
//   age: 42,
//   //   getFullName() {
//   //     return this.name + this.lastName;
//   //   },
// };

//** class **//
// interface IPerson {
//   firstName: string;
//   lastName: string;
//   age: number;
//   //   getFullName?: () => void; // return nothing // ? is not neccessary
// }

// interface IPerson {
//   birthDate: Date;
// }

// interface ITutor {
//   isTutor: boolean;
//   course: string;
// }

// // class Person implements IPerson, ITutor {
// //   public firstName: string;
// //   public lastName: string;
// //   public age: number;
// //   public birthDate: Date;
// //   public isTutor: true;
// //   public course: string;
// //   private salary: number;

// //   constructor(
// //     firstName: string,
// //     lastName: string,
// //     age: number,
// //     birthDate: Date,
// //     isTutor: true,
// //     course: string,
// //     salary: number
// //   ) {
// //     this.firstName = firstName;
// //     this.lastName = lastName;
// //     this.age = age;
// //     this.birthDate = birthDate;
// //     this.isTutor = true;
// //     this.course = course;
// //     this.salary = salary;
// //   }
// // }

// class Person implements IPerson, ITutor {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public age: number,
//     public birthDate: Date,
//     public isTutor: boolean,
//     public course: string,
//     private salary: number
//   ) {}

//   protected getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// class Programmer extends Person {
//   constructor(
//     firstName: string,
//     lastName: string,
//     age: number,
//     birthDate: Date,
//     isTutor: boolean,
//     course: string,
//     salary: number
//   ) {
//     super(firstName, lastName, age, birthDate, isTutor, course, salary);
//   }

//   getSalary() {
//     return this.salary;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.getFullName()}`);
//   }
// }

// const person = new Person(
//   'Yulian',
//   'Khomechko',
//   22,
//   new Date('1/10/1981'),
//   true,
//   'node.js',
//   9999
// );

// console.log('person: ', person, 'person.salary: ', person.salary);

// person.getFullName();

// const programmer = new Programmer(
//   'Yulian',
//   'Khomechko',
//   22,
//   new Date('1/10/1981'),
//   true,
//   'node.js',
//   9999
// );

// programmer.greet();
