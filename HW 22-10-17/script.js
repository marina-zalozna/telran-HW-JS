//         Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

//     То есть дефисы удаляются, а все слова после них получают заглавную букву.

//     Примеры:

//     camelize("background-color") == 'backgroundColor';
//     camelize("list-style-image") == 'listStyleImage';
//     camelize("-webkit-transition") == 'WebkitTransition';
//     P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.
function camelize(str) {
  var arr = str.split("-");
  for (var i = 1; i < arr.length; i++) {
    let word = arr[i];
    arr[i] = word[0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join("");
}
console.log(camelize("my-short-string"));

//     Задача: написать функцию, принимающую массив чисел
//     и возвращающую сумму всех его положительных элементов и отрицательных
//     чисел отдельно в виде нового массива

//     например функция принимает как аргумент следующий массив
//     arr = [1, -2, 3, 4, -9, 6]//     и должна вернуть [14, -11]

let arr = [1, -2, 3, 4, -9, 6];

let result= (arr)=> {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let result2 =arr=> {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let pushResult = [result(arr), result2(arr)];

console.log(pushResult);

// Можно было бы сделать короче, но вы поздно прислали и мне не хватило ночью времени!)))))
