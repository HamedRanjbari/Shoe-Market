let $ = document;
let minusDot = $.querySelector(".bi-dash-square-dotted");
let plusDot = $.querySelector(".bi-plus-square-dotted");
let plus = $.querySelector(".plus");
let minus = $.querySelector(".minus");
let backIcon = $.querySelector(".icon-back");
let orderInput = $.querySelector(".order-input");
let productTitle = $.getElementById("productTitle");
let productImg = $.getElementById("productImg");
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

// change icons
minusDot.addEventListener("mouseenter", () => {
  minusDot.classList.replace("bi-dash-square-dotted", "bi-dash-square-fill");
});
minusDot.addEventListener("mouseleave", () => {
  minusDot.classList.replace("bi-dash-square-fill", "bi-dash-square-dotted");
});
plusDot.addEventListener("mouseenter", () => {
  plusDot.classList.replace("bi-plus-square-dotted", "bi-plus-square-fill");
});
plusDot.addEventListener("mouseleave", () => {
  plusDot.classList.replace("bi-plus-square-fill", "bi-plus-square-dotted");
});

backIcon.addEventListener("click", () => {
  history.back(-1);
});
plus.addEventListener("click", () => {
  orderInput.value++;
});
minus.addEventListener("click", () => {
  if (orderInput.value <= 0) {
    orderInput.value = "";
  } else {
    orderInput.value--;
  }
});

let newSearch = new URLSearchParams(location.search);
let newId = newSearch.get("id");
let productId = products.find(function (product) {
    return product.id === Number(newId);
})

if (productId) {
    productTitle.innerHTML = productId.name
    productImg.src = productId.src
} else {
    location.href = "index.html";
}