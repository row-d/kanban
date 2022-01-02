import { createColumn } from "../Column";
import { addTaskEvent } from "../Task";

export default function getKanbanData(kanban, boardTitle) {
  window.addEventListener("load", () => {
    let kanbanStorage = localStorage.getItem("kanban");
    let titleStorage = localStorage.getItem("board-title");

    if (kanban != null && titleStorage != null) {
      boardTitle.textContent = titleStorage;
      const kanbanData = JSON.parse(kanbanStorage);
      kanbanData.forEach(({ columnTitle, tasksTitles }) => {
        const column = createColumn(columnTitle, tasksTitles);
        addTaskEvent(column);
        kanban.appendChild(column);
      });
    }
  });
}
