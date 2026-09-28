
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
    image: "assets/nshima.jpg"
  }
];

let currentDish = 0;


// Show selected dish
function showDish(index) {
  currentDish = index;

  const dish = dishes[currentDish];

  document.getElementById("bigDish").src = dish.image;
  document.getElementById("bigDish").alt = dish.name;

  document.getElementById("dishName").textContent = dish.name;
  document.getElementById("dishPrice").textContent = dish.price;
}


// Select a dish by clicking its small image
function selectDish(index) {
  showDish(index);
}


// Next button
function nextDish() {
  currentDish++;

  if (currentDish >= dishes.length) {
    currentDish = 0;
  }

  showDish(currentDish);
}


// Previous button
function previousDish() {
  currentDish--;

  if (currentDish < 0) {
    currentDish = dishes.length - 1;
  }

  showDish(currentDish);
}


// Load Chicken when page opens
showDish(0);
