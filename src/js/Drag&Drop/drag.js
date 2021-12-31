// drag task

function startDrag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

// dropzone (column-tasks)
function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const task = document.getElementById(id);
  const columnTasks = event.target;
  columnTasks.appendChild(task);

  event.dataTransfer.clearData();
}
export { startDrag, onDragOver, onDrop };
