import { createElements, appendChildren, addClasses } from "./utilities";
import { startDrag } from "./Drag&Drop/drag";
import { v4 as uuidv4 } from "uuid";
import $ from "jquery";
function createTask(taskContent = "Task 🔖") {
  const [task, taskText, taskOptions] = createElements("li", "div", "div");
  const accessibilityIcons = createElements("i", "i", "i", "i");
  const accessibilityButtons = createElements(
    "button",
    "button",
    "button",
    "button"
  );

  // add classes
  addClasses(
    [task, taskText, taskOptions],
    ["task", "task-text", "taskOptions"]
  );
  addClasses(accessibilityIcons, [
    ["fas", "fa-trash-alt"],
    ["fas", "fa-caret-up"],
    ["fas", "fa-caret-down"],
    ["fas", "fa-grip-vertical"],
  ]);

  // properties
  accessibilityButtons[3].draggable = true;
  task.id = uuidv4();
  accessibilityButtons[3].dataset.taskTarget = task.id;
  taskText.contentEditable = true;
  taskText.textContent = taskContent;

  // append
  accessibilityButtons.forEach((button, i) =>
    $(button).append(accessibilityIcons[i])
  );
  appendChildren(taskOptions, accessibilityButtons);
  appendChildren(task, [taskText, taskOptions]);

  // Events

  $(accessibilityButtons[0]).on("click", () => {
    $(task).remove();
  });
  $(accessibilityButtons[1]).on("click", () => {
    $(task).insertBefore($(task).prev());
  });
  $(accessibilityButtons[2]).on("click", () => {
    $(task).insertAfter($(task).next());
  });
  $(accessibilityButtons[3]).on("dragstart", startDrag);

  return task;
}

function addTaskEvent(column) {
  const addTaskButton = $(column).find(".addTask");

  $(addTaskButton).on("click", () => {
    const task = createTask();
    const columnTasks = $(column).find(".column-tasks");
    columnTasks.append($(task).hide().fadeIn(800));
  });
}

export { createTask, addTaskEvent };
