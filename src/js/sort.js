/**
 * @brief fetch random data from the API
 * @param {Number} size Means the lenght of products
 * @returns {Promise}
 */

async function getProducts(size) {
  const url = (size) =>
    `https://random-data-api.com/api/commerce/random_commerce?size=${size}`;
  const response = await fetch(url(size));
  const data = await response.json();
  return data;
}

/**
 *
 * @param {Array} data
 * @param {String} sortBy key to sort by
 */

function sortProducts(data, sortBy) {
  const sortedData = data.sort((a, b) =>
    a[sortBy] > b[sortBy] ? 1 : -1
  );
  return sortedData;
}

/**
 * @brief Create a table with the data and append it to the parent parameter
 * @param {Array} data
 * @param {Docume} parent
 *
 * @returns {DocumentType}
 */
function addTable(data, parent) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");
  table.classList.add("table", "w-full");
  thead.classList.add("table-row-group");

  data.forEach((product, i) => {
    const row = document.createElement("tr");
    const firstRow = document.createElement("tr");
    const iterableObject = Object.entries(product);
    if (i == 0) {
      // append row to table head
      firstRow.classList.add("table-row", "bg-gray-200");
      row.classList.add("bg-yellow-600");
      for (const [key, value] of iterableObject) {
        // const index = iterableObject.indexOf(key);
        // headers
        const cell = document.createElement("th");
        cell.classList.add("cursor-pointer", "table-cell");
        cell.innerHTML = key;
        row.appendChild(cell);

        // first row
        const datacell = document.createElement("td");
        datacell.classList.add("text-center");
        datacell.innerHTML = value;
        firstRow.appendChild(datacell);
      }
      thead.appendChild(row);
      tbody.appendChild(firstRow);
    } else {
      // append row to table body
      row.classList.add("table-row", "bg-gray-200");
      for (const [key, value] of iterableObject) {
        // eslint-disable-next-line no-unused-vars
        const cell = document.createElement("td");
        cell.classList.add("text-center");
        cell.innerHTML = value;
        row.appendChild(cell);
      }
      tbody.appendChild(row);
    }
  });
  // append tbody and thead to table
  table.appendChild(thead);
  table.appendChild(tbody);
  // append table to parent
  parent.appendChild(table);
  return table;
}

function makeSortableTable(table, data, parent) {
  const headers = table.querySelectorAll("th");
  headers.forEach((header, i) => {
    header.addEventListener("click", () => {
      const sortedData = sortProducts(
        data,
        header.innerHTML
      );
      table.remove();
      const newTable = addTable(sortedData, parent);
      makeSortableTable(newTable, sortedData, parent);
    });
  });
}

// Main function
// IIFE https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(async function () {
  const body = document.body;
  const data = await getProducts(
    parseInt(prompt("Cuantos productos quieres ver?"))
  );
  const table = addTable(data, body);
  makeSortableTable(table, data, body);
})();
