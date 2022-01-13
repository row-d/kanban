import { createColumn } from "../Column";
import { addTaskEvent } from "../Task";
import $ from "jquery";
export default function getKanbanData(kanban, boardTitle) {
  const $kanban = $(kanban);
  const $boardTitle = $(boardTitle);

  const kanbanStorage = localStorage.getItem("kanban");
  const titleStorage = localStorage.getItem("board-title");

  $(() => {
    if (kanbanStorage != null && titleStorage != null) {
      $boardTitle.text(titleStorage);
      $boardTitle.css({
        animation: `typing 2s steps(${titleStorage.length}), blink .5s infinite step-end alternate`,
        width: `${titleStorage.length}ch`,
      });
      const kanbanData = JSON.parse(kanbanStorage);
      kanbanData.forEach(({ columnTitle, tasksTitles }) => {
        const column = createColumn(columnTitle, tasksTitles);
        addTaskEvent(column);
        $kanban.append(column);
      });
    }
  });
}
