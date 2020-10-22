import forms from '../views/forms';
import content from '../views/content';
import styleController from './styleController';

const displayController = (() => {
  function gatherData() {
    return new Promise((resolve, reject) => {
      const cityData = document.getElementById('city-input').value;
      const measureUnit = document.querySelector('input[name="measure"]:checked').value;
      if (cityData) {
        resolve({ cityData, measureUnit });
      } else {
        reject(new Error('Invalid City'));
      }
    });
  }

  const displaySearchResult = (temp) => {
    const containers = content.forecast(temp);
    styleController.applyDinamicStyle(containers, temp.data);


    document.getElementById('search-form-container').remove();
    content.removeLoading();
  };

  const swapSearchBtnText = () => {
    const check = document.getElementById('show-form-btn');
    if (check.textContent === 'Search') {
      check.textContent = 'Make another search';
    }
  };

  const removeResultIfPresent = () => {
    const check = document.getElementById('forecast-container');
    if (check) { check.remove(); }
  };

  const convertValue = (value, unit) => {
    try {
      if (unit === 'C') {
        const res = (value - 273.15).toFixed(2);
        return `${res}°`;
      } if (unit === 'F') {
        const res = ((((value - 273.15) * 9) / 5) + 32).toFixed(2);
        return `${res}F`;
      }
      return `${value}K`;
    } catch (err) {
      return ('Invalid');
    }
  };

  const handleForm = () => {
    content.loading();
    gatherData().then((obj) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${obj.cityData}&APPID=72317f5668bade497a7edbd246f2df82`)
        .then((res) => {
          if (res.ok) {
            swapSearchBtnText();
            forms.removeErrors();
            return res.json();
          }
          content.removeLoading();
          forms.formError("Error: The search doesn't match any results");
          throw new Error('Invalid City');
        }).then(data => {
          const temp = convertValue(data.main.temp, obj.measureUnit);
          let feelsLike = convertValue(data.main.feels_like, obj.measureUnit);
          const minTemp = convertValue(data.main.temp_min, obj.measureUnit);
          const maxTemp = convertValue(data.main.temp_max, obj.measureUnit);
          const { humidity } = data.main;
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
            data,
          });
        });
    }).catch((err) => {
      content.removeLoading();
      throw new Error(err);
    });
  };

  const displaySearchForm = () => {
    removeResultIfPresent();
    document.body.style.background = 'none';
    if (!document.getElementById('search-form')) {
      const form = forms.search();
      form.submitBtn.addEventListener('click', handleForm);
    } else {
      /* eslint-disable no-alert */
      alert('Form Already Displayed');
      /* eslint-enable no-alert */
    }
  };

  document.getElementById('show-form-btn').addEventListener('click', displaySearchForm);

  return { };
})();

export default displayController;
