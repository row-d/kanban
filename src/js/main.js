import { saveBoard, resetBoard } from "./Events/Board";
import { addColumn } from "./Column";
import getKanbanData from "./Events/window";

// Get elements
const kanban = document.querySelector(".kanban");
const boardTitle = document.querySelector(".board-title");
const addColumnButton = document.querySelector(".button");
const resetBoardButton = document.querySelector(
  ".button--warning"
);
const saveBoardButton =
  document.querySelector(".button--save");

// get data from local storage and render it
getKanbanData(kanban, boardTitle);

// add event listener to add column
addColumn(addColumnButton, kanban);

// add event listener to reset board and local storage
resetBoard(resetBoardButton, kanban, boardTitle);

// add event listener to save board on local storage
saveBoard(saveBoardButton, kanban, boardTitle);
