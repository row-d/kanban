import { createElements, appendChildren, addClasses } from "./utilities";
import { addTaskEvent, createTask } from "./Task";
import { setDraggables } from "./Drag&Drop/drag";
import $ from "jquery";
function createColumn(columnTitle = null, tasksTitles = null) {
  const [column, title, columnTasks] = createElements("div", "div", "ul");
  const [addTaskIcon, addTaskButton] = createElements("i", "button");
  const [removeColumnIcon, removeColumnButton] = createElements("i", "button");

  if (tasksTitles !== null) {
    tasksTitles.forEach((taskTitle) => {
      const task = createTask(taskTitle);
      $(columnTasks).append($(task).show("slow"));
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
  $(title).text(columnTitle);
  $(title).attr("placeholder", "Untitled");

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
  setDraggables(columnTasks);
  $(removeColumnButton).on("click", () => {
    $(column).fadeOut(800, () => $(column).remove());
  });

  return $(column).hide().fadeIn(800);
}

function addColumn(button, kanban) {
  $(button).on("click", () => {
    const column = createColumn();
    addTaskEvent(column);
    $(kanban).append(column);
  });
}

export { addColumn, createColumn };
