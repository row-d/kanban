const dineroElement = document.getElementById("dinero");

let dinero;
do {
  dinero = parseInt(prompt("Ingresa el dinero"));
} while (isNaN(dinero) || dinero < 0);

dineroElement.textContent = dinero;

function Product({ id, name, price, quantity, imageSrc }) {
  // Creating DOM elements
  /*
    product
      image
      footer
        id title price stock
  */
  const productContainer = document.createElement("div");
  const footer = document.createElement("footer");
  const idTag = document.createElement("span");
  const title = document.createElement("span");
  const priceTag = document.createElement("span");
  const stock = document.createElement("span");

  // Adding attributes to DOM elements
  const image = document.createElement("img");
  image.src = imageSrc;

  idTag.textContent = `ID: ${id}`;
  title.textContent = `Name: ${name}`;
  priceTag.textContent = `Price:$${price}`;
  stock.textContent = `Stock: ${quantity}`;

  // Adding Tailwind classes to DOM elements
  productContainer.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "rounded",
    "cursor-pointer",
    "flex-grow",
    "overflow-hidden",
    "shadow"
  );

  image.classList.add("object-cover", "h-full", "w-full");
  idTag.classList.add(
    "text-center",
    "text-gray-700",
    "font-bold",
    "text-sm"
  );
  title.classList.add(
    "text-center",
    "text-gray-700",
    "font-bold",
    "text-sm"
  );
  priceTag.classList.add(
    "text-center",
    "text-green-400",
    "font-bold",
    "text-sm"
  );

  footer.classList.add(
    "flex",
    "flex-col",
    "gap-2",
    "bg-white",
    "w-full"
  );

  quantity == 0
    ? stock.classList.add("text-red-500")
    : stock.classList.add("text-blue-500");
  stock.classList.add(
    "text-center",
    "font-bold",
    "text-sm"
  );

  // append DOM elements
  footer.appendChild(idTag);
  footer.appendChild(title);
  footer.appendChild(priceTag);
  footer.appendChild(stock);
  productContainer.appendChild(image);
  productContainer.appendChild(footer);

  // function event to buy product
  function buy() {
    if (quantity <= 0) {
      quantity = 0;
      stock.classList.remove("text-blue-500");
      stock.classList.add("text-red-500");

      image.classList.add("filter", "grayscale");
      alert("Producto fuera de stock");
    } else if (dinero < price) {
      alert("No tienes suficiente dinero");
    } else {
      dinero = dinero - price;
      dineroElement.textContent = dinero;
      alert(`Compraste ${name}`);
      quantity--;
    }

    stock.textContent = `Stock: ${quantity}`;
  }
  // adding event listeners
  productContainer.addEventListener("click", buy);

  return productContainer;
}

async function VendingMachine(cantidadProductos) {
  const products = document.getElementById("products");

  for (let i = 0; i < cantidadProductos; i++) {
    await fetch(
      "https://random-data-api.com/api/food/random_food"
    )
      .then((response) => response.json())
      .then((data) => {
        const product = Product({
          id: data.id,
          name: data.dish,
          price: Math.floor(Math.random() * 100),
          quantity: Math.floor(Math.random() * 10),
          imageSrc: `https://picsum.photos/200/200/?random=${i}`,
        });

        products.appendChild(product);
      });
  }
}

VendingMachine(20);
