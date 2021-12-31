import { createElementsInElement, appendChilds } from "./utilities";
import { startDrag } from "./Drag&Drop/drag";
import { v4 as uuidv4 } from "uuid";

function createTask(taskContent = "Task 🔖") {
  const task = document.createElement("li");
  const taskText = document.createElement("textarea");
  const taskOptions = document.createElement("div");
  const editButton = createElementsInElement(
    [
      {
        tag: "i",
        classNames: ["fas", "fa-edit"],
      },
    ],
    "div"
  );
  const deleteButton = createElementsInElement(
    [
      {
        tag: "i",
        classNames: ["fas", "fa-trash"],
      },
    ],
    "div"
  );
  const movePrevButton = createElementsInElement(
    [
      {
        tag: "i",
        classNames: ["fas", "fa-caret-up"],
      },
    ],
    "div"
  );
  const moveNextButton = createElementsInElement(
    [
      {
        tag: "i",
        classNames: ["fas", "fa-caret-down"],
      },
    ],
    "div"
  );

  // add classes
  task.classList.add("task");
  taskText.classList.add("task-text");
  taskOptions.classList.add("taskOptions");

  // properties
  task.draggable = true;
  task.id = uuidv4();
  taskText.value = taskContent;

  // start drag
  task.addEventListener("dragstart", startDrag);

  // append
  appendChilds(
    [editButton, deleteButton, movePrevButton, moveNextButton],
    taskOptions
  );
  task.appendChild(taskText);
  task.appendChild(taskOptions);

  return task;
}

function addTaskEvent(column) {
  const addTaskButton = column.querySelector(".addTask");

  addTaskButton.addEventListener("click", () => {
    const task = createTask();
    const columnTasks = column.querySelector(".column-tasks");
    columnTasks.appendChild(task);
  });
}

export { createTask, addTaskEvent };
