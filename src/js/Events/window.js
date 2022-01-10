import { createColumn } from "../Column";
import { addTaskEvent } from "../Task";
import $ from "jquery";
export default function getKanbanData(kanban, boardTitle) {
  const $kanban = $(kanban);
  const $boardTitle = $(boardTitle);
  $(() => {
    let kanbanStorage = localStorage.getItem("kanban");
    let titleStorage = localStorage.getItem("board-title");

    if (kanbanStorage != null && titleStorage != null) {
      $boardTitle.text(titleStorage);
      const kanbanData = JSON.parse(kanbanStorage);
      kanbanData.forEach(({ columnTitle, tasksTitles }) => {
        const column = createColumn(columnTitle, tasksTitles);
        addTaskEvent(column);
        $kanban.append(column);
      });
    }
  });
}
