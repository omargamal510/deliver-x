// create generic element

export function createHTMLElements(
  textArray,
  elementType,
  parent,
  className = "element"
) {
  textArray.forEach((e) => {
    const element = document.createElement(elementType);
    element.classList.add(className);
    element.innerHTML = e;

    parent.append(element);
  });
}
