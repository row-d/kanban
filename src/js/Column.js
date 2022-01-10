import { createElements, appendChildren, addClasses } from "./utilities";
import { addTaskEvent, createTask } from "./Task";
import { onDragOver, onDrop } from "./Drag&Drop/drag";
import $ from "jquery";
function createColumn(columnTitle = "Untitled Column", tasksTitles = null) {
  const [column, title, columnTasks] = createElements("div", "div", "ul");
  const [addTaskIcon, addTaskButton] = createElements("i", "button");
  const [removeColumnIcon, removeColumnButton] = createElements("i", "button");

  if (tasksTitles !== null) {
    tasksTitles.forEach((taskTitle) => {
      const task = createTask(taskTitle);
      $(columnTasks).append(task);
    });
  }

  // add classes
  addClasses(
    [
      column,
      title,
      columnTasks,
      addTaskButton,
      addTaskIcon,
      removeColumnButton,
      removeColumnIcon,
    ],
    [
      "column",
      "column-header",
      "column-tasks",
      "addTask",
      ["fas", "fa-plus"],
      "removeColumn",
      ["fas", "fa-trash-alt"],
    ]
  );

  // properties
  title.contentEditable = true;
  title.textContent = columnTitle;

  // append
  $(addTaskButton).append(addTaskIcon);
  $(removeColumnButton).append(removeColumnIcon);
  appendChildren(column, [
    title,
    columnTasks,
    addTaskButton,
    removeColumnButton,
  ]);

  // Events
  $(columnTasks).on("dragover", onDragOver);
  $(columnTasks).on("drop", onDrop);
  $(removeColumnButton).on("click", () => {
    $(column).remove();
  });

  return column;
}

function addColumn(button, kanban) {
  $(button).on("click", () => {
    const column = createColumn();
    addTaskEvent(column);
    $(kanban).append(column);
  });
}

export { addColumn, createColumn };
