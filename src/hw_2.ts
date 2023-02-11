// //**number */
// let num: number;

// num = 10;
// num = -10;
// num = 10.1;

// //**string */
// let str: string;

// str = 'string';

// let bool: boolean;

// bool = true;

// let person = 'Max';

// //**array */
// let arr: string[] = [];

// arr = ['str'];

// let arrNumber: number[] = [];

// arrNumber = [1, 2, 3];

// let arrAny: any[] = [];

// arrAny = [1, 2, 3, {}, 'str1', 'str2', 'str3'];

// let arrObject: { name: string }[];

// arrObject = [{ name: 'Alex' }, { name: 'Anton' }];

// //**object */
// let obj: { name: string }; // {}

// obj = { name: 'Alex' };

// obj.name;

// let db: {
//   id: number;
//   title: string;
//   info?: {
//     date: Date;
//     isNew?: boolean; // ? not neccessary
//   };
// };

// db = {
//   id: 1,
//   title: 'New product',
//   info: {
//     date: new Date(),
//     isNew: true,
//   },
// };

// //** any */
// let some: any;
// some = 1;
// some = 'string';
// some = {};

// let number: number;
// number = some;

// //**unknown */
// let something: unknown;

// something = 1;
// something = 'string';
// something = {};

// let string2: string;
// if (typeof something === 'string') {
//   string2 = something;
// }

// //**tuple */
// let fixed: [string, number];

// fixed = ['str', 1];
// fixed.push('new');
// fixed.pop();

// console.log('fixed: ', fixed);

// //**enum */
// enum Toggle {
//   ENABLE,
//   DISABLE,
// }
// const service = {
//   status: Toggle.ENABLE,
// };

// if (service.status === Toggle.ENABLE) {
//   console.log('It is active');
// }

// //**union type */
// let union: number | string | boolean;

// union = 10;
// union = 'string';
// union = true;

// function combine(param1: string | number, param2: string | number) {
//   if (typeof param1 === 'string' || param2 === 'string') {
//     return param1.toString() + param2.toString;
//   }
//   return +param1 + +param2;
// }

// console.log(combine('str1', 'str2'));

// //**literal type */
// let active: 'start' | 'end';
// active = 'start';

// const fruit: string[] = [];
// function workWithArr(arr: string[], value: string, action: 'add' | 'delete') {
//   if (action === 'add') {
//     arr.push(value);
//   } else {
//     const index = arr.indexOf(value);
//     arr.splice(index, 1);
//   }
//   return arr;
// }

// workWithArr(fruit, 'Banana', 'add');
// workWithArr(fruit, 'Melon', 'add');
// workWithArr(fruit, 'Pear', 'add');
// workWithArr(fruit, 'Bear', 'add');
// workWithArr(fruit, 'Bear', 'delete');

// console.log('fruit: ', fruit);

// //** return type: void, never */
// function print(): void {
//   console.log('Some log');
// }

// function combineTwoNumber(num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error('Some error');
// }

// function createServerPerson(name: string): { name: string } {
//   return eval(`
//   (()=> {
//     return {
//         name: '${name}'
//     }
// })()
// `);
// }

// function createPerson(name: string) {
//   return createServerPerson(name);
// }
// const persona = createPerson('Alex');
// console.log('persona: ', persona);

// //**function type */
// let foo: (param1: number, param2: string) => void;

// foo = (param1: number, param2: string) => {
//   console.log('Some text');
// };

// function culc(
//   num1: number,
//   num2: number,
//   callback: (arrg1: number, arrg2: number) => number
// ) {
//   return callback(num1, num2);
// }
// function foof(num1: number, num2: number) {
//   return num1 + num2;
// }
// const result = culc(1, 3, foof);

// console.log('result: ', result);

// //**custom types */
// type PersonType = {
//   readonly name: string;
//   age?: number;
//   showName: () => void;
// };

// const person1: PersonType = {
//   name: 'Alex',
//   age: 30,
//   showName() {
//     console.log(this.name);
//   },
// };

// const person2: PersonType = {
//   name: 'Max',
//   showName() {
//     console.log(this.name);
//   },
// };

// person1.showName();
// person2.showName();

// //**homework */
// let age: number;
// age = 50;

// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => {
//   return 100 + a;
// };

// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// let some: unknown;
// some = 'Text';
// let str: string;
// if (typeof some === 'string') {
//   str = some;
// }

// let person: [string, number];
// person = ['Max', 21];

// enum Load {
//   LOADING,
//   READY,
// }
// const page = { load: Load.READY };
// if (page.load === Load.LOADING) {
//   console.log('Page is loading...');
// }
// if (page.load === Load.READY) {
//   console.log('Page is ready!');
// }

// let union: string | number;
// union = 'str';
// union = 2;

// let literal: 'enable' | 'disable';
// literal = 'enable';

// function showMessage(message: string): void {
//   console.log(message);
// }
// function calc(num1: number, num2: number): number {
//   return num1 + num2;
// }
// function customError(): never {
//   throw new Error('Error');
// }

// type pageType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: 'open' | 'close';
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: pageType = {
//   title: 'The awesome page',
//   likes: 100,
//   accounts: ['Max', 'Anton', 'Nikita'],
//   status: 'open',
//   details: {
//     createAt: '2021-01-01',
//     updateAt: '2021-05-01',
//   },
// };

// const page2: pageType = {
//   title: 'Python or Js',
//   likes: 5,
//   accounts: ['Alex'],
//   status: 'close',
// };
