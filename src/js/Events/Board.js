function saveBoard(button, kanban, boardTitle) {
  function saveOnLocalStorage() {
    const columns = kanban.querySelectorAll(".column");
    const columnsData = [];

    columns.forEach((column) => {
      const columnTitle = column.querySelector(".column-header").value;
      const tasksTitles = [];
      column.querySelectorAll(".task-text").forEach((task) => {
        tasksTitles.push(task.textContent);
      });
      columnsData.push({ columnTitle, tasksTitles });
    });
    localStorage.setItem("kanban", JSON.stringify(columnsData));
    localStorage.setItem("board-title", boardTitle.textContent);
  }

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "s") {
      e.preventDefault();
      saveOnLocalStorage();
    }
  });

  button.addEventListener("click", saveOnLocalStorage);
}

function resetBoard(element, kanban, boardTitle) {
  element.addEventListener("click", () => {
    if (window.confirm("Are you sure you want to reset the board?")) {
      localStorage.clear();
      kanban.innerHTML = "";
      boardTitle.textContent = "Untitled";
    }
  });
}

export { saveBoard, resetBoard };
