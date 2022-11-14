// Создайте кнопку в html при нажатию на которую в консоль выводится "привет".

// const btnRef = document.querySelector(".button");
// btnRef.addEventListener('click', showHello);

// function showHello (event) {
//   console.log('Hello');
// }

// Создайте блок в html c картинкой и кнопку. При нажатии на кнопку блок с картинкой должен получать border-radius 50px и overflow hidden. 
// При нажатии второй раз на кнопку стили должны убираться и возвращаться к исходным. Реализуйте через classList.toggle()

const btnRef = document.querySelector(".button");
const divRef = document.querySelector(".block");

btnRef.addEventListener('click', showBlock);

function showBlock (event){
  divRef.classList.toggle('block');
}
