// const tsInfo: [string, number, number] = ["why", 18, 1.88];
// const itemone = tsInfo[0]; //why，并且知道类型是string类型
// const itemtwo = tsInfo[1]; //18， 并且知道类型是number类型
// console.log(itemone, itemtwo);

// const aInfo: Array<string | number> = ["why", 18, 1.88];
// const itema = aInfo[0]; //why，但是不知道itema是string类型还是number类型
// console.log(itema);

// //---------------------------------------------------------------------
// // function getter(params: string) {
// //   return "Hello, " + params;
// // }
// // let user = "Jsonwhy";
// // document.body.innerHTML = getter(user);

// //---------------------------------------------------------------------
// // interface Person {
// //   firstName: string;
// //   lastName: string;
// // }
// // function person(person: Person) {
// //   return "Hello, " + person.firstName + " " + person.lastName;
// // }
// // let user = { firstName: "Json", lastName: "Jay" };
// // document.body.innerHTML = person(user);

// let a: any = "Jay";
// a = 123;
// a = true;
// console.log(a);
// const aArray: any[] = ["Jay", 18, 1222];
// console.log(aArray[0]);

// //----------------------------------------------------------------------
// const sum: (num1: number, num2: number) => number = (
//   num1: number,
//   num2: number
// ) => {
//   return num1 + num2;
// };
// console.log(sum(10, 10));

// //----------------------------------------------------------------------
// // void 类型表示没有任何类型 |  没有返回值的函数，其返回值类型为void
// // 申明为void 类型的变量，只能赋予underfind和null
// const sayHello: (name: string) => void = (name: string) => {
//   console.log("hello " + name);
// };
// sayHello("Jay");

// const loopFunc = () => {
//   while (true) {
//     console.log(123);
//   }
// };
// // console.log(loopFunc());

// const errFunc = () => {
//   //   throw new Error("函数发生错误");
// };
// console.log(errFunc());

// //交叉类型
// const info1 = {
//   name: "why",
//   age: 23,
// };
// const info2 = {
//   name: "Jay",
//   height: 24,
// };
// const newInfo = Object.assign(info1, info2);
// console.log(newInfo.height, newInfo.name);

// //============================================================
// interface IA {
//   name: string;
//   age: number;
//   sayHello: (name: string) => void;
// }
// interface IB {
//   name: string;
//   height: number;
//   run: () => void;
// }
// const abc: IA & IB = {
//   name: "Jay",
//   age: 18,
//   height: 1.88,
//   sayHello: (name: string) => {
//     console.log("Hello " + name);
//   },
//   run: () => {
//     console.log("running");
//   },
// };
// console.log(abc);

// //数组中的元素类型是联合类型中的一个
// const newArray: Array<string | number> = ["Jay", 18, 1.88];

// //定义一个对象,只要满足其中一个即可赋值
// const cba: IA | IB = {
//   name: "Jsy",
//   age: 24,
//   sayHello: (name: string) => {
//     console.log("Hello " + name);
//   },
// };
