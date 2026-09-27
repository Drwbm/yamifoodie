const dishes = [
  {
    name: "Chicken",
    price: "K85",
    image: "assets/chicken.jpg"
  },
  {
    name: "Burger",
    price: "K70",
    image: "assets/burger.jpg"
  },
  {
    name: "Pizza",
    price: "K90",
    image: "assets/pizza.jpg"
  },
  {
    name: "Fish",
    price: "K80",
    image: "assets/fish.jpg"
  },
  {
    name: "Pasta",
    price: "K75",
    image: "assets/pasta.jpg"
  },
  {
    name: "Rice",
    price: "K60",
    image: "assets/rice.jpg"
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
