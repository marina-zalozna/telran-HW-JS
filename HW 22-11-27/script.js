const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");
const totalSum = document.querySelector(".totalSum");


function write_local(data){
  localStorage.setItem('products', JSON.stringify(data));
}

// function read_local(){
//   return JSON.parse(localStorage.getItem('products')) ?? [];
// }

let data = [];

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const price = +event.target.price.value;
  const amount = +event.target.amount.value;
  data.push({ title, price, amount });

  write_local(data);
  event.target.title.value = "";
  event.target.price.value = "";
  event.target.amount.value = "";
  rerender();
});

function rerender() {
  products.innerText = "";
  data.forEach(({ title, price, amount }) => {
    const container = document.createElement("li");
    const title_p = document.createElement("p");
    const price_p = document.createElement("p");
    const amount_p = document.createElement("p");

    title_p.innerText = title;
    price_p.innerText = price;
    amount_p.innerText = `${price} x ${amount} = ${price * amount}`;

    container.append(title_p, price_p, amount_p);
    products.append(container);   
   
    totalSum.innerText = "";
    const divRef = document.createElement("div");
    const totalPrice = document.createElement("p");
    const totalAmount = document.createElement("p");
    totalPrice.innerText = `Общая стоимость: ${data.reduce((a, b) => a+ b.price * b.amount, 0)}`;
    totalAmount.innerText = `Общее количество: ${data.reduce((a, b) => a + b.amount, 0)}`;
    divRef.append(totalPrice, totalAmount);
    totalSum.append(divRef);
  });
}

rerender();