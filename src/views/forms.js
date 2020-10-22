import render from './render';

const forms = (() => {
  function formError(err) {
    if (!document.getElementById('err-container')) {
      render.container('err-container', 'content', ['box']);
      const msg = render.container('err-msg', 'err-container', ['err-msg']);
      msg.textContent = err;
    }
  }

  const removeErrors = () => {
    const element = document.getElementById('err-container');
    if (element) { element.remove(); }
  };

  const search = () => {
    render.container('search-form-container', 'content', 'box', 'div');
    render.container('search-form', 'search-form-container', 'flex-grid', 'form');
    render.container('city-label', 'search-form', null, 'label').textContent = 'City';
    render.container('city-input', 'search-form', ['col-12', 'col-m-6', 'col-l-3', 'field-input'], 'input');
    render.container('radio-buttons-container', 'search-form', ['minibox', 'around']);

    render.container('radio-kelvin', 'radio-buttons-container', ['minibox', 'center']);
    const kelvin = render.container('input-kelvin', 'radio-kelvin', null, 'input');
    kelvin.type = 'radio';
    kelvin.value = 'K';
    kelvin.name = 'measure';
    kelvin.checked = 'checked';
    render.container(null, 'radio-kelvin', null, 'label').textContent = 'Kelvin';

    render.container('radio-celsius', 'radio-buttons-container', ['minibox', 'center']);
    const celsius = render.container('input-celsius', 'radio-celsius', null, 'input');
    celsius.type = 'radio';
    celsius.value = 'C';
    celsius.name = 'measure';
    render.container(null, 'radio-celsius', null, 'label').textContent = 'Celsius';

    render.container('radio-faren', 'radio-buttons-container', ['minibox', 'center']);
    const faren = render.container('input-faren', 'radio-faren', null, 'input');
    faren.type = 'radio';
    faren.value = 'F';
    faren.name = 'measure';
    render.container(null, 'radio-faren', null, 'label').textContent = 'Farenheit';

    const submitBtn = render.container('city-input', 'search-form', ['col-12', 'submit-btn']);
    submitBtn.textContent = 'Submit';
    return { submitBtn };
  };
  return { search, formError, removeErrors };
})();

export default forms;
