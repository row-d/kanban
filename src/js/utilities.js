// check if var is DOM element
function isDOM(obj) {
  return obj instanceof Element;
}
// check if string is html tag name
function isTag(str) {
  return (
    document.createElement(str).toString() != "[object HTMLUnknownElement]"
  );
}

/** Creates elements that are attached to a passed parent/new parent element
 *
 * @param {Array of Objects} elementsTag
 * @param {String} wrapperTag
 * @returns wrapper element
 */

function createElementsInElement(elementsTag, wrapperElement) {
  const wrapper = isTag(wrapperElement)
    ? document.createElement(wrapperElement)
    : wrapperElement;

  elementsTag.forEach(({ tag, classNames }) => {
    const element = document.createElement(tag);
    element.classList.add(...classNames);
    wrapper.appendChild(element);
  });
  return wrapper;
}

/** Appends child elements to a parent element
 *
 * @param {Array of HTMLElement} childs
 * @param {HTMLElement} parent
 */
function appendChilds(childs, parent) {
  childs.forEach((child) => {
    parent.appendChild(child);
  });
}

export { createElementsInElement, appendChilds, isDOM, isTag };
