const dishes = [
  {
    name: "Chicken",
    price: "K85",
    image: "assets/buttermilk-fried-chicken-recipe-2.jpg"
  },
  {
    name: "Burger",
    price: "K70",
    image: "assets/Cook-Burgers-on-the-Stove-FT24_277152_EC_0904_1-vert-social (1).jpg"
  },
  {
    name: "Pizza",
    price: "K75",
    image: "assets/file_00000000803081f4b27a0bf3429c9ba3.png"
  },
  {
    name: "Fish",
    price: "K90",
    image: "assets/file_000000008504820a8f257ec6b4bc5ac8.png"
  },
  {
    name: "Pasta",
    price: "K65",
    image: "assets/crockpot-spaghetti-8.jpg"
  },
  {
    name: "Rice",
    price: "K55",
    image: "assets/file_0000000026a081f4a61cba973984047a.png"
  },
  {
    name: "Nshima",
    price: "K80",
    image: "assets/file_0000000003c881f4be9b5f1772cff4ac.png"
  }
];

let currentDish = 0;


// =========================
// SELECT DISH
// =========================

function selectDish(index) {

  if (!dishes[index]) {
    console.error("Dish not found:", index);
    return;
  }

  currentDish = index;

  const dish = dishes[index];

  const bigDish = document.getElementById("bigDish");
  const dishName = document.getElementById("dishName");
  const dishPrice = document.getElementById("dishPrice");

  if (bigDish) {
    bigDish.src = dish.image;
    bigDish.alt = dish.name;
  }

  if (dishName) {
    dishName.textContent = dish.name;
  }

  if (dishPrice) {
    dishPrice.textContent = dish.price;
  }

  console.log("Selected:", dish.name);
}


// =========================
// NEXT DISH
// =========================

function nextDish() {

  currentDish++;

  if (currentDish >= dishes.length) {
    currentDish = 0;
  }

  selectDish(currentDish);
}


// =========================
// PREVIOUS DISH
// =========================

function previousDish() {

  currentDish--;

  if (currentDish < 0) {
    currentDish = dishes.length - 1;
  }

  selectDish(currentDish);
}


// =========================
// LOAD FIRST DISH
// =========================

document.addEventListener("DOMContentLoaded", function () {
  selectDish(0);
});
