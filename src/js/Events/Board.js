import $ from "jquery";
function saveBoard(button, kanban, boardTitle) {
  function saveOnLocalStorage() {
    const columns = $(kanban).find(".column").toArray();
    const columnsData = [];

    columns.forEach((column) => {
      const columnTitle = $(column).find(".column-header").text();
      const tasksTitles = [];
      $(column).find(".task-text").toArray().forEach((task) => {
        tasksTitles.push(task.textContent);
      });
      columnsData.push({ columnTitle, tasksTitles });
    });
    localStorage.setItem("kanban", JSON.stringify(columnsData));
    localStorage.setItem("board-title", $(boardTitle).text());
  }

  $(document).on("keydown", (e) => {
    if (e.ctrlKey && e.key == "s") {
      e.preventDefault();
      saveOnLocalStorage();
    }
  });

  $(button).on("click", saveOnLocalStorage);
}

function resetBoard(element, kanban, boardTitle) {
  $(element).on("click", () => {
    if (window.confirm("Are you sure you want to reset the board?")) {
      localStorage.clear();
      $(kanban).empty();
      $(boardTitle).text("Untitled");
    }
  });
}

export { saveBoard, resetBoard };
