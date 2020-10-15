import forms from '../views/forms'
import content from '../views/content'

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

    async function displaySearchResult(temp) {
        await content.forecast(temp);
    }

    function handleForm() {
        gatherData().then((obj) => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.cityData}&APPID=72317f5668bade497a7edbd246f2df82`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Invalid City')
                }
            }).then(data => {
                const temp = data.main.temp;
                const feelsLike = data.main.feels_like;
                const minTemp = data.main.temp_min;
                const maxTemp = data.main.temp_max;
                const humidity = data.main.humidity;
                displaySearchResult({
                    temp,
                    feelsLike,
                    minTemp,
                    maxTemp,
                    humidity,
                });
            })
        }).catch((err) => {
            console.error(err);
        })
    };

    async function displaySearchForm() {
        if (! document.getElementById('search-form')) {
            const form = await forms.search();
            form.submitBtn.addEventListener('click', handleForm);
        } else {
            alert('Form Already Displayed');
        }
    };

    document.getElementById('show-form-btn').addEventListener('click', displaySearchForm);

    return { };
})();

export default displayController;

