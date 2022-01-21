import { createElements, appendChildren, addClasses } from "./utilities";
import $ from "jquery";
function createTask(taskContent = null) {
  const [task, taskText, taskOptions] = createElements("li", "div", "div");
  const accessibilityIcons = createElements("i", "i", "i", "i");
  const accessibilityButtons = createElements(
    "button",
    "button",
    "button",
    "button"
  );

  // add classes
  $(accessibilityButtons[3]).addClass("button--drag");
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
  taskText.contentEditable = true;
  taskContent !== null
    ? $(taskText).text(taskContent)
    : $(taskText).attr("placeholder", "Type something...");

  // append
  accessibilityButtons.forEach((button, i) =>
    $(button).append(accessibilityIcons[i])
  );
  appendChildren(taskOptions, accessibilityButtons);
  appendChildren(task, [taskText, taskOptions]);

  // Events
  // remove task
  $(accessibilityButtons[0]).on("click", () => {
    $(task).fadeOut(800, () => $(task).remove());
  });
  // move task up
  $(accessibilityButtons[1]).on("click", () => {
    // TODO: move task to the next columnTask when the task is in the first position
    $(task).insertBefore($(task).prev());
  });
  // move task down
  $(accessibilityButtons[2]).on("click", () => {
    // TODO: move task to the next columnTask when the task is in the last position
    $(task).insertAfter($(task).next());
  });

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
