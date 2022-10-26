// Напишите следующую функцию, которая принимает некий массив данных.

// если в массиве только строковый тип данных, то функция должна находить самую длинную строку и возвращать массив из двух элементов
//  - эту строку и её индекс исходном массиве

// если в массиве только цифры, то функция должна находить самую большую цифру и возвращать массив из двух элементов
//  - из этой цифры и её индекса в исходном массиве

// во всех остальных случаях (если там другие типы данных или же они смешаны), то функция должна возвращать массив из двух элементов
//  - первый это строка 'неверный тип данных в массиве', а второй элемент это общая длина массива.

// let array = ["cat", "mouse", "elefant"];
let array = [1, 7, 48, true];

let maxData = (arr) => {
  let maxElem = arr[0];
  let maxIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      (typeof i === "string" && arr[i].length > maxElem.length) ||
      (typeof i === "number" && arr[i].length > maxElem.length)
    ) {
      maxElem = arr[i];
      maxIndex = i;
    }
    return ["неверный тип данных в массиве", arr.length];
  }
  return [maxElem, maxIndex];
};

console.log(maxData(array));

// (Необязательная задача) Напишите функцию которая будет принимать три массива с любыми данными и объединять их в один,
//  новый массив и возвращать его. В зависимости от типа данных вы должны упорядочить данные. Сначала добавляйте только строки,
//  затем цифры, затем булевы значения, все остальные значения могут быть в произвольном порядке добавлены далее.

// Пример как должна работать функция.
// let result toHardThreeOrder(['привет', true, 65],[3, [], false], ['js', 'java', 'script', 'redButton'])
// console.log(result)// ['привет', js', 'java', 'script', 'redButton', 3, 65, true, false, []]
let one = ["привет", true, 65];
let two = [3, [], false];
let three = ["js", "java", "script", "redButton"];

function resultFilter(arr1, arr2, arr3) {
  let toHardThreeOrder = [].concat(one, two, three);

  let a = toHardThreeOrder.filter((n) => {
    return typeof n == "string";
  });

  let b = toHardThreeOrder.filter((n) => {
    return typeof n == "number";
  });

  let c = toHardThreeOrder.filter((n) => {
    return typeof n == "boolean";
  });

  let d = toHardThreeOrder.filter((n) => {
    return (
      typeof n !== "boolean" && typeof n !== "number" && typeof n !== "string"
    );
  });

  return [...a, ...b, ...c, ...d];
}

console.log(resultFilter(one, two, three));
