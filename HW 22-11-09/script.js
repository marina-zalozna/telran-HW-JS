// Создать две кнопки - одна из них блокирует input с помощью атрибута disabled, 
// а другая разблокирует.
// Заблокировать Разблокировать - 
// Какой-то текст! - input 

// const btn1Ref = document.querySelector('.btn1');
// const btn2Ref = document.querySelector('.btn2');
// const inputRef = document.querySelector('#input');

// btn1Ref.addEventListener('click', () => {
//   inputRef.disabled = true;
// })

// btn2Ref.addEventListener('click', () => {
//   inputRef.disabled = false;
// })


// Задача querySelectorAll
// Поменяйте содержимое абзацев на их порядковый номер в коде.
// Используйте перебор, индексы и textContent
// // 
// Заголовок, не поменяется.
// // 
// Абзац, поменяется.
// // 
// Абзац, поменяется.
// // 
// Абзац, поменяется.

const paragraph = document.querySelectorAll ('p');
for (let i = 0; i < paragraph.length; i++) {
  paragraph[i].textContent = i;
}
