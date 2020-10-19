import forms from '../views/forms'
import content from '../views/content'

const displayController = (() => {

    function gatherData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(1), 1000);
            const countryData = document.getElementById('country-input').value ;
            const cityData = document.getElementById('city-input').value ;
            const measureUnit = document.querySelector('input[name="measure"]:checked').value;
            if (cityData) {
                resolve({countryData, cityData, measureUnit});
            } else {
                reject('Invalid Data Input')
            }
        });
    };

    async function displaySearchResult(temp) {
        document.getElementById('search-form-container').remove();
        await content.forecast(temp);
        content.removeLoading();
    }

    function convertValue(value, unit) {
        try {
            if (unit === 'C') {
                const res = (value - 273.15).toFixed(2);
                return `${res}°`;
            } else if (unit === 'F') {
                const res = (((value - 273.15)*9/5)+32).toFixed(2);
                return `${res}F`;
            } else {
                return `${value}K`;
            }
        } catch(err) {
            return ('Invalid');
        }
    }

    function handleForm() {
        content.loading();
        gatherData().then((obj) => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.cityData}&APPID=72317f5668bade497a7edbd246f2df82`)
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Invalid City')
                }
            }).then(data => {
                const temp = convertValue(data.main.temp, obj.measureUnit);
                let feelsLike = convertValue(data.main.feels_like, obj.measureUnit);
                const minTemp = convertValue(data.main.temp_min, obj.measureUnit);
                const maxTemp = convertValue(data.main.temp_max, obj.measureUnit);
                const humidity = data.main.humidity;
                if (data.main.feels_like > data.main.temp) {
                    const oldData = feelsLike;
                    feelsLike = `...but feels warmer, measuring ${oldData}`;
                } else if (data.main.feels_like < data.main.temp) {
                    const oldData = feelsLike;
                    feelsLike = `...but feels colder, measuring ${oldData}`;
                } else {
                    feelsLike = 'The temperature and the feeling match';
                }
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

