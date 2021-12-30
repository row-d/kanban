function saveBoard(button, kanban, boardTitle) {
  button.addEventListener("click", () => {
    const columns = kanban.querySelectorAll(".column");
    const columnsData = [];
    columns.forEach((column) => {
      const columnTitle = column.querySelector(
        ".column-header"
      ).value;
      const tasksTitles = [];
      column
        .querySelectorAll(".task-text")
        .forEach((task) => {
          tasksTitles.push(task.value);
        });
      columnsData.push({ columnTitle, tasksTitles });
    });
    localStorage.setItem(
      "kanban",
      JSON.stringify(columnsData)
    );
    localStorage.setItem("board-title", boardTitle.value);
  });
}

function resetBoard(element, kanban, boardTitle) {
  element.addEventListener("click", () => {
    if (
      window.confirm(
        "Are you sure you want to reset the board?"
      )
    ) {
      localStorage.clear();
      kanban.innerHTML = "";
      boardTitle.value = "Untitled";
    }
  });
}

export { saveBoard, resetBoard };
