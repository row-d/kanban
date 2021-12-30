import {
  createElementsInElement,
  appendChilds,
} from "./utilities";

function createTask(id, taskContent = "Task 🔖") {
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
  task.draggable = true;
  task.classList.add("task");
  task.id = id;
  taskText.classList.add("task-text");
  taskText.placeholder = taskContent;
  taskOptions.classList.add("taskOptions");

  // append
  appendChilds(
    [
      editButton,
      deleteButton,
      movePrevButton,
      moveNextButton,
    ],
    taskOptions
  );
  task.appendChild(taskText);
  task.appendChild(taskOptions);

  return task.cloneNode(true);
}

function addTaskEvent(column) {
  const addTaskButton = column.querySelector(".addTask");

  addTaskButton.addEventListener("click", () => {
    const task = createTask();
    const columnTasks =
      column.querySelector(".column-tasks");
    columnTasks.appendChild(task);
  });
}

export { createTask, addTaskEvent };
