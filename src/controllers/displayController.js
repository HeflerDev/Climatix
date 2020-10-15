import forms from '../views/forms'

const displayController = (() => {

    function gatherData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000);
            const countryData = document.getElementById('country-input').value ;
            const cityData = document.getElementById('city-input').value ;
            if (cityData) {
                resolve({countryData, cityData});
            } else {
                reject('Invalid Data Input')
            }
        });
    };

    function submitFormData() {
        gatherData().then((obj) => {
            return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.cityData}&APPID=72317f5668bade497a7edbd246f2df82`);
        })
        .then((response) => {
            if (response.ok) {
                return response;
            } else {
                throw new Error("Can't find City");
            }
        }).catch((err) => {
            console.log(err);
        })
    };

    async function displaySearchForm() {
        if (! document.getElementById('search-form')) {
            const form = await forms.search();
            form.submitBtn.addEventListener('click', submitFormData);
        } else {
            alert('Form Already Displayed');
        }
    };

    document.getElementById('show-form-btn').addEventListener('click', displaySearchForm);

    return { };
})();

export default displayController;

