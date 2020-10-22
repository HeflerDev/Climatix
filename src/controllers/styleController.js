const styleController = (() => {
  function generateColorArray() {
    const rgb = [[0, 0, 255]];

    while (rgb.length < 255) {
      const i = rgb.length;
      rgb.push([i, Math.floor(i / 2), 255 - i]);
    }
    return rgb;
  }

  function convertData(temp) {
    let measure = Math.floor((temp - 273.15) * 1.6);
    const mod = 5;
    if (measure < 0) { measure = 0; }
    if (measure > 50) { measure = 50; }
    return measure * mod;
  }

  const applyDinamicStyle = (elementObj, data) => {
    const temperatureScore = convertData(data.main.temp);
    const minTemperatureScore = convertData(data.main.temp_min / 1.01);
    const maxTemperatureScore = convertData(data.main.temp_max * 1.01);

    const darkPalette = convertData(data.main.temp / 1.30);

    const colors = generateColorArray();

    const colorTemperature = colors[temperatureScore];
    const colorMinTemperature = colors[minTemperatureScore];
    const colorMaxTemperature = colors[maxTemperatureScore];
    const colorDarker = colors[darkPalette];

    const [darkerRed,, darkerBlue] = colorDarker;

    const [red, green, blue] = colorTemperature;
    // elementObj.tempDiv.style.backgroundColor = `rgb(${red},${green},${blue})`
    elementObj.tempDiv.style.color = `rgb(${green / 2},${green},${green / 2})`;

    const [darkRed, darkGreen, darkBlue] = colorMinTemperature;

    const [lightRed, lightGreen, lightBlue] = colorMaxTemperature;
    elementObj.maxTempDiv.style.backgroundColor = `rgb(${lightRed},${lightGreen},${lightBlue})`;
    elementObj.maxTempDiv.style.color = `rgb(${0},${green},${0})`;
    elementObj.minTempDiv.style.backgroundColor = `rgb(${darkRed},${darkGreen},${darkBlue})`;
    elementObj.minTempDiv.style.color = `rgb(${255},${green},${255})`;

    document.getElementById('feelslike-info-container').style.backgroundColor = `rgba(${darkerRed},${0},${darkerBlue}, 0.2)`;
    document.getElementById('feelslike-info-container').style.color = `rgb(${0},${0},${blue})`;

    document.body.style.background = `linear-gradient(191deg, rgba(${blue}, ${green}, ${red}, 0.3), rgb(${red},${green}, ${blue})`;

    const humidityLevel = data.main.humidity;

    if (humidityLevel < 40) {
      elementObj.humidityDiv.classList.add('low-humidity');
    } else if (humidityLevel < 60) {
      elementObj.humidityDiv.classList.add('medium-humidity');
    } else {
      elementObj.humidityDiv.classList.add('high-humidity');
    }
  };

  return { applyDinamicStyle };
})();

export default styleController;
