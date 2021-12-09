const generate = document.getElementById("generate");
const designSystem = document.getElementById("designSystem");
const colors = document.getElementById("colors");
const [primary, secondary, grays, state] = colors.children;
const typography = document.getElementById("typography");
const spacing = document.getElementById("spacing");



/*
 Response from the API is a JSON object with the following structure:
{
    hex: "#CCFB7B",
    rgb: "rgb(204, 251, 123)",
    hsl: "hsl(82, 51%, 98%)"
}
*/

async function getRandomColors(range = 1) {
  let data;
  if (typeof range != "number") {
    return console.error("Range must be a number");
  }

  if (range <= 1) {
    const url = `https://x-colors.herokuapp.com/api/random`;
    const response = await fetch(url);
    data = await response.json();
  } else {
    const url = `https://x-colors.herokuapp.com/api/random?number=${range}`;
    const response = await fetch(url);
    data = await response.json();
  }
  return data;
}

// funciones que no use, pero que puedo usar mas adelante
// async function setBgColor(element, format, colorToApply) {
//   const color = colorToApply ?? (await getRandomColors());
//   if (format === "hex" || format === "rgb" || format === "hsl") {
//     element.style.backgroundColor =
//       typeof color == "object" ? color[format] : color;
//   } else {
//     element.style.backgroundColor =
//       typeof color == "object" ? color?.hex ?? color?.rgb ?? color?.hsl : color;
//   }
// }

// async function setColor(element, format, colorToApply) {
//   const color = colorToApply ?? (await getRandomColors());
//   if (format === "hex" || format === "rgb" || format === "hsl") {
//     element.style.color = typeof color == "object" ? color[format] : color;
//   } else {
//     element.style.color =
//       typeof color == "object" ? color?.hex ?? color?.rgb ?? color?.hsl : color;
//   }
// }

function ColorValues(colors) {
  const column = document.createElement("div");
  column.style.backgroundColor = colors.hex;
  column.classList.add("space-y-2", "text-xl","p-2","w-96","rounded");

  for (const [format, color] of Object.entries(colors)) {
    const row = document.createElement("div");
    const colorValue = document.createElement("span");
    const icon = document.createElement("i");
    const img = document.createElement("img");

    // add styles & attributes
    row.classList.add("opacity-5","hover:opacity-100");

    icon.classList.add(
      "bg-gray-300",
      "h-6",
      "w-6",
      "rounded",
      "ml-2",
      "px-2",
      "cursor-pointer"
    );
    colorValue.classList.add("text-gray-900", "font-bold", "text-xl");
    icon.classList.add("transition", "duration-150","inline-flex","items-center","justify-center","cursor-pointer","w-8","rounded-full", "px-2");
    img.src = "./assets/clipboard-outline.svg";
    colorValue.innerText = color;

    // Copiar valores de los colores
    icon.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      icon.classList.remove("bg-gray-300");
      icon.classList.add("bg-green-300");

      setTimeout(() => {
        icon.classList.remove("bg-green-300");
        icon.classList.add("bg-gray-300");
      }, 600);
    });

    // add elements
    icon.appendChild(img);
    row.appendChild(colorValue);
    row.appendChild(icon);
    column.appendChild(row);
  }
  return column;
}

generate.addEventListener("click", async () => {
  const rangeColors = parseInt(document.getElementById("range-colors").value);
  const colors = await getRandomColors(rangeColors);

  if (Array.isArray(colors)) {
    colors.forEach((color) => {
      const column = ColorValues(color);
      primary.appendChild(column);
    });
  } else {
    const column = ColorValues(colors);
    primary.appendChild(column);
  }
});
