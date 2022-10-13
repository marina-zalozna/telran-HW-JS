// FUNCTION DECLARATION


// function someValue(value) {
// 	if (typeof value === 'string')
// 		return value.length;
//     if (typeof value === 'number')
// 		return String(value).length;
//     if (typeof value === 'boolean')
// 		return String(value).length;
//     else return 'неверный тип данных';
// }

// FUNCTION EXPRESSION

// let someValue = function (value) {
// 	if (typeof value === 'string')
// 		return value.length;
//     if (typeof value === 'number')
// 		return String(value).length;
//     if (typeof value === 'boolean')
// 		return String(value).length;
//     else return 'неверный тип данных';
// }

// FUNCTION ARROW
const someValue = (value) => {
  if (typeof value === "string") return value.length;
  if (typeof value === "number") return String(value).length;
  if (typeof value === "boolean") return String(value).length;
  else return "неверный тип данных";
};

console.log(someValue(null));
