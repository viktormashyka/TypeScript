//**Function decorators*/
// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// function AddProperty() {
//   return function (constructor: Function) {
//     console.log('AddProperty');
//     constructor.prototype.modify = true;
//   };
// }

// @Logger('LOGGING - CONTROLLER')
// @AddProperty()
// class Controller {
//   public id = 1;
//   public modify = false;
// }

// const controller = new Controller();
// console.log('Is modify?', controller.modify);

//** */

// interface IDecoration {
//   parent: string;
//   template: string;
// }

// function ControllerDecoration(config: IDecoration) {
//   return function <T extends { new (...arg: any[]): { content: string } }>(
//     originalConstructor: T
//   ) {
//     return class extends originalConstructor {
//       private element: HTMLElement;
//       private parent: HTMLElement;
//       constructor(...args: any[]) {
//         super(...args);
//         this.parent = document.getElementById(config.parent)!;
//         this.element = document.createElement(config.template)!;

//         this.element.innerHTML = this.content;
//         this.parent.appendChild(this.element);
//       }
//     };
//     // const current = new constructor();
//     // const getParent = document.getElementById(config.parent)!;
//     // const createElement = document.createElement(config.template)!;
//     // createElement.innerHTML = current.content;
//     // constructor.prototype.element = createElement;
//     // constructor.prototype.parent = getParent;
//     // getParent.appendChild(createElement);
//   };
// }

// @ControllerDecoration({
//   parent: 'app',
//   template: 'H1',
// })
// class Controller {
//   public content = 'My controller';
// }

// const controller1 = new Controller();
// const controller2 = new Controller();
// const controller3 = new Controller();

//**Decoration of methods */
// function ShowParams(target: any, name: string, descriptor: PropertyDescriptor) {
//   console.log('target: ', target);
//   console.log('name: ', name);
//   console.log('descriptor: ', descriptor);
// }

// function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value as Function;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return method.bind(this);
//     },
//   };
// }

// class Notifier {
//   public content = 'Message in class';

//   @ShowParams
//   @AutoBind
//   showMessage() {
//     console.log(this.content);
//   }
// }

// const notifier = new Notifier();
// const showMessage = notifier.showMessage;

// notifier.showMessage();
// showMessage();

//** */
// function AddTax(taxPercent: number) {
//   return function (_: any, _2: string, descriptor: PropertyDescriptor) {
//     const method = descriptor.value as Function;

//     return {
//       configurable: true,
//       enumerable: false,
//       get() {
//         return (...args: any[]) => {
//           const result = method.apply(this, args);

//           return result + (result / 100) * taxPercent;
//         };
//       },
//     };
//   };
// }

// class Payment {
//   @AddTax(20)
//   pay(money: number) {
//     return money;
//   }
// }

// const payment = new Payment();

// console.log(payment.pay(100));

//**Parameter decorators */
// function CheckEmail(target: any, nameMethod: string, position: number) {
//   //   console.log('target: ', target);
//   //   console.log('nameMethod: ', nameMethod);
//   //   console.log('position: ', position);
//   if (!target[nameMethod].validation) {
//     target[nameMethod].validation = {};
//   }

//   Object.assign(target[nameMethod].validation, {
//     [position]: (value: string) => {
//       if (value.includes('@')) {
//         return value;
//       }
//       throw new Error('Not valid email');
//     },
//   });
// }

// function Validation(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const method = descriptor.value;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//       return (...args: any[]) => {
//         if (method.validation) {
//           args.forEach((item, index) => {
//             if (method.validation[index]) {
//               args[index] = method.validation[index](item);
//             }
//           });
//         }
//         return method.apply(this, args);
//       };
//     },
//   };
// }

// class Persona {
//   @Validation
//   setEmail(@CheckEmail email: string) {
//     console.log('email: ', email);
//   }
// }

// const persona = new Persona();

// persona.setEmail('test@test.com');

//**Property decorators */
interface IValidationConfig {
  [prop: string]: {
    [validationProp: string]: string[];
  };
}

const registerValidation: IValidationConfig = {};

function Required(target: any, propName: string) {
  console.log('target: ', target, 'propName: ', propName);
  registerValidation[target.constructor.name] = {
    ...registerValidation[target.constructor.name],
    [propName]: ['required'],
  };
}

function PositiveNumber(target: any, propName: string) {
  console.log('target: ', target, 'propName: ', propName);
  registerValidation[target.constructor.name] = {
    ...registerValidation[target.constructor.name],
    [propName]: ['positive'],
  };
}

function validation(obj: any) {
  const objValidation = registerValidation[obj.constructor.name];
  if (!objValidation) {
    return true;
  }

  let isValid = true;

  for (const prop in objValidation) {
    for (const validProp of objValidation[prop]) {
      switch (validProp) {
        case 'required':
          isValid = isValid && !!obj[prop];
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }

  return isValid;
}

class Person2 {
  @Required
  public name: string;
  @PositiveNumber
  public age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const person2 = new Person2('Max', 22);

if (!validation(person2)) {
  console.log('Not valid');
} else {
  console.log('Valid');
}
