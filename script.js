const products = [
  {
    name: "Camiseta",
    price: 29.99,
  },
  {
    name: "Calça Jeans",
    price: 59.99,
  },
  {
    name: "Sapatos",
    price: 59.99,
  },
  {
    name: "Vestido",
    price: 89.99,
  },
  {
    name: "Chapéu",
    price: 19.99,
  },
];

const ulItem = document.querySelector("ul");

const createElement = (array) => {
  const { name, price } = array;

  const liItem = document.createElement("li");
  const h3Item = document.createElement("h3");
  const pItem = document.createElement("p");
  const buttonItem = document.createElement("button");

  h3Item.innerHTML = name;
  pItem.innerHTML = `R$ ${price.toFixed(2)}`;
  buttonItem.innerHTML = "Adicionar ao carrinho";

  liItem.append(h3Item, pItem, buttonItem);

  return liItem;
};

const renderElement = (array) => {
  ulItem.innerHTML = "";

  array.forEach((element) => {
    const item = createElement(element);

    ulItem.appendChild(item);
  });
};

renderElement(products);
