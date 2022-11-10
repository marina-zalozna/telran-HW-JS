// Подсчёт количества свойств объекта
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  return Object.keys(obj).length;
}
console.log(count(user)); // 2

// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {

  let max = 0;
  let maxName = null;

  for(const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}