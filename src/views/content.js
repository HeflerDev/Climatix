import render from './render';

const content = (() => {
  function loading() {
    if (!document.getElementById('loading-container')) {
      render.container('loading-container', 'content', 'box');
      render.container('loading', 'loading-container').textContent = 'Loading...';
    }
  }

  function removeLoading() {
    document.getElementById('loading-container').remove();
  }

  const forecast = (obj) => {
    render.container('forecast-container', 'content', 'box');
    render.container('forecast-results', 'forecast-container', 'flex-grid');

    const tempDiv = render.container('forecast-temp-container', 'forecast-results', ['col-12', 'box', 'data-container']);
    render.container('forecast-temp-desc', 'forecast-temp-container').textContent = 'Temperature';
    const temp = render.container('forecast-temp', 'forecast-temp-container');
    temp.textContent = obj.temp;
    render.container('feelslike-info-container', 'forecast-temp-container', ['minibox']);
    render.container('feelslike-info', 'feelslike-info-container', 'start').textContent = obj.feelsLike;

    render.container('comparison-container', 'forecast-results', ['minibox', 'between', 'no-spacing']);

    const minTempDiv = render.container('forecast-mintemp-container', 'comparison-container', ['col-12', 'col-m-6', 'box', 'data-container']);
    render.container('forecast-mintemp-desc', 'forecast-mintemp-container').textContent = 'MinTemp';
    const minTemp = render.container('forecast-mintemp', 'forecast-mintemp-container');
    minTemp.textContent = obj.minTemp;

    const maxTempDiv = render.container('forecast-maxtemp-container', 'comparison-container', ['col-12', 'col-m-6', 'box', 'data-container']);
    render.container('forecast-maxtemp-desc', 'forecast-maxtemp-container').textContent = 'Max Temp';
    const maxTemp = render.container('forecast-maxtemp', 'forecast-maxtemp-container');
    maxTemp.textContent = obj.maxTemp;

    const humidityDiv = render.container('forecast-humidity-container', 'forecast-results', ['col-12', 'box', 'data-container']);
    render.container('forecast-humidity-desc', 'forecast-humidity-container').textContent = 'Humidity';
    const humidity = render.container('forecast-humidity', 'forecast-humidity-container');
    humidity.textContent = obj.humidity;

    return {
      tempDiv,
      minTempDiv,
      maxTempDiv,
      humidityDiv,
    };
  };
  return { forecast, loading, removeLoading };
})();

export default content;
