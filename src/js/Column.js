import { createElementsInElement } from "./utilities";
import { addTaskEvent, createTask } from "./Task";
import { onDragOver, onDrop } from "./Drag&Drop/drag";

function createColumn(columnTitle = "Untitled Column", tasksTitles = null) {
  const column = document.createElement("div");
  const title = document.createElement("textarea");
  const columnTasks = document.createElement("ul");
  const addTaskButton = createElementsInElement(
    [{ tag: "i", classNames: ["fas", "fa-plus"] }],
    "button"
  );

  if (tasksTitles !== null) {
    tasksTitles.forEach((taskTitle) => {
      const task = createTask(taskTitle);
      columnTasks.appendChild(task);
    });
  }

  // add classes
  column.classList.add("column");
  title.classList.add("column-header");
  columnTasks.classList.add("column-tasks");
  addTaskButton.classList.add("addTask");

  // properties
  title.value = columnTitle;

  // dropzone
  columnTasks.addEventListener("dragover", onDragOver);
  columnTasks.addEventListener("drop", onDrop);

  // append
  column.appendChild(title);
  column.appendChild(columnTasks);
  column.appendChild(addTaskButton);

  return column;
}

function addColumn(button, kanban) {
  button.addEventListener("click", () => {
    const column = createColumn();
    addTaskEvent(column);
    kanban.appendChild(column);
  });
}

export { addColumn, createColumn };
