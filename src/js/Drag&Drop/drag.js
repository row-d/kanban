import Sortable from "sortablejs";
function setDraggables(columnTask) {
  new Sortable(columnTask, {
    handle: ".button--drag",
    filter: ".tasl-text",
    group: "shared",
    animation: 150,
  });
}

export { setDraggables };
