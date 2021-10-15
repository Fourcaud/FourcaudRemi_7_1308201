const create = (elm, attributes) => {
  const element = document.createElement(elm);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }

  return element;
};

window.create = create;
