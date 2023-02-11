// class House {
//   private type: string;
//   private street: string;
//   private tenants: string[] = [];

//   constructor(t: string, n: string) {
//     this.street = n;
//     this.type = t;
//   }
//**or */

//   private tenants: string[] = [];
//   constructor(public readonly type: string, protected street: string) {}

//   public showAddress(this: House): void {
//     console.log('Address: ' + this.street);
//   }
//   public showType(this: House): void {
//     console.log('Type: ' + this.type);
//   }

//   public addTenant(name: string) {
//     this.tenants.push(name);
//   }
//   public showTenant(): void {
//     console.log('Tenants: ', this.tenants);
//   }
// }

// const house = new House('wood', 'Middle-earth');
// house.addTenant('Max');
// house.addTenant('Anton');
// house.addTenant('Nikita');

// house.showAddress();
// house.showTenant();
// console.log('House type: ', house.type);

// class StoneHouse extends House {
//   chargeOfTheHouse: string;
//   constructor(street: string, general: string) {
//     super('stone', street);
//     this.chargeOfTheHouse = general;
//   }

//   public showAddress(): void {
//     console.log('Address: ' + this.street);
//   }

//   public showTenant(): void {
//     console.log('General: ' + this.chargeOfTheHouse);
//     super.showTenant();
//   }
// }

// const stoneHouse = new StoneHouse('Stone-World', 'Max');
// stoneHouse.addTenant('Anton');
// stoneHouse.addTenant('Nikita');

// stoneHouse.showTenant();
// stoneHouse.showAddress();

//** */

// class UseStatic {
//   private static count: number = 0;

//   constructor() {
//     UseStatic.count += 1;
//   }

//   public static isStaticMethod() {
//     console.log("I'm static");
//   }

//   public showCount() {
//     console.log('UseStatic count: ', UseStatic.count);
//   }
// }

// const obj1 = new UseStatic();
// const obj2 = new UseStatic();
// const obj3 = new UseStatic();

// obj1.showCount();
// obj2.showCount();
// obj3.showCount();

// UseStatic.isStaticMethod();

// function count() {}
// function substringCustom() {}

// class MyLib {
//   public static count() {}
//   public static substringCustom() {}
// }
// MyLib.count();
// MyLib.substringCustom();

//**abstract class */

// abstract class Plane {
//   protected pilotInCabin = false;
//   public sitInPlane() {
//     this.pilotInCabin = true;
//   }
//   public abstract startEngine(): string;
// }
// class Maize extends Plane {
//   public startEngine() {
//     return 'Ta-ta-ta';
//   }
// }
// class Boeing extends Plane {
//   public startEngine() {
//     return 'Buuuuuu';
//   }
// }

// const maize = new Maize();
// const boeing = new Boeing();

// maize.sitInPlane();
// boeing.sitInPlane();

// console.log(maize.startEngine());
// console.log(boeing.startEngine());

//** Interface*/

// type IPerson = {
//   readonly name: string;
//   age: number;

//   greet: (phrase: string) => void;
// };
//**or */
// interface IPerson {
//   readonly name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// interface IPilot extends IPerson {
//   flyMessage(): void;
// }
//**or */
// interface IPilot {
//   flyMessage(): void;
// }

// class Pilot implements IPerson, IPilot {
//   constructor(public readonly name: string, public age: number) {
//     this.checkAge();
//   }
//   private checkAge() {
//     if (this.age < 28) {
//       throw new Error('Pilot is too young!');
//     }
//   }

//   public greet(phrase: string): void {
//     console.log(phrase + ' ' + this.name);
//   }

//   public flyMessage(): void {
//     console.log('Plane has done hight 10000 metres now, enjoy flight!');
//   }
// }

// abstract class Plane {
//   protected pilot?: IPilot;
//   public sitInPlane(pilot: IPilot) {
//     this.pilot = pilot;
//   }
//   public abstract startEngine(): boolean;
// }

// class Boeing extends Plane {
//   public startEngine() {
//     if (!this.pilot) {
//       throw new Error('Pilot is absent!');
//     }

//     console.log('Start engines');

//     this.pilot.flyMessage();

//     return true;
//   }
// }

// class Terrorist implements IPilot {
//   bluff(phrase: string) {
//     console.log(phrase);
//   }
//   public flyMessage(): void {
//     console.log('We need 1 millions dollars!');
//   }
// }

// const boeing = new Boeing();
// const pilot = new Terrorist();

// boeing.sitInPlane(pilot);
// pilot.bluff('We hijack this plane!');
// boeing.startEngine();
// const pilot = new Pilot('Max', 32);

// pilot.greet('Hello, Im captain of this plane');

// boeing.sitInPlane(pilot);

// boeing.startEngine();

// let user: IPerson;
// user = {
//   name: 'Max',
//   age: 21,

//   greet(phrase: string) {
//     console.log(phrase + ' ' + this.name);
//   },
// };

// user.greet("Hi, I'm ");

//**interface as a type of function */
// type AddFunc = (n1: number, n2: number) => number;
//**or */
// interface AddFunc {
//   (n1: number, n2: number): number;
// }

// const foo: AddFunc = (n1: number, n2: number) => {
//   return n1 + n2;
// };

//**practice */

class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error('Door is close');
    }
    this.tenants.push(person);
    console.log('Person inside');
  }
  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error('Key to another door');
    }
    return (this.door = true);
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);
