// drag task

function startDragTask(event) {
  event.dataTransfer.setData("text/plain", event.target);
}

export { startDragTask };
