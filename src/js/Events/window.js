import { createColumn } from "../Column";
import { addTaskEvent } from "../Task";

export default function getKanbanData(kanban, boardTitle) {
  window.addEventListener("load", () => {
    if (localStorage.length > 0) {
      boardTitle.value =
        localStorage.getItem("board-title");
      const kanbanData = JSON.parse(
        localStorage.getItem("kanban")
      );
      kanbanData.forEach(({ columnTitle, tasksTitles }) => {
        const column = createColumn(
          columnTitle,
          tasksTitles 
        );
        // button to add task
        addTaskEvent(column);

        kanban.appendChild(column);
      });
    }
  });
}
