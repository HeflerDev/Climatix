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

    const applyStyle = (element, temp) => {
        const score = convertData(temp);
        const colors = generateColorArray();
        const color = colors[score];
        const [red, green, blue] = color;
        element.style.backgroundColor = `rgb(${red},${green},${blue})`
    }

    return { applyStyle }

})();

export default styleController
