const add_form = document.querySelector(".add_form");
const products = document.querySelector(".products");
const totalSum = document.querySelector(".totalSum");

const data = [];

add_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = add_form.title.value;
  const price = add_form.price.value;
  const amount = add_form.amount.value;
  data.push({ title, price, amount });
  add_form.title.value = "";
  add_form.price.value = "";
  add_form.amount.value = "";
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

    const divRef = document.createElement("div");
    const totalPrice = document.createElement("p");
    const totalAmount = document.createElement("p");

      
    totalPrice += price_p;
    totalAmount +=amount_p;

    divRef.append(totalPrice, totalAmount);

  });
}

