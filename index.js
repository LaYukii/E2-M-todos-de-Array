const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a)  Las pizzas que tengan un id impar.

console.log("a)  Las pizzas que tengan un id impar.");

const pizzasImpar = (arrayPizzas) => {
  console.log("Lista de pizzas impar:");
  arrayPizzas.forEach((element) => {
    if (element.id % 2 == 1) {
      console.log(element.nombre);
    }
  });
};

pizzasImpar(pizzas);

//b) Responder: ¿Hay alguna pizza que valga menos de $600?

console.log("b) Responder: ¿Hay alguna pizza que valga menos de $600?");

const pizzasBarata = (arrayPizzas) => {
  const pizzasBarata = arrayPizzas.find((element) => {
    return element.precio < 600;
  });
  if (pizzasBarata) {
    console.log("Si, hay una pizza menor a 600, es la: " + pizzasBarata.nombre);
  }
};

pizzasBarata(pizzas);

// c) El nombre de cada pizza con su respectivo precio.

console.log("c) El nombre de cada pizza con su respectivo precio.");

const pizzasPrecio = (arrayPizzas) => {
  arrayPizzas.forEach((element) => {
    console.log(
      "Nombre de pizza: " + element.nombre + ", precio: " + element.precio
    );
  });
};

pizzasPrecio(pizzas);

// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo).

console.log("d) Todos los ingredientes de cada pizza.");

pizzas.forEach(function (pizza) {
  console.log("Pizza: " + pizza.nombre);

  pizza.ingredientes.forEach(function (ingrediente) {
    console.log("  - " + ingrediente);
  });

  console.log("");
});
