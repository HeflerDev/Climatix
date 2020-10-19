import render from './render' ;

const content = (() => {

    const forecast = (obj) => {
        render.container('forecast-container', 'content', 'box')
        render.container('forecast-results', 'forecast-container', 'flex-grid')

        render.container('forecast-temp-container', 'forecast-results', ['col-12', 'box', 'data-container']);
            render.container('forecast-temp-desc', 'forecast-temp-container').textContent = 'Temperature'
            const temp = render.container('forecast-temp', 'forecast-temp-container');
            temp.textContent = obj.temp;
            render.container('feelslike-info-container', 'forecast-temp-container', ['minibox']);
            render.container('feelslike-info', 'feelslike-info-container', 'start').textContent = obj.feelsLike;

        render.container('forecast-mintemp-container', 'forecast-results', ['col-12', 'col-m-6', 'box', 'data-container']);
            render.container('forecast-mintemp-desc', 'forecast-mintemp-container').textContent = 'MinTemp';
            const minTemp = render.container('forecast-mintemp', 'forecast-mintemp-container');
            minTemp.textContent = obj.minTemp;

        render.container('forecast-maxtemp-container', 'forecast-results', ['col-12', 'col-m-6', 'box', 'data-container']);
            render.container('forecast-maxtemp-desc', 'forecast-maxtemp-container').textContent = 'Max Temp';
            const maxTemp = render.container('forecast-maxtemp', 'forecast-maxtemp-container');
            maxTemp.textContent = obj.maxTemp;

        render.container('forecast-humidity-container', 'forecast-results', ['col-12', 'box', 'data-container']);
            render.container('forecast-humidity-desc', 'forecast-humidity-container').textContent = 'Humidity';
            const humidity = render.container('forecast-humidity', 'forecast-humidity-container');
            humidity.textContent = obj.humidity;
    };
    return { forecast }
})();

export default content;
