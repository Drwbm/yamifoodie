// Yami Foody — site behavior
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('nav.links');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu after tapping a link
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
<script>

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
    price: "K95",
    image: "assets/pizza.jpg"
  },

  {
    name: "Fish & Chips",
    price: "K110",
    image: "assets/fish.jpg"
  },

  {
    name: "Pasta",
    price: "K80",
    image: "assets/pasta.jpg"
  },

  {
    name: "Rice & Beef",
    price: "K100",
    image: "assets/rice.jpg"
  }

];


let currentDish = 0;


/* Position dishes around circle */

function arrangeDishes() {

  const items =
    document.querySelectorAll(".food-item");

  const radius =
    window.innerWidth <= 600 ? 150 : 215;

  const total = items.length;

  items.forEach((item, index) => {

    const angle =
      (360 / total) * index - 90;

    const x =
      Math.cos(angle * Math.PI / 180) * radius;

    const y =
      Math.sin(angle * Math.PI / 180) * radius;

    item.style.transform =
      `translate(${x}px, ${y}px)`;

  });

}


/* Select dish */

function selectDish(index) {

  const difference =
    index - currentDish;

  currentDish = index;

  const dish = dishes[currentDish];

  document.getElementById("bigDish").src =
    dish.image;

  document.getElementById("bigDish").alt =
    dish.name;

  document.getElementById("dishName").textContent =
    dish.name;

  document.getElementById("dishPrice").textContent =
    dish.price;

  rotateCircle(difference);

}


/* Rotate clockwise */

function rotateCircle(steps) {

  const orbit =
    document.getElementById("foodOrbit");

  const rotation =
    -(steps * (360 / dishes.length));

  orbit.style.transform =
    `translate(-50%, -50%) rotate(${rotation}deg)`;

}


/* Next */

function nextDish() {

  let next =
    currentDish + 1;

  if (next >= dishes.length) {
    next = 0;
  }

  selectDish(next);

}


/* Previous */

function previousDish() {

  let previous =
    currentDish - 1;

  if (previous < 0) {
    previous = dishes.length - 1;
  }

  selectDish(previous);

}


/* Start */

arrangeDishes();


window.addEventListener(
  "resize",
  arrangeDishes
);

</script>
