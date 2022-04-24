const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Iphone 13 PRO MAX",
    price: "5.549.000",
    colors: [
      {
        code: "black",
        img: "./img/iphone.png",
      },      
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S22 Ultra",
    price: "5.898.900",
    colors: [
      {
        code: "lightgray",
        img: "./img/samsung.png",
      },     
    ],
  },
  {
    id: 3,
    title: "Xiaomi Mi 11T Pro",
    price: "2.449.900",
    colors: [
      {
        code: "lightgray",
        img: "./img/xiaomi.png",
      },      
    ],
  },
  {
    id: 4,
    title: "Vivo X60 Pro 5G",
    price: "2.585.000",
    colors: [
      {
        code: "black",
        img: "./img/vivo.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Realme GT 2 Pro",
    price: "2.350.000",
    colors: [
      {
        code: "gray",
        img: "./img/realme.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //cambiar entre los productos
    choosenProduct = products[index];

    //cambiar texto entre los productos
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;    
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
