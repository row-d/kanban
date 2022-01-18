import $ from "jquery";
import { createColumn } from "../Column";
import { addTaskEvent, createTask } from "../Task";
import { appendChildren } from "../utilities";

function saveBoard(activatorElement, kanban, boardTitle) {
  function saveOnLocalStorage() {
    const columns = $(kanban).find(".column").toArray();
    const columnsData = [];

    columns.forEach((column) => {
      const columnTitle = $(column).find(".column-header").text();
      const tasksTitles = [];
      $(column)
        .find(".task-text")
        .toArray()
        .forEach((task) => {
          tasksTitles.push($(task).text());
        });
      columnsData.push({ columnTitle, tasksTitles });
    });
    localStorage.setItem("kanban", JSON.stringify(columnsData));
    localStorage.setItem("board-title", $(boardTitle).text());
  }

  $(document).on("keydown", (e) => {
    if (e.ctrlKey && e.key == "s") {
      e.preventDefault();
      saveOnLocalStorage();
    }
  });

  $(activatorElement).on("click", saveOnLocalStorage);
}

function resetBoard(ActivatorElement, kanban, boardTitle) {
  $(ActivatorElement).on("click", () => {
    if (window.confirm("Are you sure you want to reset the board?")) {
      localStorage.clear();
      $(kanban).empty();
      $(boardTitle).text("");
    }
  });
}

function generateRandomActivities(activatorElement, kanban) {
  $(activatorElement).on("click", async (e) => {
    e.preventDefault();
    const todoCol = createColumn("To do");
    const todoTasks = $(todoCol).find(".column-tasks");
    const doingCol = createColumn("Doing");
    const doneCol = createColumn("Done");
    addTaskEvent(todoCol);
    addTaskEvent(doingCol);
    addTaskEvent(doneCol);
    appendChildren(kanban, [todoCol, doingCol, doneCol]);
    const size = 3;
    for (let i = 0; i < size; i++) {
      const data = await $.ajax({
        url: "https://www.boredapi.com/api/activity",
        type: "GET",
        dataType: "json",
      });
      const task = await createTask(data.activity);
      todoTasks.append(task);
    }
  });
}

export { generateRandomActivities, saveBoard, resetBoard };
