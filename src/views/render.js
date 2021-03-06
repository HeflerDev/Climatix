const render = (() => {
  const container = (elementId, elementParent, elementClass = null, element = 'div') => {
    const div = document.createElement(element);

    if (elementId) {
      div.id = elementId;
    }
    // elementParent = userData.convertToValidId(elementParent);

    if (elementClass) {
      if (Array.isArray(elementClass)) {
        elementClass.forEach((item) => {
          div.classList.add(item);
        });
      } else {
        div.classList.add(elementClass);
      }
    }
    document.getElementById(elementParent).append(div);
    return div;
  };

  return { container };
})();

export default render;
