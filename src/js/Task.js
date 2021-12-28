import {
  createElementsInElement,
  appendChilds,
} from "./utilities";

export default function addTask(taskContent = "Task 🔖") {
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
