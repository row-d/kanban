import { createElements, appendChildren, addClasses } from "./utilities";
import { addTaskEvent, addRandomTaskEvent, createTask } from "./Task";
import { setDraggables } from "./Drag&Drop/drag";
import $ from "jquery";

function createColumn(columnTitle = null, tasksTitles = null) {
  const [column, title, columnTasks] = createElements("div", "div", "ul");

  const taskButtonWrapper = createElements("div");
  const [addTaskIcon, addTaskButton] = createElements("i", "button");
  const [addRandomTaskIcon, addRandomTaskButton] = createElements(
    "i",
    "button"
  );

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
      taskButtonWrapper,
      addTaskButton,
      addTaskIcon,
      removeColumnButton,
      removeColumnIcon,
      addRandomTaskButton,
      addRandomTaskIcon,
    ],
    [
      "column",
      "column-header",
      "column-tasks",
      "taskButtonWrapper",
      ["button", "button--addTask"],
      ["fas", "fa-plus"],
      "removeColumn",
      ["fas", "fa-trash-alt"],
      ["button", "button--addRandomTask"],
      ["fas", "fa-random"],
    ]
  );

  // properties
  title.contentEditable = true;
  $(title).text(columnTitle);
  $(title).attr("placeholder", "Untitled");

  // append
  $(addTaskButton).append(addTaskIcon);
  $(addRandomTaskButton).append(addRandomTaskIcon);
  $(removeColumnButton).append(removeColumnIcon);
  appendChildren(taskButtonWrapper, [addTaskButton, addRandomTaskButton]);
  appendChildren(column, [
    title,
    columnTasks,
    taskButtonWrapper,
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
    addRandomTaskEvent(column);
    $(kanban).append(column);
  });
}

export { addColumn, createColumn };
