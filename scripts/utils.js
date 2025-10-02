// create generic element

// hasHTML checker
function hasHTML(text) {
  const regex = /<[^>]+>/g;
  return regex.test(text);
}

// appendHTMLElement Factory function => factory design
function elementFactory(type, className = "element", text = "") {
  const el = document.createElement(type);
  if (className) el.classList.add(className);
  if (text) {
    if (hasHTML(text)) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  }
  return el;
}

// Usage
export function appendSmallHTMLElement(
  textArray,
  elementType,
  parent,
  className
) {
  textArray.forEach((text) => {
    const element = elementFactory(elementType, className, text);
    parent.append(element);
  });
}

export function appendObjectHTMLElement(
  dataObject,
  elementsType = [],
  parent,
  className
) {
  dataObject.forEach(({ ...props }) => {
    Object.keys(props).forEach((e, index) => {
      const el = document.createElement(elementsType[index]);
    });
  });
}
