//*1
function dayOfWeek(dayNumber) {
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  if (dayNumber >= 1 && dayNumber <= 7) {
    return daysOfWeek[dayNumber - 1];
  } else {
    return "Некорректное значение. Введите число от 1 до 7.";
  }
}

console.log(dayOfWeek(1));
console.log(dayOfWeek(3));
console.log(dayOfWeek(7));
console.log(dayOfWeek(8));
//*2
let todos = [
  { id: 1, todo: "Принять душ", done: false },
  { id: 2, todo: "Завтрак", done: false },
  { id: 3, todo: "Пойти на работу", done: false },
  { id: 4, todo: "Приготовить ужин", done: false },
  { id: 5, todo: "Лечь спать", done: false },
];
function markTodoAsDone(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].done = true;
      break;
    }
  }
}
function addNewTodoItem(todoText) {
  const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
  const newTodoItem = { id: newId, todo: todoText, done: false };
  todos.push(newTodoItem);
}
markTodoAsDone(3);
addNewTodoItem("Приготовить обед");

console.log(todos);
//*3
let products = [
  {
    title: "Samsung",
    price: 1000,
    count: 3,
    color: ["black", "white", "blue"],
  },
  { title: "Xiaomi", price: 600, count: 0, color: [] },
  { title: "LG", price: 450, count: 5, color: ["black", "white"] },
  { title: "Sony", price: 700, count: 4, color: ["white", "yellow", "gray"] },
];

function purchaseProduct(title, color) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].title === title) {
      if (products[i].count > 0) {
        if (products[i].color.includes(color)) {
          console.log(`Цена на ${title} (${color}): ${products[i].price}`);
          console.log(
            "Вы собираетесь приобрести товар. Количество будет уменьшено на 1."
          );
          products[i].count--;
        } else {
          console.log(`Данный цвет (${color}) недоступен для товара ${title}.`);
        }
      } else {
        console.log(`Извините, товар ${title} временно отсутствует на складе.`);
      }
      return;
    }
  }
  console.log(`Товар с названием ${title} не найден.`);
}

purchaseProduct("Samsung", "black");
purchaseProduct("Xiaomi", "red");
purchaseProduct("Apple", "white");

//*4
let products = [
  { title: "Samsung S20", price: 1000 },
  { title: "Samsung A31", price: 200 },
  { title: "Samsung S10", price: 600 },
  { title: "Xiaomi Mi 10", price: 400 },
  { title: "Xiaomi Redmi 8", price: 300 },
  { title: "iPhone 13", price: 1100 },
  { title: "iPhone 11", price: 800 },
];

function filterProductsByPrice(minPrice, maxPrice) {
  const filteredProducts = products.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice
  );
  filteredProducts.forEach((product) => {
    console.log(`${product.title} - ${product.price}`);
  });
}

filterProductsByPrice(300, 600);
//*5
function Hero(name = "Герой", strength = 0, agility = 0, element = "") {
  this.name = name;
  this.strength = strength;
  this.agility = agility;
  this.element = element;
}

function calculateTotalPower(hero) {
  let totalPower = hero.strength;

  switch (hero.element) {
    case "огонь":
      totalPower += 20;
      break;
    case "воздух":
      totalPower += 15;
      break;
    case "вода":
      totalPower += 10;
      break;
    case "земля":
      totalPower += 5;
      break;
    default:
      break;
  }

  return totalPower;
}

function fight(hero1, hero2) {
  const hero1Power = calculateTotalPower(hero1);
  const hero2Power = calculateTotalPower(hero2);

  if (hero1Power > hero2Power) {
    console.log(`Победитель: ${hero1.name}`);
  } else if (hero1Power < hero2Power) {
    console.log(`Победитель: ${hero2.name}`);
  } else {
    console.log("Ничья");
  }
}

const hero1 = new Hero("Герой 1", 80, 90, "огонь");
const hero2 = new Hero("Герой 2", 70, 95, "вода");

fight(hero1, hero2);
