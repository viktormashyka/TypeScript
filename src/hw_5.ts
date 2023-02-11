//**type */
// type Admin = {
//   name: string;
//   privileges: string[];
// };
// type User = {
//   name: string;
//   startDate: Date;
// };

// type AdminUser = Admin & User;

// const user: AdminUser = {};
//**or interface */
// interface Admin {
//   name: string;
//   privileges: string[];
// }
// interface User {
//   name: string;
//   startDate: Date;
// }

// interface AdminUser extends Admin, User {}
// const user: AdminUser = {};

// type ComplexType = string | number;
// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// type AdminOrUser = Admin | User;
// function shoeFields(el: AdminOrUser) {
//   if ('startDate' in el) {
//     console.log('el.startDate: ', el.startDate);
//   }
//   if ('privileges' in el) {
//     console.log('el.privileges: ', el.privileges);
//   }
//   console.log('el.name: ', el.name);
// }

//**Type Guards */
// abstract class Guy {
//   constructor(public name: string) {}
// }

// class Good extends Guy {
//   advice() {
//     console.log('advice');
//   }
// }

// class Bad extends Guy {
//   insult() {
//     console.log('insult');
//   }
// }

// const good = new Good('Jhon');
// const bad = new Bad('Seregay');

// function guys(user: Guy) {
//   if (user instanceof Good) {
//     user.advice();
//   }
//   if (user instanceof Bad) {
//     user.insult();
//   }
// }

// guys(good);
// guys(bad);

//**Type Casting */
// const input = <HTMLInputElement>document.getElementById('num1')!;

//or const input = <HTMLInputElement>document.getElementById('num1') as HTMLInputElement;
// input.value;

//**or */
// const input = <HTMLInputElement>document.getElementById('num1');
// if (input) {
//   (input as HTMLInputElement).value;
//   //**or */
// }
// if (input) {
//   (input as HTMLInputElement).value;
//   //**or */
//   const newInput = input as HTMLInputElement;
//   newInput.value;
// }

//**Index Properties */
// interface IPerson {
//   name: string;
//   age: number;
//   [x: string]: string | number; // any
// }

// const user: IPerson = {
//   age: 30,
//   name: 'Max',
//   gender: 'Man',
//   country: 'Ukraine',
// };

//**Optional Chaining */
// interface IPerson {
//   name: string;
//   additionInfo?: {
//     someInfo: string;
//   };
// }

// const user: IPerson = {
//   name: 'Max',
// };

// user?.additionInfo?.someInfo;

//**Nullish Coalescing */
// const userInput = '';

// const store = userInput || 'DEFAULT'; // DEFAULT
//**or */
// const store = userInput ?? 'DEFAULT'; // ''
// console.log('store: ', store);

//**function overload */
// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: string | number, b: string | number) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

//**Generics */
// let arr: number[] | string[];
// let arr: any[];
// let arr: Array<string | number>; // good!
// let arr: (string | number)[]; // good!
// arr = [1, 'str'];

// const promise: Promise<string> = new Promise((resolve) => {
//   resolve('String');
// });

// promise.then(() => {});

// (() => {
//   async function promiseFoo(): Promise<string> {
//     return 'String2';
//   }
//   promiseFoo().then((data) => {});
// })();

//**Generic function-method */
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// type Persona = {
//   name: string;
// };
// type AdditionFields = {
//   age: number;
// };

// const toMerge1 = {
//   name: 'Max',
// };
// const toMerge2 = {
//   age: 21,
// };

// // const merged = merge(toMerge1, toMerge2) as { name: string; age: number };
// const merged = merge<Persona, AdditionFields>(toMerge1, toMerge2);

// merged.name;

//**Extends */
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign({}, objA, objB);
// }

// const toMerge1 = {
//   name: 'Max',
// };
// const toMerge2 = {
//   age: 21,
// };

// const merged = merge(toMerge1, toMerge2);

// merged.name;

//** */
// interface IGetLength {
//   length: number;
// }

// function getLength<T extends IGetLength>(str: T): number {
//   return str.length;
// }

// const obj = {
//   length: 10,
// };

// getLength('any string'); // ['any string]
// getLength(obj);

//**keyof */
// function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key];
// }

// const field = extractValue({ name: 'Max' }, 'name');

//**generic Classes */
// class DataStore<T> {
//   private data: T[] = [];

//   addItem(item: T): void {
//     this.data.push(item);
//   }

//   getItems(): T[] {
//     return this.data;
//   }
// }

// interface IPerson {
//   name: string;
// }

// const storeUsers = new DataStore<IPerson>();

// storeUsers.addItem({
//   name: 'Max',
// });
// storeUsers.addItem({
//   name: 'Anton',
// });
// storeUsers.addItem({
//   name: 'Artur',
// });

// const result = storeUsers.getItems();

// console.log('result: ', result);

// const storeAges = new DataStore<number>();
// storeAges.addItem(21);
// storeAges.addItem(32);
// storeAges.addItem(42);

// const result2 = storeAges.getItems();

// console.log('result2: ', result2);

//**Utility Types - Partial */
// interface IUser {
//   name: string;
//   age: number;
// }

// function createPerson(name: string): IUser {
//   const person: Partial<IUser> = {
//     // better don't use this case, Partial cheat us
//     name,
//   };

//   //   person.age = 21;

//   return person as IUser;
// }

//**Readonly */
// const arr: Readonly<string[]> = ['One', 'Two', 'Three']; // you can't change array
// arr.push();
// arr.pop();

// interface IPerson {
//   name: string;
// }

// const obj: Readonly<IPerson> = {name: 'Max'};
// obj.name = ''; // you can't change name

//**Pick */
// interface IPage {
//   title: string;
//   annotation: string;
//   numberPage: number;
// }

// const pageAnnotation: Pick<IPage, 'annotation' | 'numberPage'> = {
//   annotation: 'Small page',
//   numberPage: 1,
// };

//**practice */
// // Promise<(string | number)[]>
// function getPromise(): Promise<Array<string | number>> {
//   return new Promise((resolve) => {
//     resolve(['Text', 50]);
//   });
// }

// getPromise().then((data) => {
//   console.log(data);
// });

// //** */

// type AllType = {
//   name: string;
//   position: number;
//   color: string;
//   weight: number;
// };

// function compare(
//   top: Pick<AllType, 'name' | 'color'>,
//   bottom: Pick<AllType, 'position' | 'weight'>
// ): AllType {
//   return {
//     name: top.name,
//     color: top.color,
//     position: bottom.position,
//     weight: bottom.weight,
//   };
// }

// //** */
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// //** */

// class Component<T> {
//   constructor(public props: T) {}
// }
// interface IProps {
//   title: string;
// }

// class Page extends Component<IProps> {
//   pageInfo() {
//     console.log('title: ', this.props.title);
//   }
// }

// const page = new Page({ title: 'Sherlock Holmes' });
// page.pageInfo();
