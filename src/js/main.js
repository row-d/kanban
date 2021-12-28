import createColumn from "./Column";
import addTask from "./Task";

const kanban = document.querySelector(".kanban");
const boardTitle = document.querySelector(".board-title");
const addColumnButton = document.querySelector(".button");
const resetBoardButton = document.querySelector(
  ".button--warning"
);
const saveBoardButton =
  document.querySelector(".button--save");

// get Columns
window.addEventListener("load", () => {
  if (localStorage.length > 0) {
    boardTitle.value = localStorage.getItem("board-title");
    const kanbanData = JSON.parse(
      localStorage.getItem("kanban")
    );
    kanbanData.forEach(({ columnTitle, tasksTitles }) => {
      const column = createColumn(columnTitle, tasksTitles);
      kanban.appendChild(column);
    });
  }
});

// add event listener
addColumnButton.addEventListener("click", () => {
  const column = createColumn();
  const addTaskButton = column.querySelector(".addTask");

  addTaskButton.addEventListener("click", () => {
    const task = addTask();
    const columnTasks =
      column.querySelector(".column-tasks");
    columnTasks.appendChild(task);
  });
  kanban.appendChild(column);
});

resetBoardButton.addEventListener("click", () => {
  if (
    window.confirm(
      "Are you sure you want to reset the board?"
    )
  ) {
    localStorage.clear();
    kanban.innerHTML = "";
  }
});

saveBoardButton.addEventListener("click", () => {
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
