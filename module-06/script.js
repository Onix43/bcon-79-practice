//  Task 1
// const goods = new Goods("apple", 23.5);
// console.log(goods);

//  Task 2
// const goods = new Goods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods);
//  Task 3
// const goods = new Goods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods);
// // І тепер виведемо на сторінку
// document.querySelector(".out-3").append(goods.draw());
//  Task 4
// const goods1 = new Goods(
//   "banana",
//   30,
//   "https://media.istockphoto.com/id/157375066/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B0%D0%BD%D0%B0%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BE%D0%B1%D1%82%D1%80%D0%B0%D0%B2%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=zMuZzfvHkDjfe-JDrtovPlgkGklaqLhqVt9Sl1BJA_M=",
//   500
// );
// document.querySelector(".out-4").append(goods1.draw());

//  Task 5
// const goods2 = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400
// );
// console.log(goods2);
//  Task 6
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg",
//   400,
//   true
// );
// console.log(goods);
//  Task 7
// const goods = new InheriteGoods(
//   "apple",
//   23.5,
//   "https://cdn0.iconfinder.com/data/icons/fruity-3/512/Apple-48.png",
//   400,
//   true
// );
// console.log(goods);
// // І тепер виведемо на сторінку
// document.querySelector(".out-7").append(goods.draw());
//  Task 8
// const validate = new Valid("hello", 1234);
// console.log("🚀 ~ validate:", validate);

//  Task 9
// const validate = new Valid("hellnaw", "hiitooo");
// console.log(validate.validate());
// console.log("🚀 ~ validate:", validate);
//  Task 10
// const firstAccount = new Valid("test@ua.ua", "qwertyu");
// console.log(firstAccount.validate());
// console.log(firstAccount.isValid);

// const secondAccout = new Valid("test@ua.ua", "qwe");
// console.log(secondAccout.validate());
// console.log(secondAccout.isValid);
//  Task 11

//  Task 12
const account1 = new ExtendedValid("test@ua.ua", "qwertyu");
console.log(account1.validate());
console.log(account1.isValid);
console.log(account1.error_message);

const account2 = new ExtendedValid("test@ua.ua", "qwe");
console.log(account2.validate());
console.log(account2.isValid);
console.log(account2.error_message);

const account3 = new ExtendedValid("", "qwertyu");
console.log(account3.validate());
console.log(account3.isValid);
console.log(account3.error_message);
