import $ from "jquery";

// drag task

function startDrag(e) {
  e.originalEvent.dataTransfer.setData(
    "text/plain",
    e.target.dataset.taskTarget
  );
}

// dropzone (column-tasks)
function onDragOver() {
  return false;
  // event.preventDefault();
  // event.stopPropagation();
}

function onDrop(event) {
  event.preventDefault();
  const id = event.originalEvent.dataTransfer.getData("text");
  const task = $(`#${id}`);
  const columnTasks = $(event.target);
  columnTasks.append(task);

  event.originalEvent.dataTransfer.clearData();
}
export { startDrag, onDragOver, onDrop };
