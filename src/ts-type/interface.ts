// //interface:接口
// // --------------- javaScript存在的问题
// //1 TypeScript代码重构一
// const getUserInfo = (user: { name: string; age: number }): string => {
//   return `name: ${user.name} age: ${user.age}`;
// };
// //正确的调用
// console.log(getUserInfo({ name: "Jay", age: 24 }));
// //错误的调用
// // console.log({name:"Why"});  //错误信息: Property 'age' is missing in type '{name : string}'

// //另一种方式
// interface IUser {
//   name: string;
//   age: number;
// }
// const getUserInfoOther = (user: IUser): string => {
//   return `name: ${user.name} age: ${user.age}`;
// };

// console.log(getUserInfoOther({ name: "chen", age: 24 }));

// //对等的方式
// interface IPerson {
//   name: string;
//   age: number;
// }
// interface IPersonInfoFunc {
//   (user: IPerson): string;
// }
