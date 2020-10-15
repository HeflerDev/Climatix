import render from './render';

const forms = (() => {
    const search = () => {
        render.container('search-form-container',  'content', 'box', 'div');
            render.container('search-form', 'search-form-container', 'flex-grid', 'div');
                render.container('country-label', 'search-form', 'col-3', 'label').textContent = 'ifsf';
                render.container('country-input', 'search-form', 'col-3', 'input');
                render.container('city-label', 'search-form', 'col-3', 'label');
                render.container('city-input', 'search-form', 'col-3', 'input');
                const submitBtn = render.container('city-input', 'search-form', ['col-12', 'submit-btn']);
                submitBtn.textContent = 'Submit'
        return { submitBtn }
    }
    return { search };
})();

export default forms;
