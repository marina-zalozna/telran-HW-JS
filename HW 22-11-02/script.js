// Напишите функцию, которая поверхностно сравнивает два объекта.
// Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };

let compasionObj = (obj, obj2) => {
  let arr1 = Object.keys(obj);
  let arr2 = Object.keys(obj2);

  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; ++i) {
    // Ключи
    if (arr1[i][0] !== arr2[i][0]) {
      return false;
    }
    // Значения
    if (arr1[i][1] !== arr2[i][1]) {
      return false;
    }
  }

  return true;
};

console.log(compasionObj(data, data2));
