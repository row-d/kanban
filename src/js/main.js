import {
  saveBoard,
  resetBoard,
  generateRandomActivities,
} from "./Events/Board";
import { addColumn } from "./Column";
import getKanbanData from "./Events/window";
import $ from "jquery";
// Get elements
const kanban = $(".kanban");
const boardTitle = $(".board-title");
const [
  addColumnButton,
  resetBoardButton,
  saveBoardButton,
  generateRandomButton,
] = $(".kanbanOptions").find(".button").toArray();

// get data from local storage and render it
getKanbanData(kanban, boardTitle);

// add event listener to add column
addColumn(addColumnButton, kanban);

// add event listener to reset board and local storage
resetBoard(resetBoardButton, kanban, boardTitle);

// add event listener to save board on local storage
saveBoard(saveBoardButton, kanban, boardTitle);

// generate random activities
generateRandomActivities(generateRandomButton, kanban);
