import $ from "jquery";

// drag task

function startDrag(event) {
  event.originalEvent.dataTransfer.setData("text/plain", event.target.id);
}

// dropzone (column-tasks)
function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.originalEvent.dataTransfer.getData("text");
  const task = $(`#${id}`);
  const columnTasks = $(event.target);
  columnTasks.append(task);

  event.originalEvent.dataTransfer.clearData();
}
export { startDrag, onDragOver, onDrop };
