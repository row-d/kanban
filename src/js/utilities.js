import $ from "jquery";

// check if var is DOM element
function isDOM(obj) {
  return obj instanceof Element;
}
// check if string is html tag name
function isTag(str) {
  try {
    document.createElement(str);
  } catch (e) {
    return false;
  }
  return true;
}

/** Creates elements according to the given tagName
 *
 * @param {String} elementTags
 * @returns HTMLElement/Array of HTMLElement
 */
function createElements(...elementTags) {
  if (elementTags.length === 1) {
    return document.createElement(elementTags[0]);
  }
  // else
  const elements = [];
  elementTags.forEach((elementTag) => {
    const element = document.createElement(elementTag);
    elements.push(element);
  });
  return elements;
}

/** Appends child elements to a parent element
 *
 * @param {Array of HTMLElement} childs
 * @param {HTMLElement} parent
 */
function appendChildren(parent, childs) {
  childs.forEach((child) => {
    $(parent).append(child);
  });
}

function addClasses(elements, classNames) {
  elements.forEach((element, i) => {
    Array.isArray(classNames[i])
      ? element.classList.add(...classNames[i])
      : element.classList.add(classNames[i]);
  });
}

export { addClasses, createElements, appendChildren, isDOM, isTag };
