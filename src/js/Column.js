import { createElementsInElement } from "./utilities";
import { addTaskEvent, createTask } from "./Task";

function createColumn(
  columnTitle = "title",
  tasksTitles = null
) {
  const column = document.createElement("div");
  const title = document.createElement("textarea");
  const columnTasks = document.createElement("ul");

  const addTaskButton = createElementsInElement(
    [{ tag: "i", classNames: ["fas", "fa-plus"] }],
    "button"
  );

  // add classes
  column.dataset.columnName = columnTitle;
  column.classList.add("column");
  title.placeholder = columnTitle;
  title.classList.add("column-header");
  columnTasks.classList.add("column-tasks");
  addTaskButton.classList.add("addTask");

  // append
  column.appendChild(title);
  column.appendChild(columnTasks);
  column.appendChild(addTaskButton);

  if (tasksTitles !== null) {
    tasksTitles.forEach((taskTitle,i) => {
      const task = createTask(i,taskTitle);
      columnTasks.appendChild(task);
    });
  }

  return column.cloneNode(true);
}

function addColumn(element, kanban) {
  element.addEventListener("click", () => {
    const column = createColumn();
    addTaskEvent(column);
    kanban.appendChild(column);
  });
}

export { addColumn, createColumn };
