let $ = document;
let container = $.querySelector(".container");
let products = [
  {
    id: 1,
    name: "Men's Shoes",
    src: "img/shoes/2.jpg",
    price: "59$",
  },
  {
    id: 2,
    name: "Women's Shoes",
    src: "img/shoes/1.jpg",
    price: "74$",
  },
  {
    id: 3,
    name: "Kid's Shoes",
    src: "img/shoes/3.jpg",
    price: "99$",
  },
];


products.forEach((product) => {
  let mainProductDiv = container.insertAdjacentHTML(
    "afterbegin",
    `<div class="product">
        <h1> ${product.name}</h1>
        <small
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. At maiores
          dicta laudantium accusamus rerum corporis esse accusantium nostrum
          obcaecati tenetur.</small
        >
        <img src=${product.src} alt=${product.name} class="image"/>
        <div class="info">
          <h3>${product.price}</h3>
          <a href="product.html?id=${product.id}">See more</a>
        </div>
      </div>`,
  );
});