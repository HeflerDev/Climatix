const styleController = (() => {

    function generateColorArray() {
        let rgb = [[0, 0, 255]];

        while (rgb.length < 255) {
            let i = rgb.length;
            rgb.push([i, Math.floor(i/2), 255-i])
        }
        return rgb;
    }

    function convertData(temp) {
        let measure = Math.floor((temp - 273.15)* 1.6);
        let mod = 5;
        if (measure < 0) { measure = 0 };
        if (measure > 50) { measure = 50 }
        return measure * mod;
    };

    const applyDinamicStyle = (elementObj, data) => {
        const temperatureScore = convertData(data.main.temp);
        const minTemperatureScore = convertData(data.main.temp_min/1.01);
        const maxTemperatureScore = convertData(data.main.temp_max*1.01);

        const colors = generateColorArray();

        const colorTemperature = colors[temperatureScore];
        const colorMinTemperature = colors[minTemperatureScore];
        const colorMaxTemperature = colors[maxTemperatureScore];

        const [red, green, blue] = colorTemperature;
        elementObj.tempDiv.style.backgroundColor = `rgb(${red},${green},${blue})`

        const [darkRed, darkGreen, darkBlue] = colorMinTemperature;
        elementObj.minTempDiv.style.backgroundColor = `rgb(${darkRed},${darkGreen},${darkBlue})`

        const [lightRed, lightGreen, lightBlue] = colorMaxTemperature;
        elementObj.maxTempDiv.style.backgroundColor = `rgb(${lightRed},${lightGreen},${lightBlue})`

        const humidityLevel = data.main.humidity;

        if (humidityLevel < 40) {
            elementObj.humidityDiv.style.backgroundColor = 'yellow';
        } else if (humidityLevel < 60) {

            elementObj.humidityDiv.style.backgroundColor = 'lightgreen';
        } else {
            elementObj.humidityDiv.style.backgroundColor = 'lightblue';
        }

    }

    return { applyDinamicStyle }

})();

export default styleController
